import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logUser: {
      id: null,
      name: ''
    },
    users:[
      {
        id: 1,
        name: 'prova1',
        tasks: []
      },
      {
        id: 2,
        name: 'ciccio',
        tasks: []
      },
      {
        id: 3,
        name: 'prova3',
        tasks: []
      }
    ],
    taskCompletati:[]
  },
  getters: {
    getName: function(state){
      return `${state.logUser.id} - ${state.logUser.name}`;
    },
    getLogUser: function(state){
      return state.logUser;
    },
    getUsers: function(state){
      return state.users;
    },
    getUserTasks: function(state){
      return state.users[state.logUser.id - 1].tasks;
    },
    getTaskCompletati: function(state){
      return state.taskCompletati;
    }
  },
  mutations: {
    UPDATE_LOG_USER(state,payload){
      state.logUser=payload;
    },
    UPDATE_TASKS_USER(state,payload){
      state.users[state.logUser.id - 1].tasks=payload;
    },
    UPDATE_TASKS_COMPLETATI(state,payload){
      state.taskCompletati=payload;
    }
  },
  actions: {
    setLog(context,payload){
      context.commit('UPDATE_LOG_USER', payload);
    },
    addTask(context,payload){
      const tasks=[...this.state.users[this.state.logUser.id - 1].tasks];
      tasks.push(payload);
      context.commit('UPDATE_TASKS_USER', tasks);
    },
    removeTask(context,index){
      const tasks=[...this.state.users[this.state.logUser.id - 1].tasks];
      tasks.splice(index, 1);
      context.commit('UPDATE_TASKS_USER', tasks);
    },
    addTaskCompletati(context,payload){
      const task=[...this.state.taskCompletati];
      task.push(payload);
      context.commit('UPDATE_TASKS_COMPLETATI', task);
    },
    removeTaskCompletati(context,index){
      const task=[...this.state.taskCompletati];
      task.splice(index,1);
      context.commit('UPDATE_TASKS_COMPLETATI', task);
    }
  },
  modules: {
  }
})
