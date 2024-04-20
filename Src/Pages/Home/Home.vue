<template>
  <div class="hero container">
    <picture>
      <source media="(max-width:600px)" srcset="@/Assets/Images/Bg-Horizontal.png">
      
      <img src="@/Assets/Images/Bg-Vertical.png" alt="rest api">
    </picture>
  </div>
</template>

<script setup>
// Hooks
import useTabTitle from '@/Hooks/UseTabTitle';
useTabTitle('Home');
</script>

<style>
.hero img {
  object-fit: contain;
  max-height: 55vh;
}
</style>