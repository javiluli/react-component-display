import { createComponentSource } from "@/lib/docs/createComponentSource";

export const componentSource = createComponentSource({
  scope: "components",
  name: "Marquee",
  files: {
    interface: "marquee.types.ts",
    tsx: "index.tsx",
    css: "styles.css",
  },
});
