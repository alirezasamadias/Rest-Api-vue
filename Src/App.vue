<template>
  <SiteLoader/>
  
  <header id="header">
    <Header />
  </header>

  <main id="main">
    <router-view></router-view>
  </main>

  <footer id="footer">
    <Footer />
  </footer>
</template>

<script setup>
// Components
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import SiteLoader from './Components/SiteLoader.vue';
</script>