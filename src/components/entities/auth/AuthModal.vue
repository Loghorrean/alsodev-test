<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import {ModalEmits, ModalProps} from "@/utils/types";
import ProjectModal from "@/components/shared/ProjectModal.vue";
import ProjectButton from "@/components/shared/ProjectButton.vue";
const props = defineProps<ModalProps>();

defineEmits<ModalEmits>();
</script>

<template>
  <ProjectModal @close="$emit('close')" :active="props.active">
    <div @click.stop class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="$emit('close')">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text">
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password">
          </label>
        </fieldset>
        <!-- /.modal-body -->
        <div class="modal-footer">
          <div class="footer-buttons">
            <ProjectButton primary class="button-login" type="submit">Войти</ProjectButton>
          </div>
        </div>
      </form>
    </div>
  </ProjectModal>
</template>

<style scoped lang="scss">
.modal-dialog-auth {
  width: auto;
  position: relative;
}

.modal-footer {
  justify-content: flex-end;
}

.close-auth {
  font-size: 36px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 20px;
}

.label-auth {
  display: block;
  margin: 30px;
  & span {
    width: 80px;
    display: inline-block;
  }
}
</style>