"use client";

import { ComponentPreviewContainer } from "@/components/common/component-preview-container";
import { Box } from "@/components/content/layouts/Box";
import { Flex } from "@/components/content/layouts/Flex";
import { Link } from "fumadocs-core/framework";
import { Heading } from "fumadocs-ui/components/heading";

export function BoxDemo() {
  // const { props, updateProp, resetProps, hasChanges } = useComponentProps(defaultValue)

  // const { spacing, direction, justifyItems, alignItems } = props

  return (
    <Flex direction="column">
      <ComponentPreviewContainer>
        <Flex justifyItems="center" alignItems="center" className="h-full">
          <Box className=" w-44 h-44 bg-blue-600 mx-auto hover:bg-blue-300 transition-all" />
        </Flex>
      </ComponentPreviewContainer>

      <Heading as="h2" id="customize">
        Customize
        <Link href="#customize" />
      </Heading>
    </Flex>
  );
}
