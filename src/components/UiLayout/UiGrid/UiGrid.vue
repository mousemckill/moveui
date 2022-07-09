<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
/* Mobile */
/* Columns: 4; Gutter: 16 px */

/* Desktop */
/* Columns: 12; Gutter: 16 px */

/* Desktop RFQ */
/* Columns: 12; Gutter: 22 px */

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
}

@media only screen and (min-width: 769px) {
  .grid {
    grid-template-columns: repeat(12, 1fr);
  }
}

@media only screen and (min-width: 1025px) {
  .grid {
    column-gap: 22px;
  }
}
</style>
