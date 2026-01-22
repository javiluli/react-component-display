"use client";

import { ComponentPreviewContainer } from "@/components/common/component-preview-container";
import { BackgroundContent } from "@/components/common/preview/background-content";
import { PreviewColorPicker } from "@/components/common/preview/previewColorPicker";
import { PreviewSlider } from "@/components/common/preview/previewSlider";
import { PreviewSwitch } from "@/components/common/preview/previewSwitch";
import { AnimatedGridBackdrop } from "@/components/content/backgrounds/AnimatedGridBackdrop";
import { useComponentProps } from "@/hooks/useComponentProps";
import { Link } from "fumadocs-core/framework";
import { Heading } from "fumadocs-ui/components/heading";

const defaultValue = {
  squareWidth: 80,
  squareHeight: 80,
  totalSquares: 20,
  squareSpacing: 1,
  squareColors1: "#FF4D4D",
  squareColors2: "#E1FF4D",
  squareColors3: "#4DFF88",
  squareColors4: "#4DA6FF",
  squareColors5: "#C44DFF",
  duration: 8,
  showGrid: true,
  gridColors: "#242424",
};

export function AnimatedGridBackdropDemo() {
  const { props, updateProp, resetProps, hasChanges } =
    useComponentProps(defaultValue);

  const {
    squareWidth,
    squareHeight,
    totalSquares,
    squareSpacing,
    squareColors1,
    squareColors2,
    squareColors3,
    squareColors4,
    squareColors5,
    duration,
    showGrid,
    gridColors,
  } = props;

  return (
    <div className="space-y-6">
      <ComponentPreviewContainer>
        <AnimatedGridBackdrop
          squareWidth={squareWidth}
          squareHeight={squareHeight}
          totalSquares={totalSquares}
          squareSpacing={squareSpacing}
          squareColors={[
            squareColors1,
            squareColors2,
            squareColors3,
            squareColors4,
            squareColors5,
          ]}
          duration={duration}
          showGrid={showGrid}
          gridColors={gridColors}
        />

        <BackgroundContent />
      </ComponentPreviewContainer>

      <Heading as="h2" id="customize">
        Customize
        <Link href="#customize" />
      </Heading>

      <div className="flex flex-col gap-6">
        <PreviewSlider
          label="Width of square"
          value={squareWidth}
          min={1}
          max={100}
          onChange={(e) => updateProp("squareWidth", Number(e.target.value))}
        />

        <PreviewSlider
          label="Height of square"
          value={squareHeight}
          min={1}
          max={100}
          onChange={(e) => updateProp("squareHeight", Number(e.target.value))}
        />

        <PreviewSlider
          label="Total animated squares"
          value={totalSquares}
          min={1}
          max={120}
          onChange={(e) => updateProp("totalSquares", Number(e.target.value))}
        />

        <PreviewSlider
          label="Spacing between squares"
          value={squareSpacing}
          min={0}
          max={20}
          onChange={(e) => updateProp("squareSpacing", Number(e.target.value))}
        />

        <div className="flex gap-4">
          <PreviewColorPicker
            label="Color 1"
            color={squareColors1}
            onChange={(e) => updateProp("squareColors1", e.target.value)}
          />
          <PreviewColorPicker
            label="Color 2"
            color={squareColors2}
            onChange={(e) => updateProp("squareColors2", e.target.value)}
          />
          <PreviewColorPicker
            label="Color 3"
            color={squareColors3}
            onChange={(e) => updateProp("squareColors3", e.target.value)}
          />
          <PreviewColorPicker
            label="Color 4"
            color={squareColors4}
            onChange={(e) => updateProp("squareColors4", e.target.value)}
          />
          <PreviewColorPicker
            label="Color 5"
            color={squareColors5}
            onChange={(e) => updateProp("squareColors5", e.target.value)}
          />
        </div>

        <PreviewSlider
          label="Duration of animation"
          value={duration}
          min={1}
          max={30}
          onChange={(e) => updateProp("duration", Number(e.target.value))}
        />

        <PreviewSwitch
          label="Show the grid"
          checked={showGrid}
          onChange={(value) => updateProp("showGrid", value)}
        />

        <PreviewColorPicker
          label="Color of grid"
          color={gridColors}
          onChange={(e) => updateProp("gridColors", e.target.value)}
          showColorText
        />
      </div>
    </div>
  );
}
