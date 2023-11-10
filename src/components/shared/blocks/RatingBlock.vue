<script setup lang="ts">
import ratingImage from "@/assets/icons/rating.svg";
</script>

<template>
  <div :style="{ backgroundImage: `url('${ratingImage}')` }" class="rating"><slot></slot></div>
</template>

<style scoped lang="scss">
.rating {
  background-repeat: no-repeat;
  background-position: 0 7px;
  padding-left: 20px;
  margin-right: 26px;
  color: #ffc107;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  @media (max-width: 1366px) {
    margin-right: 15px;
  }
}
</style>