<template>
  <Hero title="users" icon="icon-users"/>
  
  <Loading v-if="loading" />

  <div class="container grid-container">
    <Card
    pageTarget="user-page"
    :cardId="user.id"
    :cardTitle="user.name"
    btnText="show user"
    v-for="user in users"
    :key="user.id">
      <template v-slot:cardBody>
        <ul class="card-list">
          <li class="card-list-item">
            <span>Username:</span>
            <span>{{user.username}}</span>
          </li>
          
          <li class="card-list-item">
            <span>Email:</span>
            <span>{{user.email}}</span>
          </li>
          
          <li class="card-list-item">
            <span>Phone:</span>
            <span>{{user.phone}}</span>
          </li>
          
          <li class="card-list-item">
            <span>Website:</span>
            <span>{{user.website}}</span>
          </li>
        </ul>
      </template>
    </Card>
  </div>
</template>

<script setup>
// Hooks
import useTabTitle from '@/Hooks/UseTabTitle';
useTabTitle('Users');

// Components
import Hero from '@/Parts/Hero.vue';
import Card from '@/Components/Card.vue';
import Loading from '@/Components/Loading.vue';

import axios from 'axios';
import { ref } from 'vue';
import { urlUsers } from '@/Server/Api';

const users = ref();
const loading = ref(true);

const fetchAPI = async () => {
  const response = await axios.get(urlUsers);
  users.value = response.data;
  loading.value = false;
};

fetchAPI();
</script>