import { createComponentSource } from "@/lib/docs/createComponentSource";

export const componentSource = createComponentSource({
  scope: "components",
  name: "SpotlightCard",
  files: {
    interface: "spotlightCard.types.ts",
    tsx: "index.tsx",
    css: "styles.css",
  },
});
