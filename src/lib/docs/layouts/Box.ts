import { createComponentSource } from "@/lib/docs/createComponentSource";

export const componentSource = createComponentSource({
  scope: "layouts",
  name: "Box",
  files: {
    interface: "box.types.ts",
    tsx: "index.tsx",
  },
});
