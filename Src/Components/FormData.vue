<template>  
  <div class="container container-sm">
    <form class="card" @submit.prevent="sendEvent">
      <slot name="formGroups"></slot>

      <input type="submit" value="save" class="btn btn-primary">
    </form>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['update']);
const sendEvent = () => emit('update');
</script>

<style>
.form-group {
  display: flex;
  column-gap: 15px;
}

.form-label {
  min-width: 65px;
  padding-top: 12px;
  text-transform: capitalize;
}

.form-control {
  flex-grow: 1;
  padding: 15px;
  background-color: #fcfcfc;
  border-radius: 15px;
  font: 15px / 1.5 'maven-medium';
}

input[type=submit] {
  margin-top: 30px;
}

/* Responsive */
@media (max-width:600px) {
  .form-group {
    flex-direction: column;
    row-gap: 8px;
  }
  
  .form-label {
    padding-top: 8px;
  }
}
</style>