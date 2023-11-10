<script setup lang="ts">
import {defineProps, withDefaults} from "vue";
type ProjectInputProps = {
  value?: string;
  setValue?: (value: string) => void;
}

const props = withDefaults(defineProps<ProjectInputProps>(), {
  value: "",
  setValue: () => {}
});

const handleInput = (event: Event) => {
  const text = (event.target as HTMLInputElement).value;
  props.setValue(text);
}
</script>

<template>
  <input class="input" type="text" :value="props.value" @input="handleInput" />
</template>

<style scoped>
.input {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 8px 8px 35px;
  background-repeat: no-repeat;
  background-position: left 11px center;
}
</style>