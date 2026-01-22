"use client";

import { ComponentPreviewContainer } from "@/components/common/component-preview-container";
import { SpotlightCard } from "@/components/content/components/SpotlightCard";
import { Box } from "@/components/content/layouts/Box";
import { Flex } from "@/components/content/layouts/Flex";
import { remToPx } from "@/utils";
import { Heading } from "fumadocs-ui/components/heading";

export function SpotlightCardDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreviewContainer>
        <Flex spacing={remToPx(1)} className="h-full">
          <SpotlightCard>
            <Box className="max-w-xs w-full py-2 px-4">
              <Heading>Lorem Ipsum Product</Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
            </Box>
          </SpotlightCard>
          <SpotlightCard colorGlow="glowPurple">
            <Box className="max-w-xs w-full py-2 px-4">
              <Heading>Lorem Ipsum Product</Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
            </Box>
          </SpotlightCard>
          <SpotlightCard colorGlow="glowTeal">
            <Box className="max-w-xs w-full py-2 px-4">
              <Heading>Lorem Ipsum Product</Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
            </Box>
          </SpotlightCard>
        </Flex>
      </ComponentPreviewContainer>
    </div>
  );
}
