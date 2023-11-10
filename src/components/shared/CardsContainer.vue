<template>
  <div class="cards"><slot></slot></div>
</template>

<style scoped>
.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>