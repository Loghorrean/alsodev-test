<script setup lang="ts">
import {defineProps} from "vue";
import ProjectCard from "@/components/shared/ProjectCard.vue";
import {Restaurant} from "@/utils/types";
import RatingBlock from "@/components/shared/blocks/RatingBlock.vue";
import PriceBlock from "@/components/shared/blocks/PriceBlock.vue";
import CategoryBlock from "@/components/shared/blocks/CategoryBlock.vue";

type RestaurantCardProps = {
  restaurant: Restaurant;
}

const props = defineProps<RestaurantCardProps>();
</script>

<template>
  <ProjectCard
      as="RouterLink"
      :to="{ name: 'detailed', params: { slug: props.restaurant.slug } }"
      class="card-restaurant"
  >
    <img :src="props.restaurant.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ props.restaurant.name }}</h3>
        <span class="card-tag tag">{{ props.restaurant.time_of_delivery }} мин</span>
      </div>
      <div class="card-info">
        <RatingBlock>
          {{ props.restaurant.stars }}
        </RatingBlock>
        <PriceBlock>От {{ props.restaurant.price }} ₽</PriceBlock>
        <CategoryBlock>{{ props.restaurant.kitchen }}</CategoryBlock>
      </div>
    </div>
  </ProjectCard>
</template>

<style scoped lang="scss">
.card-restaurant {
  cursor: pointer
}

.card-tag {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  background: #262626;
  border-radius: 2px;
  padding: 1px 8px;
}

.card-text {
  min-height: auto;
}
</style>