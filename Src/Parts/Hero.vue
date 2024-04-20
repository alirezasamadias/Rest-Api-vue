<template>
  <div class="hero">
    <section class="container">
      <div class="hero-icon title-lg">
          <i :class="[props.icon]"></i>
          <slot name="icon"></slot>
      </div>

      <h2 class="title-lg">{{props.title}}</h2>
    </section>

    <slot name="btn"></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['icon', 'title']);
</script>

<style>
.hero-icon {
  padding-right: 15px;
}
</style>