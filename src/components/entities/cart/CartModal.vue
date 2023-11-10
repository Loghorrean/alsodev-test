<script setup lang="ts">
import {computed, defineProps, inject} from "vue";
import {ModalEmits, ModalProps} from "@/utils/types";
import ProjectModal from "@/components/shared/ProjectModal.vue";
import ProjectButton from "@/components/shared/ProjectButton.vue";
import {CartState} from "@/main";
import ProjectCounter from "@/components/shared/ProjectCounter.vue";
import {defineEmits} from "vue/dist/vue";
import NotFoundBlock from "@/components/shared/blocks/NotFoundBlock.vue";

const props = defineProps<ModalProps>();

defineEmits<ModalEmits>();

const { state, clear, incrementEntry, decrementEntry } = inject<CartState>("cart") as CartState;

const totalCartPrice = computed(() => {
  return state.value.reduce((prev, cur) => { return prev + cur.price * cur.amount }, 0);
});
</script>

<template>
  <ProjectModal @close="$emit('close')" :active="props.active" class="modal-cart">
    <div @click.stop class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="$emit('close')">&times;</button>
      </div>
      <div class="modal-body">
        <NotFoundBlock v-if="state.length === 0">Корзина пуста</NotFoundBlock>
        <div v-else v-for="item in state" :key="item.id" class="food-row">
          <span class="food-name">{{ item.name }}</span>
          <strong class="food-price">{{ item.price * item.amount }} ₽</strong>
          <ProjectCounter
              :amount="item.amount"
              @decrement="() => decrementEntry(item.id)"
              @increment="() => incrementEntry(item.id)"
          />
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ totalCartPrice }} ₽</span>
        <div class="footer-buttons">
          <ProjectButton primary>Оформить заказ</ProjectButton>
          <ProjectButton class="clear-cart" @click="clear">Отмена</ProjectButton>
        </div>
      </div>
    </div>
  </ProjectModal>
</template>

<style scoped lang="scss">
.close {
  font-size: 36px;
  border: none;
  background-color: transparent;
}

.modal-pricetag {
  background: #262626;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px 20px;
  font-size: 20px;
  line-height: 23px;
}

.food-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 15px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
}

.food-name {
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
}

.food-price {
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  @media (min-width: 480px) {
    margin-left: auto;
    margin-right: 47px;
  }
}
</style>