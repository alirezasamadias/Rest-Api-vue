<template>
  <Hero title="post" icon="icon-post"/>

  <Loading v-if="loading"/>

  <div class="container container-sm">
    <Card
    v-if="!loading"
    pageTarget="edit-post"
    :cardId="post.id"
    :cardTitle="post.title"
    btnText="edit">
      <template v-slot:cardBody>
        <p class="card-body">{{post.body}}</p>
      </template>

      <template v-slot:btnDelete>
          <button class="btn btn-delete" @click="clear">delete</button>
      </template>
    </Card>
  </div>
</template>

<script setup>
// Hooks
import useTabTitle from '@/Hooks/UseTabTitle';
useTabTitle(`Post ${route.params.id}`);

// Components
import Hero from '@/Parts/Hero.vue';
import Card from '@/Components/Card.vue';
import Loading from '@/Components/Loading.vue';

import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { urlPosts } from '@/Server/Api';
import Swal from 'sweetalert2';

const post = ref({});
const route = useRoute();
const loading = ref(true);

const fetchAPI = async () => {
  const response = await axios.get(`${urlPosts}/${route.params.id}`);
  post.value = response.data;
  loading.value = false;
};

fetchAPI();

const clear = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: "Are you sure to delete?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then( result => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

      deleteUser();
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

const deleteUser= async() => 
  await axios.delete(`${urlPosts}/${post.value.id}`);
</script>