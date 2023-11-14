// See
// https://github.com/davidbludlow/marco-polo-archive-organizer/blob/main/README.md
// for instructions on how to use this.

import { walk } from 'https://deno.land/std@0.206.0/fs/walk.ts';
import { readZip } from 'https://deno.land/x/jszip@0.11.0/mod.ts';
import { join, parse } from 'https://deno.land/std@0.206.0/path/mod.ts';
import { testRange } from 'https://deno.land/std@0.206.0/semver/test_range.ts';
import { tryParse as tryParseVersion } from 'https://deno.land/std@0.206.0/semver/try_parse.ts';
import { parseRange } from 'https://deno.land/std@0.206.0/semver/parse_range.ts';

// If you are just going to compile this program and run it as a standalone
// executable, then you may delete all the following version check code:
const parsedDenoVersion = tryParseVersion(Deno.version.deno);
const minimumDenoVersion = '1.38.1';
if (
  !parsedDenoVersion ||
  !testRange(parsedDenoVersion, parseRange(`>=${minimumDenoVersion}`)) ||
  // Deno v2 probably hasn't come out yet
  !testRange(parsedDenoVersion, parseRange('<2'))
) {
  console.warn(
    `Warning: This program was built for deno version ${minimumDenoVersion} but you have deno version ${Deno.version.deno}. You can easily change your deno version (if you are connected to the internet) by running the command:

deno upgrade --version ${minimumDenoVersion}

Then try running this program again. When you are done, you can always easily go back to the version of deno that you have right now by running:

deno upgrade --version ${Deno.version.deno}

No stress!
`,
  );
}

// Get the first argument on the command line.
let inputFolderPath: string | undefined | null = Deno.args[0];
while (!inputFolderPath) {
  // Ask the user, over and over, until they answer
  inputFolderPath = prompt(
    'Where is the folder that contains the .zip files that contain polos?',
  );
}

console.log(
  'Note that this program is slower than most other zip extractors, so it may take a few minuets to extract each zip file.' +
    // This flag is used when the program is compiled via `deno task compile`
    (Deno.args[1] === '--suppress-talking-about-permissions'
      ? ''
      : ` (I could have made it faster, but I wanted this program to be runnable with Deno, because it is safer for you. A program run with Deno doesn't have permission to do anything harmful to your computer or your data unless you give it permission to do so.)
`),
);

await Deno.permissions.request({ name: 'read', path: inputFolderPath });
await Deno.permissions.request({ name: 'write', path: inputFolderPath });

let zipFileCount = 0;
for await (const entry of walk(inputFolderPath)) {
  if (entry.isFile && entry.name.endsWith('.zip')) {
    const zipFilePath = entry.path;
    const { base: zipFileName } = parse(zipFilePath);
    /** This is the same as the zip file's name but without the part of the file
     * name that is like "_1_of_12.zip" */
    const destinationFolderName = /(.*)_\d+_of_\d+\.zip/.exec(zipFileName)?.[1];
    if (!destinationFolderName) {
      console.log(
        `Skipping "${zipFileName}" because it does not match the expected file name pattern e.g. John_S_1_of_12.zip`,
      );
      continue;
    }
    const destinationFolderPath = join(inputFolderPath, destinationFolderName);
    // Create the destination folder if it doesn't exist already
    await Deno.mkdir(destinationFolderPath, { recursive: true });

    console.log(`Extracting "${zipFileName}" into "${destinationFolderPath}"`);
    const jsZip = await readZip(zipFilePath);
    await jsZip.unzip(destinationFolderPath);
    zipFileCount++;

    // Delete the zip file after extracting it
    await Deno.remove(zipFilePath);
  }
}

if (zipFileCount === 0) {
  console.log(
    `No zip files with polos found in "${inputFolderPath}". You need to specify a folder that contains zip files with polos.`,
  );
} else {
  console.log(
    `Done extracting polos from the zip files in "${inputFolderPath}"`,
  );
}
