"use client";

import { ComponentPreviewContainer } from "@/components/common/component-preview-container";
import { Marquee } from "@/components/content/components/Marquee";
import { Actividad } from "@/components/content/components/Marquee/marquee.types";
import { Flex } from "@/components/content/layouts/Flex";

const activities: Actividad[] = [
  {
    title: "Step",
    description: "Coordina y quema calorías al ritmo de la música.",
  },
  {
    title: "Zona de boxeo",
    description: "Entrena fuerza y resistencia con técnica.",
  },
  {
    title: "Pesas y cardio",
    description: "Combina levantamiento y cardio eficazmente.",
  },
  {
    title: "Zumba",
    description: "Baila y entrena con energía contagiosa.",
  },
  {
    title: "Pilates",
    description: "Fortalece tu core y mejora tu flexibilidad.",
  },
  {
    title: "Yoga",
    description: "Conecta cuerpo y mente con equilibrio.",
  },
];

export function MarqueeDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreviewContainer>
        <Flex direction="column" justifyItems="around" className="h-full">
          <Marquee activities={activities.slice(1, 4)} animationDuration={35} />
          <Marquee
            activities={activities.slice(2, 4)}
            animationDuration={20}
            reverse={true}
          />
        </Flex>
      </ComponentPreviewContainer>
    </div>
  );
}
