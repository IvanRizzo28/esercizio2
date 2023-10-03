<template>
    <v-app>
        <AppBar></AppBar>
        <v-main>
            <v-container class="d-flex justify-center align-center flex-column">

                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, i) in data" :key="i">
                        <v-expansion-panel-header>
                            {{ item.title }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ item.body }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-btn class="mx-2 mt-3" fab dark color="indigo" @click="getApi" v-if="!finish">
                    <v-icon dark>
                        mdi-plus
                    </v-icon>
                </v-btn>

            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import axiosClient from '../axios';

import AppBar from '@/components/AppBar.vue';

export default {
    name: 'Api',
    components: {
        AppBar
    },
    data() {
        return {
            count: 0,
            data: [],
            finish: false
        }
    },
    methods: {
        async getApi() {
            this.count++;
            await axiosClient.get(''  +  this.count).then((response) => {
                this.data.push(response.data);
            }).catch((error) => {
                if (error.response.status === 404) this.finish=true;
            });
        }
    },
    created() {
        this.getApi();
    }
};
</script>
  