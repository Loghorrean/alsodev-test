<script setup lang="ts">
import ContainerBlock from "@/components/layout/ContainerBlock.vue";
import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
</script>

<template>
  <ContainerBlock>
    <MainHeader />
  </ContainerBlock>
  <slot></slot>
  <ContainerBlock>
    <MainFooter />
  </ContainerBlock>
</template>

<style scoped>

</style>