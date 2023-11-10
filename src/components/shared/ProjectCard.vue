<script setup lang="ts">
import {Component, defineProps, NativeElements} from "vue";

type ProjectCardProps = {
  as?: keyof NativeElements | Component;
}

const props = defineProps<ProjectCardProps>();
</script>

<template>
  <component :is="props.as" class="card"><slot></slot></component>
</template>

<style>
.card {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 30px;
  flex-basis: 31%;
  text-decoration: none;
  @media (max-width: 992px) {
    flex-basis: 49%;
  }
  @media (max-width: 768px) {
    & .rating {
      flex-basis: 100%;
    }
  }
  @media (max-width: 578px) {
    flex-basis: 100%;
  }
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media (max-width: 578px) {
    width: 100%;
  }
}

.card-text {
  padding: 20px 23px 35px;
  min-height: 275px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    min-height: 290px;
  }
  @media (max-width: 578px) {
    min-height: auto;
  }
}

.card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-title {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.card-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
}
</style>