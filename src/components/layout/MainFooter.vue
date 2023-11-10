<script setup lang="ts">
import logo from "@/assets/logo/logo.svg";
import mediaInstagram from "@/assets/media/instagram.svg";
import mediaVk from "@/assets/media/vk.svg";
import mediaFb from "@/assets/media/fb.svg";
import ContainerBlock from "@/components/layout/ContainerBlock.vue";
</script>

<template>
  <footer class="footer">
    <ContainerBlock>
      <div class="footer-block">
        <img :src="logo" alt="logo" class="logo footer-logo" />
        <nav class="footer-nav">
          <RouterLink to="/" class="footer-link">Ресторанам </RouterLink>
          <RouterLink to="/" class="footer-link">Курьерам</RouterLink>
          <RouterLink to="/" class="footer-link">Пресс-центр</RouterLink>
          <RouterLink to="/" class="footer-link">Контакты</RouterLink>
        </nav>
        <div class="social-links">
          <a href="https://www.instagram.com/" class="social-link"><img :src="mediaInstagram" alt="instagram" /></a>
          <a href="https://www.facebook.com" class="social-link"><img :src="mediaFb" alt="facebook" /></a>
          <a href="https://vk.com/" class="social-link"><img :src="mediaVk" alt="vk" /></a>
        </div>
      </div>
    </ContainerBlock>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 60px 0;
  @media (max-width: 578px) {
    padding: 30px 0;
  }
}

.footer-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 578px) {
    align-items: flex-start;
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
}

.footer-nav {
  margin-left: 35px;
  margin-right: auto;
  @media (max-width: 578px) {
    margin-left: 0;
    margin-right: 0;
    order: 0;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    margin-bottom: 20px;
    text-align: center;
  }
}

.footer-link {
  display: inline-block;
  color: #595959;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media (max-width: 992px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    &:not(:last-child) {
      margin-right: 0;
    }
  }
}

.footer-logo {
  @media (max-width: 578px) {
    margin-right: 15px;
    order: 1;
  }
  @media (max-width: 480px) {
    order: 0;
    margin-bottom: 20px;
  }
}

.social-links {
  display: flex;
  align-items: center;
  @media (max-width: 578px) {
    order: 2;
  }
}

.social-link:not(:last-child) {
  margin-right: 21px;
}
</style>