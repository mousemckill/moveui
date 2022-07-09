<template>
  <ui-container class="black">
    <h2>Monochromatic</h2>
    <ui-grid>
      <ui-grid-col span="2" md-span="6">
        <color-preview
          title="White"
          :value="monochromaticWhite.value"
          :color-variable="monochromaticWhite.colorVariable"
        />
      </ui-grid-col>
      <ui-grid-col span="2" md-span="6">
        <color-preview
          title="Black"
          :value="monochromaticBlack.value"
          :color-variable="monochromaticBlack.colorVariable"
          inverted
        />
      </ui-grid-col>
    </ui-grid>
    <ui-grid class="mt-24">
      <ui-grid-col
        span="2"
        md-span="2"
        v-for="(color, name) in monochromatic1"
        :key="name"
      >
        <color-preview
          :title="name"
          :value="color.value"
          :color-variable="color.colorVariable"
          :inverted="color.inverted"
          :bordered="color.bordered"
        />
      </ui-grid-col>
    </ui-grid>
    <ui-grid class="mt-24">
      <ui-grid-col
        span="2"
        md-span="2"
        v-for="(color, name) in monochromatic2"
        :key="name"
      >
        <color-preview
          :title="name"
          :value="color.value"
          :color-variable="color.colorVariable"
          :inverted="color.inverted"
        />
      </ui-grid-col>
    </ui-grid>
    <h2>Primary</h2>
    <ui-grid>
      <ui-grid-col
        span="2"
        md-span="3"
        v-for="(color, name) in primary1"
        :key="name"
      >
        <color-preview
          :title="name"
          :value="color.value"
          :color-variable="color.colorVariable"
          :inverted="color.inverted"
        />
      </ui-grid-col>
    </ui-grid>
    <ui-grid class="mt-24">
      <ui-grid-col
        span="2"
        md-span="3"
        v-for="(color, name) in primary2"
        :key="name"
      >
        <color-preview
          :title="name"
          :value="color.value"
          :color-variable="color.colorVariable"
          :inverted="color.inverted"
        />
      </ui-grid-col>
    </ui-grid>
  </ui-container>
</template>

<script setup lang="ts">
import { UiGrid, UiGridCol, UiContainer } from "../components/UiLayout";
import ColorPreview from "./ColorPreview.vue";

type Color = {
  value: string;
  colorVariable: string;
  inverted?: boolean;
  bordered?: boolean;
};

const monochromaticWhite: Color = {
  value: "#FFFFFF",
  colorVariable: "monochromatic-white",
};
const monochromaticBlack: Color = {
  value: "#000000",
  inverted: true,
  colorVariable: "monochromatic-black",
};

const monochromatic1: Record<string, Color> = {
  Alabaster: {
    value: "#F7F7F7",
    colorVariable: "monochromatic-alabaster",
    bordered: true,
  },
  BlackHaze: { value: "#EFF0F0", colorVariable: "monochromatic-black-haze" },
  Concrete: { value: "#F2F2F2", colorVariable: "monochromatic-concrete" },
  Gallery: { value: "#EEEEEE", colorVariable: "monochromatic-gallery" },
  Mercury: { value: "#E8E8E8", colorVariable: "monochromatic-mercury" },
  Alto: { value: "#DDDDD", colorVariable: "monochromatic-alto" },
};

const monochromatic2: Record<string, Color> = {
  Nobel: { value: "#C4C4C4", colorVariable: "monochromatic-nobel" },
  Silver: { value: "#BBBBBB", colorVariable: "monochromatic-silver" },
  Delta: {
    value: "#A6A6A6",
    inverted: true,
    colorVariable: "monochromatic-delta",
  },
  Dull: {
    value: "#888888",
    inverted: true,
    colorVariable: "monochromatic-dull",
  },
  DoveGrey: {
    value: "#737373",
    inverted: true,
    colorVariable: "monochromatic-dove-grey",
  },
  MineShaft: {
    value: "#333333",
    inverted: true,
    colorVariable: "monochromatic-mine-shaft",
  },
};

const primary1: Record<string, Color> = {
  MoveBlue: {
    value: "#34617C",
    colorVariable: "primary-move-blue",
    inverted: true,
  },
  SurfGreen: {
    value: "#119476",
    colorVariable: "primary-surf-green",
    inverted: true,
  },
  Whiskey: {
    value: "#D29E61",
    colorVariable: "primary-whiskey",
    inverted: true,
  },
  Salmon: {
    value: "#FF8173",
    colorVariable: "primary-salmon",
    inverted: true,
  },
};

const primary2: Record<string, Color> = {
  Navy: { value: "#0C5E96", colorVariable: "primary-navy", inverted: true },
  GreenHaze: {
    value: "#00B22D",
    colorVariable: "primary-green-haze",
    inverted: true,
  },
  Mustard: {
    value: "#FFD657",
    colorVariable: "primary-mustard",
    inverted: false,
  },
  Valencia: {
    value: "#D93A39",
    colorVariable: "primary-valencia",
    inverted: true,
  },
};
</script>

<style scoped></style>
