<template>
  <Hero title="edit post" icon="icon-post">
    <template v-slot:icon>
      <i class="icon-edit"></i>
    </template>
  </Hero>

  <FormData @update="editCard">
    <template v-slot:formGroups>
      <div class="form-group">
        <label for="title" class="form-label">title:</label>
        <input
        type="text"
        id="title"
        class="form-control"
        v-model="post.title"
        required>
      </div>

      <div class="form-group">
        <label for="body" class="form-label">body:</label>
        <textarea
        rows="6"
        id="body"
        class="form-control"
        v-model="post.body"
        required></textarea>
      </div>
    </template>
  </FormData>
</template>

<script setup>
// Hooks
import useTabTitle from '@/Hooks/UseTabTitle';
useTabTitle(`Edit Post ${route.params.id}`);

// Components
import Hero from '@/Parts/Hero.vue';
import FormData from '@/Components/FormData.vue';

import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { urlPosts } from '@/Server/Api';
import Swal from 'sweetalert2';

const post = ref({});
const route = useRoute();

const fetchAPI = async () => {
  const response = await axios.get(`${urlPosts}/${route.params.id}`);
  post.value = response.data;
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
  await axios.put(`${urlPosts}/${post.value.id}`,{
    id: post.value.id,
    name: post.value.name
  });
};
</script>