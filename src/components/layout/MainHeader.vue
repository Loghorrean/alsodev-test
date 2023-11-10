<script setup lang="ts">
import logo from "@/assets/logo/logo.svg";
import ProjectInput from "@/components/shared/ProjectInput.vue";
import ButtonText from "@/components/shared/ButtonText.vue";
import ProjectButton from "@/components/shared/ProjectButton.vue";
import homeIcon from "@/assets/icons/home.svg";
import {ref} from "vue";
import AuthModal from "@/components/entities/auth/AuthModal.vue";
import CartModal from "@/components/entities/cart/CartModal.vue";

const authModalOpened = ref(false);
const openAuthModal = () => {
  authModalOpened.value = true;
}
const cartModalOpened = ref(false);
const openCartModal = () => {
  cartModalOpened.value = true;
}
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">
      <img :src=logo alt="Logo" />
    </RouterLink>
    <label class="address">
      <ProjectInput
          type="text"
          class="input-address"
          :style="{ backgroundImage: `url(${homeIcon})` }"
          placeholder="Адрес доставки"
      />
    </label>
    <div class="buttons">
      <span class="user-name"></span>
      <ProjectButton primary class="button-auth" @click="openAuthModal">
        <span class="button-auth-svg"></span>
        <ButtonText>Войти</ButtonText>
      </ProjectButton>
      <AuthModal @close="() => {authModalOpened = false}" :active="authModalOpened" />
      <ProjectButton class="button-cart" id="cart-button" @click="openCartModal">
        <span class="button-cart-svg"></span>
        <ButtonText>Корзина</ButtonText>
      </ProjectButton>
      <CartModal @close="() => cartModalOpened = false" :active="cartModalOpened" />
      <ProjectButton class="button-out">
        <ButtonText>Выйти</ButtonText>
        <span class="button-out-svg"></span>
      </ProjectButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 578px) {
    flex-wrap: wrap;
  }
}

.address {
  flex: 0.8;
  @media (max-width: 578px) {
    min-width: 100%;
    order: 1;
  }
}

.input-address {
  width: 100%;
  @media (max-width: 578px) {
    margin-top: 15px;
    order: 5;
    flex: 1;
  }
}

.buttons {
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    margin-left: auto;
  }
}

.user-name {
  display: none;
  margin-right: 20px;
  font-weight: bold;
  font-size: 18px;
  @media (max-width: 480px) {
    margin: 10px;
  }
}

.button-out {
  display: none;
  margin: 0 5px;
}

@media screen and (max-width: 480px) {
  .button-out-svg {
    width: 24px;
    height: 24px;
    background-color: #fff;
    -webkit-mask: url(../../assets/icons/logout.svg) no-repeat 50% 50%;
    mask: url(../../assets/icons/logout.svg) no-repeat 50% 50%;
    background-repeat: no-repeat;
    -webkit-mask-size: 20px;
    mask-size: 20px;
  }
}

.button-auth {
  background-position: 20px 13px;
  & > .button-auth-svg {
    width: 24px;
    height: 24px;
    background-color: #fff;
    -webkit-mask: url("../../assets/icons/user.svg") no-repeat 50% 50%;
    mask: url("../../assets/icons/user.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
  }
  &:hover {
    & > .button-auth-svg {
      background-color: #595959;
    }
  }
}

.button-cart {
  margin: 0 5px;
  & > .button-cart-svg {
    width: 24px;
    height: 24px;
    background-color: #595959;
    -webkit-mask: url("../../assets/icons/shopping-cart.svg") no-repeat 50% 50%;
    mask: url("../../assets/icons/shopping-cart.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
  }
  &:hover {
    & > .button-cart-svg {
      background-color: #fff;
    }
  }
}
</style>