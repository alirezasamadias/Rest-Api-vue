<template>
  <Hero title="edit user" icon="icon-user">
      <template v-slot:icon>
        <i class="icon-edit"></i>
      </template>
  </Hero>

  <FormData @update="editCard">
    <template v-slot:formGroups>
      <div class="form-group">
        <label for="name" class="form-label">name:</label>
        <input
        type="text"
        id="name"
        class="form-control"
        v-model="user.name"
        required>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">email:</label>
        <input
        type="email"
        id="email"
        class="form-control"
        v-model="user.email"
        required>
      </div>
      
      <div class="form-group">
        <label for="phone" class="form-label">phone:</label>
        <input
        type="tel"
        id="phone"
        class="form-control"
        v-model="user.phone"
        required>
      </div>

      <div class="form-group">
        <label for="website" class="form-label">website:</label>
        <input
        type="text"
        id="website"
        class="form-control"
        v-model="user.website"
        required>
      </div>
    </template>
  </FormData>
</template>

<script setup>
// Hooks
import useTabTitle from '@/Hooks/UseTabTitle';
useTabTitle(`Edit User ${route.params.id}`);

// Components
import Hero from '@/Parts/Hero.vue';
import FormData from '@/Components/FormData.vue';

import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { urlUsers } from '@/Server/Api';
import Swal from 'sweetalert2';

const user = ref({});
const route = useRoute();

const fetchAPI = async () => {
  const response = await axios.get(`${urlUsers}/${route.params.id}`);
  user.value = response.data;
};

fetchAPI();

const editCard = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: "Are you sure to edit?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, edit it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then( result => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Edited!",
        text: "Your file has been edited.",
        icon: "success"
      });

      sendCard();
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });
}

const sendCard = async () => {
  await axios.put(`${urlUsers}/${user.value.id}`,{
    id: user.value.id,
    name: user.value.name
  });
};
</script>