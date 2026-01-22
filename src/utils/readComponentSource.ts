// lib/docs/read-source.ts
import "server-only";

import fs from "node:fs";
import path from "node:path";
import { extractDocs } from "@/utils/extractDocs";

const CONTENT_ROOT = path.join(process.cwd(), "src/components/content");

export function readComponentSource(
  scope: string,
  componentName: string,
  fileName: string,
) {
  const resolvedPath = path.resolve(
    CONTENT_ROOT,
    scope,
    componentName,
    fileName,
  );

  if (!resolvedPath.startsWith(CONTENT_ROOT)) {
    throw new Error("Invalid source path");
  }

  const source = fs.readFileSync(resolvedPath, "utf-8");
  return extractDocs(source);
}
