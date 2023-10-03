<template>
    <v-app>
        <AppBar></AppBar>
        <v-main>
            <v-container class="d-flex justify-center align-center flex-column">
                <h2 class="text-center mb-2">Tasks</h2>
                <v-card elevation="2" class="pa-4" max-width="1000" style="width: 80%;">
                    <v-row>
                        <v-col cols="8">
                            <v-text-field label="Inserisci la task" outlined color="primary"
                                density="compact" v-model="task.name"></v-text-field>
                        </v-col>
                        <v-col cols="4" class="d-flex justify-center">
                            <v-btn color="primary" class="mt-2 mb-2" @click="addTask">Aggiungi</v-btn>
                        </v-col>
                    </v-row>


                    <hr class="mt-2 mb-2">
                        <v-list>
                            <v-list-item v-for="(item,index) in tasks">
                                <v-row>
                                    <v-col cols="8" class="d-flex">
                                        <v-checkbox color="green" v-model="item.completato" @click="conferma(index)"></v-checkbox>
                                        <v-text-field :value="item.name" outlined color="primary" density="compact"
                                            readonly v-if="!item.enabled"></v-text-field>
                                            <v-text-field :value="item.name" outlined color="primary" density="compact"
                                            v-else v-model="item.name"></v-text-field>
                                    </v-col>
                                    <v-col cols="4" class="d-flex justify-center">
                                        <v-btn class="mt-2 mb-2 mr-2" color="green" v-if="!item.enabled" @click="item.enabled=!item.enabled">
                                            <font-awesome-icon icon="fa-solid fa-pencil" class="ir-icon" />
                                        </v-btn>
                                        <v-btn class="mt-2 mb-2 mr-2" color="gray" v-else @click="item.enabled=!item.enabled">
                                            <span>Conferma</span> <font-awesome-icon icon="fa-solid fa-pencil" class="ir-icon" style="color: black;" />
                                        </v-btn>

                                        
                                        <v-btn class="mt-2 mb-2" color="red" @click="deleteTask(index)">
                                            <font-awesome-icon icon="fa-solid fa-trash-can" class="ir-icon" />
                                        </v-btn>
                                    </v-col>
                                </v-row>
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
    name: 'Task',
    components:{
        AppBar
    },
    data() {
        return {
            task: {
                idUser: null,
                nameUser: '',
                name: '',
                enabled: false,
                completato: false
            },
            tasks: []
        }
    },
    methods: {
        taskReload(){
            this.tasks=[...this.$store.getters.getUserTasks];
        },
        addTask(){
            console.log(this.$store.getters.getUserTasks);
            this.task.idUser=this.$store.getters.getLogUser.id;
            this.task.nameUser=this.$store.getters.getLogUser.name;
            this.task.name=this.task.name.trim();
            //this.tasks.push(this.task);
            this.$store.dispatch('addTask', this.task);
            this.task={
                idUser: null,
                nameUser: '',
                name: '',
                enabled: false,
                completato: false
            };
            this.taskReload();
        },
        deleteTask(index){
            //this.tasks.splice(index,1);
            this.$store.dispatch('removeTask', index);
            this.taskReload();
        },
        conferma(index){
            if(this.tasks[index].completato) this.$store.dispatch('addTaskCompletati', this.tasks[index]);
            else this.$store.dispatch('removeTaskCompletati', index);
        }
    },
    created(){
        this.tasks=[...this.$store.getters.getUserTasks];
    }
}
</script>
  