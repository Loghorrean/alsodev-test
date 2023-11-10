<script setup lang="ts">

</script>

<template>
  <div class="category"><slot></slot></div>
</template>

<style scoped lang="scss">
.category {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;
  @media (max-width: 1366px) {
    font-size: 14px;
  }
}
</style>