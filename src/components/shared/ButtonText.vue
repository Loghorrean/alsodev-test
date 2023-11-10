<script setup lang="ts">

</script>

<template>
<span class="button-text"><slot></slot></span>
</template>

<style scoped>
@media (max-width: 480px) {
  .button-text {
    display: none;
  }
}
</style>