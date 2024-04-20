import { createRouter, createWebHistory } from 'vue-router';
// Components
import Home from './Pages/Home/Home.vue';
import Users from './Pages/User/Users.vue';
import UserIndex from './Pages/User/UserIndex.vue';
import UserPage from './Pages/User/UserPage.vue';
import EditUser from './Pages/User/EditUser.vue';
import Post from './Pages/Post/Post.vue';
import PostIndex from './Pages/Post/PostIndex.vue';
import PostPage from './Pages/Post/PostPage.vue';
import EditPost from './Pages/Post/EditPost.vue';
import CreatePost from './Pages/Post/CreatePost.vue';

const routes = [
    { path: '/' , name: 'home' , component: Home },

    { path: '/users' , name: 'users' , component: Users , children: [
        { path: '' , name: 'user-index' , component: UserIndex },
        { path: ':id' , name: 'user-page' , component: UserPage }, 
        { path: '/EditUser/:id' , name: 'edit-user' , component: EditUser }
    ]},

    { path: '/posts' , name: 'posts' , component: Post , children: [
        { path: '' , name: 'post-index' , component: PostIndex },
        { path: ':id' , name: 'post-page' , component: PostPage }, 
        { path: '/EditPost/:id' , name: 'edit-post' , component: EditPost },
        { path: '/CreatePost' , name: 'create-post' , component: CreatePost },  
    ]}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;