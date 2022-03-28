import { compileFromFile } from "json-schema-to-typescript";
import { writeFileSync, existsSync, mkdirSync } from "fs";

(async () => {
  try {
    const dir = "../../typescript";
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }
    writeFileSync(
      "../../typescript/schema.ts",
      await compileFromFile("../../schema/schema.json")
    );
  } catch (error) {
    console.error(error);
  }
})();
