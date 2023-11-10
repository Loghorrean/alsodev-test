<script setup lang="ts">
import {defineProps} from "vue";
import {ModalEmits, ModalProps} from "@/utils/types";
import {defineEmits} from "vue/dist/vue";

const props = defineProps<ModalProps>();

defineEmits<ModalEmits>();
</script>

<template>
  <div class="modal" :class="{ 'modal___open': props.active }" @click="$emit('close')">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  z-index: 999;
  &___open {
    display: flex;
  }
  &-dialog {
    max-width: 780px;
    width: 95%;
    background: #ffffff;
    border-radius: 5px;
    margin: auto;
    padding: 40px 45px;
    //for overflowing in modal, if vertical content is too long
    max-height: 100dvh;
    overflow: auto;
    scrollbar-color: transparent transparent;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
      width: 1px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
  }
  &-body {
    margin-bottom: 22px;
  }
  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

// Reusable styles for children components
.modal-title {
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
}

.footer-buttons {
  display: flex;
  align-items: center;
}
</style>