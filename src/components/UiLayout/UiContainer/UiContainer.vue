<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Mobile */
/* Margin: 16 px */

/* Desktop */
/* Margin: 80 px */

/* Desktop RFQ */
/* Margin: 100 px */

.container {
  margin-left: 16px;
  margin-right: 16px;
}

@media only screen and (min-width: 769px) {
  .container {
    margin-left: 80px;
    margin-right: 80px;
  }
}

@media only screen and (min-width: 1025px) {
  .container {
    margin-left: 100px;
    margin-right: 100px;
  }
}
</style>
