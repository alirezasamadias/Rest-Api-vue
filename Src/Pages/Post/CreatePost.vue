<template>
  <Hero title="create post" icon="icon-create-post"/>

  <FormData @update="createCard">
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
useTabTitle('Create Post');

// Components
import Hero from '@/Parts/Hero.vue';
import FormData from '@/Components/FormData.vue';

import axios from 'axios';
import { reactive } from 'vue';
import { urlPosts } from '@/Server/Api';
import Swal from 'sweetalert2';

const post = reactive({
  title: '',
  body: ''
});

const postAPI = async () => {
  await axios.post(urlPosts,{
    title: post.title ,
    body: post.body
  });
};

const clearForm = () => {
  post.title = '';
  post.body = '';
}

const createCard = () => {
  if (post.title !== '' && post.body  !== '') {
    clearForm();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    
    swalWithBootstrapButtons.fire({
      title: "Are you sure to create?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, create it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then( result => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "created!",
          text: "Your file has been created.",
          icon: "success"
        });

        postAPI();
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
}
</script>