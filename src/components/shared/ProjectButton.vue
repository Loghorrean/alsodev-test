<script setup lang="ts">
import {defineProps, withDefaults} from "vue";

type ProjectButtonProps = {
  primary?: boolean;
};

withDefaults(defineProps<ProjectButtonProps>(), {
  primary: false
});
</script>

<template>
  <button class="button" :class="{ 'button-primary': primary }" data-primary="primary"><slot></slot></button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;
  &:hover, &-primary {
    background: #1890ff;
    border: 1px solid #1890ff;
    color: #fff;
  }
  &-primary {
    margin-right: 10px;
    &:hover {
      background: #ffffff;
      border: 1px solid #d9d9d9;
      color: #595959;
    }
  }
  @media (max-width: 480px) {
    min-height: 40px;
    padding: 5px 12px;
  }
}
</style>