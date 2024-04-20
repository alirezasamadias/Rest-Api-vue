<template>
  <a href='#' class="scroll-up btn-secondary icon-up" :class="{'hide' : hide}"></a>
</template>

<script setup>
import { ref } from "vue";

let hide = ref(true);

window.addEventListener('scroll', () => {
  window.scrollY > 500 ? hide.value = false : hide.value = true;
});
</script>

<style>
.scroll-up {
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  position: fixed;
  bottom: 4%;
  right: 2%;
  z-index: 99;
  font-size: 32px;
  color: #fff;
  transition-duration: var(--duration-time);
}

.hide {
  opacity: 0;
  visibility: hidden;
}

/* Responsive */
@media (max-width: 768px) {
  .scroll-up {
    transform: scale(0.8);
  }
}
</style>