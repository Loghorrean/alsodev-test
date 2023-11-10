<script setup lang="ts">
import {computed, defineProps, inject, toRefs} from "vue";
import {Product} from "@/utils/types";
import ProjectCard from "@/components/shared/ProjectCard.vue";
import ProjectButton from "@/components/shared/ProjectButton.vue";
import {CartState} from "@/main";
import ProjectCounter from "@/components/shared/ProjectCounter.vue";
import {CartEntry} from "@/components/entities/cart/model";

type ProductCardProps = {
  product: Product;
}

const props = defineProps<ProductCardProps>();
const { product } = toRefs(props);

const { state, decrementEntry, incrementEntry, addNewEntry } = inject<CartState>("cart") as CartState;

const productEntryInCart = computed((): CartEntry | undefined => {
  return state.value.filter(item => item.id === product.value.id)[0];
});

const handleClick = () => {
  addNewEntry(product.value);
}
</script>

<template>
  <ProjectCard as="div">
    <img :src="product.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ product.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">{{ product.description }}</div>
      </div>
      <div class="card-buttons">
        <ProjectButton v-if="typeof productEntryInCart === 'undefined'" primary class="button-add-cart" @click="handleClick">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </ProjectButton>
        <ProjectCounter
            v-else
            :amount="productEntryInCart.amount"
            @decrement="() => decrementEntry(product.id)"
            @increment="() => incrementEntry(product.id)"
        />
        <strong class="card-price-bold">{{ product.price }} ₽</strong>
      </div>
    </div>
  </ProjectCard>
</template>

<style scoped lang="scss">
.card-title-reg {
  font-weight: 400;
}

.card-price-bold {
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
}

.ingredients {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 21px;
}

.card-buttons {
  display: flex;
  margin-top: 24px;
  flex-grow: 1;
  align-items: flex-end;
}

.button-card-text {
  margin-right: 10px;
}
</style>