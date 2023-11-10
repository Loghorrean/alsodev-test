<script setup lang="ts">
import {computed, ref} from "vue";
import ProjectMain from "@/components/layout/ProjectMain.vue";
import ContainerBlock from "@/components/layout/ContainerBlock.vue";
import pizzaPromoImg from "@/assets/promo/pizza.png";
import {provideData} from "@/utils/providers/provideData";
import ProjectInput from "@/components/shared/ProjectInput.vue";
import searchIcon from "@/assets/icons/search.svg";
import CardsContainer from "@/components/shared/CardsContainer.vue";
import RestaurantCard from "@/components/entities/restaurant/RestaurantCard.vue";
import NotFoundBlock from "@/components/shared/blocks/NotFoundBlock.vue";

const allRestaurants = provideData();

const filter = ref("");

const filteredRestaurants = computed(() => {
  return allRestaurants.filter(item => item.name.toLowerCase().includes(filter.value.toLowerCase()));
});
</script>

<template>
  <ProjectMain>
    <ContainerBlock>
      <section class="container-promo">
        <section class="promo pizza" :style="{ backgroundImage: `url('${pizzaPromoImg}')` }">
          <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
          <p class="promo-text">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
          </p>
        </section>
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <ProjectInput
                type="text"
                :value="filter"
                :set-value="(value) => filter = value"
                class="input-search"
                :style="{ backgroundImage: `url(${searchIcon})` }"
                placeholder="Поиск блюд и ресторанов"
            />
          </label>
        </div>
        <NotFoundBlock v-if="filteredRestaurants.length === 0"></NotFoundBlock>
        <CardsContainer v-else class="restaurants">
          <RestaurantCard
              v-for="restaurant in filteredRestaurants"
              :key="restaurant.slug"
              :restaurant="restaurant"
          />
        </CardsContainer>
      </section>
    </ContainerBlock>
  </ProjectMain>
</template>

<style scoped>
.promo {
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
  padding: 68px 70px;
  margin-bottom: 56px;
  @media (max-width: 578px) {
    background-image: none;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
}

.pizza {
  background-color: #fff1b8;
  background-repeat: no-repeat;
  background-position: top -100px right -250px;
  background-size: 830px;
  @media (max-width: 1366px) {
    background-position: center right -300px;
    background-size: 750px;
  }
  @media (max-width: 992px) {
    padding: 50px;
    background-size: 500px;
    background-position: center right -200px;
  }
  @media (max-width: 768px) {
    background-size: 400px;
    background-position: bottom 50px right -200px;
  }
}

.promo-title {
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  color: #302c34;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.4;
  }
  @media (max-width: 578px) {
    margin-bottom: 10px;
  }
}

.promo-text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #302c34;
  max-width: 538px;
  @media (max-width: 992px) {
    font-size: 18px;
    max-width: 400px;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
}
</style>