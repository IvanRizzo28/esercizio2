<template>
    <v-app-bar class="justify-space-between">
        <v-app-bar-title>{{ $store.getters.getLogUser.name }}</v-app-bar-title>
        <!--nav-->
        <v-breadcrumbs :items="$router.options.routes">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :disabled="$route.name === item.name ? true : false" v-if="item.meta.auth">
                    <router-link :to="item.path" :class="$route.name === item.name ? 'disabled' : ''">
                        {{ item.name.toUpperCase() }}
                    </router-link>
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
        <!--nav-->
        <v-spacer></v-spacer>
        <v-btn color="primary" large x-small @click="logout">Logout</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppBar',
    methods: {
        logout() {
            this.$store.dispatch('setLog', { id: null, name: '' });
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
.disabled{
    color: gray;
}
</style>
  