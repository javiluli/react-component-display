import { createComponentSource } from "@/lib/docs/createComponentSource";

export const componentSource = createComponentSource({
  scope: "backgrounds",
  name: "AnimatedGridBackdrop",
  files: {
    tsx: "index.tsx",
    interface: "AnimatedGridBackdrop.types.ts",
  },
});
