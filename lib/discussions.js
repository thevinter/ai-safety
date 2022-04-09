import fs from "fs";
import path from "path";

const discussionsDir = path.join(process.cwd(), "discussions");

export function getAllDiscussionsId() {
  const fileNames = fs.readdirSync(discussionsDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
}
