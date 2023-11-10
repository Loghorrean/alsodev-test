<script setup lang="ts">
import {defineProps, defineEmits, toRefs} from "vue";

type Props = {
  amount: number;
}

const props = defineProps<Props>();
const { amount } = toRefs(props);

type Emits = {
  (event: "increment"): void;
  (event: "decrement"): void
}

defineEmits<Emits>();
</script>

<template>
  <div class="counter-block">
    <button class="counter-button" @click="() => $emit('decrement')">-</button>
    <span class="counter">{{ amount }}</span>
    <button class="counter-button" @click="() => $emit('increment')">+</button>
  </div>
</template>

<style scoped lang="scss">
.counter-block {
  display: flex;
  align-items: center;
}

.counter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #40a9ff;
  box-sizing: border-box;
  border-radius: 2px;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #40a9ff;
}

.counter-button:hover {
  background: #40a9ff;
  border: 1px solid #ffffff;
  color: #ffffff;
}

.counter {
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>