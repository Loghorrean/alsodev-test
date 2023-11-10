<script setup lang="ts">
import {computed, ref} from "vue";
import ProjectMain from "@/components/layout/ProjectMain.vue";
import ContainerBlock from "@/components/layout/ContainerBlock.vue";
import RatingBlock from "@/components/shared/blocks/RatingBlock.vue";
import PriceBlock from "@/components/shared/blocks/PriceBlock.vue";
import CategoryBlock from "@/components/shared/blocks/CategoryBlock.vue";
import {useRoute} from "vue-router";
import {provideData} from "@/utils/providers/provideData";
import searchIcon from "@/assets/icons/search.svg";
import ProjectInput from "@/components/shared/ProjectInput.vue";
import CardsContainer from "@/components/shared/CardsContainer.vue";
import ProductCard from "@/components/entities/product/ProductCard.vue";
import {useSortingDirection} from "@/utils/composables";
import {SORTING_DIRECTION, SortingDirection} from "@/utils/types/SortingDirection";
import {Product} from "@/utils/types";
import SortingDirectionToggle from "@/components/shared/SortingDirectionToggle.vue";
import NotFoundBlock from "@/components/shared/blocks/NotFoundBlock.vue";

const route = useRoute();
const slug = route.params.slug;
const restaurant = provideData().filter(item => item.slug === slug)[0];

const nameFilter = ref("");
const descriptionFilter = ref("");

const [direction, toggleDirection] = useSortingDirection();

const productSortingCallbacksMap: Record<SortingDirection, (first: Product, second: Product) => number> = {
  [SORTING_DIRECTION.ASC]: (first, second) => { return second.price - first.price },
  [SORTING_DIRECTION.DESC]: (first, second) => { return first.price - second.price },
}

const filteredProducts = computed(() => {
  let products = [...restaurant.products];
  if (direction.value !== null) {
    products = products.sort(productSortingCallbacksMap[direction.value]);
  }
  return products.filter(
      item => item.name.toLowerCase().includes(nameFilter.value.toLowerCase())
          && item.description.toLowerCase().includes(descriptionFilter.value.toLowerCase())
  );
});
</script>

<template>
  <ProjectMain>
    <ContainerBlock>
      <section>
        <div class="section-heading detailed-restaurant-section">
          <div class="detailed-restaurant-section__heading">
            <h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
            <div class="card-info">
              <RatingBlock>
                {{ restaurant.stars }}
              </RatingBlock>
              <PriceBlock>От {{ restaurant.price }} ₽</PriceBlock>
              <CategoryBlock>{{ restaurant.kitchen }}</CategoryBlock>
            </div>
          </div>
          <div class="search product-search">
            <ProjectInput
                type="text"
                :value="nameFilter"
                :set-value="(value) => nameFilter = value"
                class="input-search"
                :style="{ backgroundImage: `url(${searchIcon})` }"
                placeholder="Поиск по названию"
            />
            <ProjectInput
                type="text"
                :value="descriptionFilter"
                :set-value="(value) => descriptionFilter = value"
                class="input-search"
                :style="{ backgroundImage: `url(${searchIcon})` }"
                placeholder="Поиск по составу"
            />
          </div>
        </div>
        <div class="sorting">
          <p class="sorting__text">Сортировка по цене:</p>
          <SortingDirectionToggle
              :direction="direction"
              :toggle-direction="toggleDirection"
              asc-text="Сначала дорогие"
              desc-text="Сначала дешевые"
          />
        </div>
        <NotFoundBlock v-if="filteredProducts.length === 0">Блюда не найдены :(</NotFoundBlock>
        <CardsContainer v-else class="cards-menu">
          <ProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
          />
        </CardsContainer>
      </section>
    </ContainerBlock>
  </ProjectMain>
</template>

<style scoped lang="scss">
.detailed-restaurant-section {
  @media (max-width: 1366px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  &__heading {
    display: flex;
    align-items: center;
  }
}

.product-search {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.sorting {
  display: flex;
  align-items: center;
  gap: 1rem;
  &__text {
    color: #828282;
    font-size: 0.875rem;
  }
}
</style>