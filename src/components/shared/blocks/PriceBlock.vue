<script setup lang="ts">

</script>

<template>
  <div class="price"><slot></slot></div>
</template>

<style scoped lang="scss">
.price {
  margin-right: 10px;
  color: #8c8c8c;
  font-size: 18px;
  line-height: 32px;
  &::after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: #8c8c8c;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    margin-left: 10px;
  }
  @media (max-width: 1366px) {
    font-size: 14px;
  }
}
</style>