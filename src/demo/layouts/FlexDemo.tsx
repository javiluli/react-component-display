"use client";

import { ComponentPreviewContainer } from "@/components/common/component-preview-container";
import { PreviewRadio } from "@/components/common/preview/previewRadio";
import { PreviewSlider } from "@/components/common/preview/previewSlider";
import { Flex } from "@/components/content/layouts/Flex";
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
} from "@/components/content/layouts/Flex/flex.types";
import { useComponentProps } from "@/hooks/useComponentProps";
import { remToPx } from "@/utils";
import { Link } from "fumadocs-core/framework";
import { Heading } from "fumadocs-ui/components/heading";

interface DefaultValueProps {
  spacing: number;
  direction: FlexDirection;
  justifyItems: FlexJustify;
  alignItems: FlexAlign;
}

const defaultValue: DefaultValueProps = {
  spacing: 0,
  direction: "row",
  justifyItems: "start",
  alignItems: "stretch",
};

const DIRECTION_OPTIONS: FlexDirection[] = [
  "row",
  "row-reverse",
  "column",
  "column-reverse",
];
const JUSTIFY_OPTIONS: FlexJustify[] = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
];
const ALING_OPTIONS: FlexAlign[] = [
  "start",
  "center",
  "end",
  "stretch",
  "baseline",
];

export function FlexDemo() {
  const { props, updateProp, resetProps, hasChanges } =
    useComponentProps(defaultValue);

  const { spacing, direction, justifyItems, alignItems } = props;

  return (
    <Flex direction="column">
      <ComponentPreviewContainer>
        <Flex
          spacing={spacing}
          direction={direction as FlexDirection}
          justifyItems={justifyItems as FlexJustify}
          alignItems={alignItems as FlexAlign}
          className="h-full"
        >
          <Flex
            justifyItems="center"
            alignItems="center"
            className="px-5 py-5 bg-black border-2 border-white rounded-xl"
          >
            <span className="text-white text-2xl leading-none font-bold">
              1
            </span>
          </Flex>
          <Flex
            justifyItems="center"
            alignItems="center"
            className="px-8 py-8 bg-black border-2 border-white rounded-xl"
          >
            <span className="text-white text-2xl leading-none font-bold">
              2
            </span>
          </Flex>
          <Flex
            justifyItems="center"
            alignItems="center"
            className="px-11 py-11 bg-black border-2 border-white rounded-xl"
          >
            <span className="text-white text-2xl leading-none font-bold">
              3
            </span>
          </Flex>
        </Flex>
      </ComponentPreviewContainer>

      <Heading as="h2" id="customize">
        Customize
        <Link href="#customize" />
      </Heading>

      <Flex direction="column" spacing={remToPx(1.5)} className="mt-8">
        <PreviewSlider
          label="Spacing of elements"
          value={spacing}
          min={0}
          max={64}
          onChange={(e) => updateProp("spacing", Number(e.target.value))}
        />

        <Flex
          direction="column"
          spacing={remToPx(1)}
          className="px-6 py-4 border border-white/10 rounded-xl"
        >
          <p>direction</p>
          <Flex spacing={remToPx(2)}>
            {DIRECTION_OPTIONS.map((v) => {
              return (
                <PreviewRadio
                  key={v}
                  label={v}
                  groupName="direction"
                  value={v}
                  onChange={(e) =>
                    updateProp("direction", e.target.value as FlexDirection)
                  }
                  checked={direction === v}
                />
              );
            })}
          </Flex>
        </Flex>

        <Flex
          direction="column"
          spacing={remToPx(1)}
          className="px-6 py-4 border border-white/10 rounded-xl"
        >
          <p>justifyContent</p>
          <Flex spacing={remToPx(2)}>
            {JUSTIFY_OPTIONS.map((v) => {
              return (
                <PreviewRadio
                  key={v}
                  label={v}
                  groupName="justifyItems"
                  value={v}
                  onChange={(e) =>
                    updateProp("justifyItems", e.target.value as FlexJustify)
                  }
                  checked={justifyItems === v}
                />
              );
            })}
          </Flex>
        </Flex>

        <Flex
          direction="column"
          spacing={remToPx(1)}
          className="px-6 py-4 border border-white/10 rounded-xl"
        >
          <p>alignItems</p>
          <Flex direction="row" spacing={remToPx(2)}>
            {ALING_OPTIONS.map((v) => {
              return (
                <PreviewRadio
                  key={v}
                  label={v}
                  groupName="alignItems"
                  value={v}
                  onChange={(e) =>
                    updateProp("alignItems", e.target.value as FlexAlign)
                  }
                  checked={alignItems === v}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
