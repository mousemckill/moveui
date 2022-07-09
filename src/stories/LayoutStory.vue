<template>
  <ui-container>
    <ui-grid>
      <ui-grid-col span="2" lg-span="4">span 2</ui-grid-col>
      <ui-grid-col span="1" md-span="4" lg-span="2">
        span 1/md span 4
      </ui-grid-col>
      <ui-grid-col span="1" md-span="6">span 1/md span 6</ui-grid-col>
      <ui-grid-col span="4" lg-span="4">span 2</ui-grid-col>
      <ui-grid-col span="1" mdStart="6" md-span="2" lgStart="6" lg-span="2">
        span 1/md span 4
      </ui-grid-col>
    </ui-grid>
  </ui-container>
</template>

<script setup lang="ts">
import { UiGrid, UiGridCol, UiContainer } from "../components/UiLayout";
</script>

<style scoped></style>
