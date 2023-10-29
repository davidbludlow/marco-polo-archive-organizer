import { walk } from "https://deno.land/std/fs/walk.ts";
import { unzip } from "https://deno.land/std/archive/zip.ts";

const sourceFolder = "/path/to/your/folder";
const parentFolder = sourceFolder.split("/").slice(0, -1).join("/");
const destinationFolder = `${parentFolder}/${sourceFolder.split("/").pop()}`;

await Deno.permissions.request({ name: "read", path: sourceFolder });
await Deno.permissions.request({ name: "write", path: destinationFolder });

for await (const entry of walk(sourceFolder)) {
  if (entry.isFile && entry.name.endsWith(".zip")) {
    const zipFile = await Deno.readFile(entry.path);
    const unzippedFiles = await unzip(zipFile);
    for (const file of unzippedFiles) {
      const filePath = `${destinationFolder}/${file.filename}`;
      await Deno.writeFile(filePath, file.content);
    }
    await Deno.remove(entry.path);
  }
}
