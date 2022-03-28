import { compileFromFile } from "json-schema-to-typescript";
import { writeFileSync } from "fs";

(async () => {
  try {
    writeFileSync("../../typescript/schema.ts", await compileFromFile("../../schema/schema.json"));
  } catch (error) {
    console.error(error);
  }
})();
