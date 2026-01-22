import { createComponentSource } from "@/lib/docs/createComponentSource";

export const componentSource = createComponentSource({
  scope: "layouts",
  name: "Flex",
  files: {
    interface: "flex.types.ts",
    const: "flex.constants.ts",
    tsx: "index.tsx",
  },
});
