import fs from "fs";
import path from "path";

const discussionsDir = path.join(process.cwd(), "discussions");

export function getAllDiscussionsId() {
  let fileNames = fs.readdirSync(discussionsDir);
  fileNames = fileNames.filter((name) => name.includes("json"));
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
}
