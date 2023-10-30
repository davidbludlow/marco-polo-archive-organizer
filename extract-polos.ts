// This program extracts polos from all the zip files in a folder and keeps them
// organized. Then it deletes the zip files that it has successfully extracted.
// For example, if you have a folder with zip files like:
//
// - John_A_1_of_4.zip
// - John_A_2_of_4.zip
// - John_A_3_of_4.zip
// - John_A_4_of_4.zip
// - David_L_1_of_1.zip
//
// Then this program will extract the polos from those zip files and adds them
// to folders with names like:
//
// - John_A
// - David_L
//
// If those folders already existed and already contained polos, that is all
// right. The newly extracted polos will be added to the already existing polos.
//
// You can run this program with Deno or use Deno compile it into an executable
// file that can be run on a computer that doesn't have Deno installed. Don't
// worry. Deno is possibly the most lightweight and harmless-to-install program
// you have ever installed. See
// https://docs.deno.com/runtime/manual/getting_started/installation if you need
// to install Deno.

import { walk } from 'https://deno.land/std@0.204.0/fs/walk.ts';
import { readZip } from 'https://deno.land/x/jszip@0.11.0/mod.ts';
import { join, parse } from 'https://deno.land/std@0.204.0/path/mod.ts';

// If you are just going to compile this program and run it as a standalone
// executable, then you can delete the following version check code:
const denoVersion = Deno.version.deno;
const expectedDenoVersion = '1.37.2';
if (expectedDenoVersion !== denoVersion) {
  console.warn(
    `Warning: This program was built for deno version ${expectedDenoVersion} but you have deno version ${denoVersion}. You can easily change your deno version (if you are connected to the internet) by running the command:

deno upgrade --version ${expectedDenoVersion}

Then try running this program again. When you are done, you can always easily go back to the version of deno that you have right now by running:

deno upgrade --version ${denoVersion}

No stress!
`,
  );
}

// Get the first argument on the command line. If there is no argument, then
// default to the current folder.
const inputFolderPath = Deno.args[0] || '.';
let zipFilesExtractedCount = 0;

console.log(
  `Note that this program is slower than most other zip extractors, so it may take a few minuets to extract each zip file. (I could have made it faster, but I wanted this program to be runnable with Deno, because it is safer for you. A program run with Deno doesn't have permission to do anything harmful to your computer or your data unless you give it permission to do so.)
`,
);

await Deno.permissions.request({ name: 'read', path: inputFolderPath });
await Deno.permissions.request({ name: 'write', path: inputFolderPath });

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
    zipFilesExtractedCount++;

    // Delete the zip file after extracting it
    await Deno.remove(zipFilePath);
  }
}

if (zipFilesExtractedCount === 0) {
  console.log(
    `No zip files with polos found in "${inputFolderPath}". You need to specify a folder that contains zip files with polos.`,
  );
} else {
  console.log(
    `Done extracting polos from the zip files in "${inputFolderPath}"`,
  );
}