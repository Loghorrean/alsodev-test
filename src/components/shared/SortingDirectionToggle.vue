<script setup lang="ts">
import {SORTING_DIRECTION, SortingDirection} from "@/utils/types/SortingDirection";
import {defineProps, toRefs} from "vue";

type Props = {
  direction: SortingDirection | null;
  toggleDirection: () => void;
  ascText: string;
  descText: string;
}

const props = defineProps<Props>();
const { direction, toggleDirection, ascText, descText } = toRefs(props);
</script>

<template>
  <div class="sorting-direction-block" @click="toggleDirection">
    <span v-if="direction === SORTING_DIRECTION.ASC">{{ ascText }}</span>
    <span v-if="direction === SORTING_DIRECTION.DESC">{{ descText }}</span>
    <span v-if="direction === null">По умолчанию</span>
  </div>
</template>

<style scoped>
.sorting-direction-block {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem;

}
</style>