<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center align-center">
        <v-card elevation="2" class="pa-4" max-width="500" style="width: 80%;">
          <h2 class="text-center">LOGIN</h2>
          <hr class="mt-2 mb-2">
          <v-alert type="error" v-if="isEmpty">Il nome non può essere vuoto</v-alert>
          <div class="pa-6 d-flex justify-center  flex-column">
            <v-text-field label="Nome" outlined v-model="name" @input="controllo"></v-text-field>
            <v-btn color="primary" elevation="5" large x-small class="ma-auto" @click="login">Login</v-btn>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      isEmpty: false
    }
  },
  methods: {
    controllo() {
      if (this.name.trim() != '') this.isEmpty = false;
      else this.isEmpty = true;
    },
    login(){
      if(this.name.trim() != ''){
        this.$store.getters.getUsers.forEach(element => {
          if(this.name === element.name) {
            this.$store.dispatch('setLog', element);
            this.$router.push('/tasks');
          }
        });
      }
    }
  }
}
</script>
