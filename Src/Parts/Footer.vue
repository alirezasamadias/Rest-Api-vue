<template>
  <section class="container">
    <h2 class="title-sm">&copy; 2024 alireza samadi</h2>

    <nav>
      <div class="tooltip" data-tooltip="github">
        <a href="https://github.com/alirezasamadias/" class="social-icon icon-github" target="_blank"></a>
      </div>
    </nav>
  </section>

  <ScrollUp/>
</template>

<script setup>
// Components
import ScrollUp from '@/Components/ScrollUp.vue';
</script>

<style scoped>
.container {
  width: min(90%,1250px);
  justify-content: space-between;
}

.social-icon {
  font-size: 26px;
  transition-duration: var(--duration-time);
}

/* tooltip */
.tooltip {
  position: relative;
}

.tooltip::before,
.tooltip::after {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  bottom: calc(100% + 15px);
  transform: translateX(-50%);
  transition-duration: 0.25s;
}

.tooltip::before {
  content: attr(data-tooltip);
  padding: 5px 10px;
  background-color: var(--secondary-color);
  border-radius: 3px;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #fff;
  text-transform: capitalize;
}

.tooltip::after {
  content: '';
  border: 5px solid transparent;
  border-top-color: var(--secondary-color);
  transform: translate(-50%,9px);
}

.tooltip:hover::after,
.tooltip:hover::before {
  opacity: 1;
  visibility: visible;
}

/* Responsive */
@media (max-width:600px) {
  .container {
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>