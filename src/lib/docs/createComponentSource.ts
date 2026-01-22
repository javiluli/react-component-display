import { readComponentSource } from "@/utils/readComponentSource";
import type { DocScope } from "./projects";

export type ComponentFile = {
  code: string;
  ext: string;
};

type ComponentSourceConfig = {
  scope: DocScope;
  name: string;
  files: Record<string, string>;
};

export function createComponentSource({
  scope,
  name,
  files,
}: ComponentSourceConfig) {
  const source: Record<string, ComponentFile> = {};

  for (const [key, fileName] of Object.entries(files)) {
    source[key] = {
      // code: readComponentSource(scope, name, fileName),
      code: readComponentSource(scope, name, fileName),
      ext: fileName.split(".").pop() || key,
    };
  }

  return source as Record<keyof typeof files, ComponentFile>;
}
