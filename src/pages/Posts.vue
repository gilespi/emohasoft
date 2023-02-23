<template>
    <div>
        <h2>User Details</h2>
        <table class="table">
            <thead>
                <tr class="table-list">
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
          <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
import axiosInstance from '../services/AxiosTokenInstance';
import { mapGetters, mapMutations } from 'vuex';
import {
    GET_USER_TOKEN_GETTER,
    LOADING_SPINNER_SHOW_MUTATION,
} from '../store/storeconstants';


export default {
    data() {
        return {
            posts: [],
        };
    },
    computed: {
        ...mapGetters('auth', {
            token: GET_USER_TOKEN_GETTER,
        }),
    },
    mounted() {
        this.showLoading(true);
        axiosInstance
          .get(`https://emphasoft-fe3f5-default-rtdb.firebaseio.com/posts.json`)
            .then((response) => {

                this.formatPosts(response.data);
                this.showLoading(false);
            })
            .catch(() => {
                this.showLoading(false);
            });
    },
    methods: {
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        formatPosts(posts) {
            for (let key in posts) {
                this.posts.push({ ...posts[key], id: key });
            }

        },
    },
};
</script>

<style scoped>
</style>
