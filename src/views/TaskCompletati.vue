<template>
    <v-app>
        <AppBar></AppBar>
        <v-main>
            <v-container class="d-flex justify-center align-center flex-column">
                <h2 class="text-center mb-2">Tasks Completati</h2>
                <v-card elevation="2" class="pa-4" max-width="1000" style="width: 80%;">
                    <v-row>
                        <v-col cols="8">
                            <v-text-field label="Inserisci la task" outlined color="primary" density="compact"
                                v-model="filterTask"></v-text-field>
                        </v-col>
                        <v-col cols="4" class="d-flex justify-center">
                            <v-select :items="users" item-text="name" item-value="id" label="All Users" outlined
                                v-model="filterId" :disabled="filterTask.length ? true : false"></v-select>
                        </v-col>
                    </v-row>

                    <hr class="mt-2 mb-2">

                    <v-list v-if="filter.length">
                        <v-list-item v-for="(item, index) in filter">
                            {{ item.nameUser }} - {{ item.name }}
                        </v-list-item>
                    </v-list>
                    <v-list v-else>
                        <v-list-item>
                            Non ci sono tasks!
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';

export default {
    name: 'TaskCompletati',
    components: {
        AppBar
    },
    data() {
        return {
            tasks: [],
            users: [],
            filterId: null,
            filterTask: '',
            disabled: false
        }
    },
    computed: {
        filter() {
            if (!this.filterTask) {
                if (!this.filterId) return this.tasks;
                return this.tasks.filter((element) => element.idUser === this.filterId ? element : null)
            }
            return this.tasks.filter((element) => (element.nameUser.includes(this.filterTask) || element.name.includes(this.filterTask)) ? element : null)
        }
    },
    created() {
        this.tasks = [...this.$store.getters.getTaskCompletati];
        this.users.push({ id: null, name: 'All Users' });
        this.$store.getters.getUsers.forEach(element => {
            this.users.push(element);
        });
    }
}
</script>
  