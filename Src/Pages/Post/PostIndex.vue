<template>
  <Hero title="posts" icon="icon-posts">
    <template v-slot:btn>
      <router-link :to="{name: 'create-post'}" class="btn btn-secondary container-sm">create post</router-link>
    </template>
  </Hero>
  
  <Loading v-if="loading"/>
  
  <div class="container grid-container">
    <Card
    pageTarget="post-page"
    :cardId="post.id"
    :cardTitle="post.title"
    btnText="show post"
    v-for="post in posts"
    :key="post.id">
      <template v-slot:cardBody>
        <p class="card-body">{{post.body}}</p>
      </template>
    </Card>
  </div>
</template>

<script setup>
// Hooks
import useTabTitle from '@/Hooks/UseTabTitle';
useTabTitle('Posts');

// Components
import Hero from '@/Parts/Hero.vue';
import Card from '@/Components/Card.vue';
import Loading from '@/Components/Loading.vue';

import axios from 'axios';
import { urlPosts } from '@/Server/Api';
import { ref } from 'vue';

const posts = ref();
const loading = ref(true);

const fetchAPI = async () => {
  const response = await axios.get(urlPosts);
  posts.value = response.data;
  loading.value = false;
};

fetchAPI();
</script>