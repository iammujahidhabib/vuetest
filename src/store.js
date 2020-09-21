import Vuex from "vuex";
import Vue from "vue";
import { SET_DATA } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
    {
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '099288828882',
      website: 'hildegard.org'
    },
    {
      name: 'Clementine Baunch',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    {
      
      name: 'Leanne John',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    {
      name: 'Leanne Dua',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    {
      name: 'Leanne Johnny',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    {
      name: 'Frank John',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    {
      name: 'Marcus John',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    {
      name: 'Marcus rash',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    {
      name: 'Mason Mount',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    {
      name: 'Marcus Sukma',
      email: 'Jane Doe',
      phone: '2016-04-10',
      website: 'hildegard.org'
    },
    ],
    count:0
  },

  getters: {
    getData: (state) => {
      return state.list;
    },
    getCountData: () => {
        return 10;
    }
  },

  mutations: {
    [SET_DATA](state, data) {
      state.list = data
    },
  },

  actions: {
    setDatas(context, data) {
      context.commit('setDatas', data);
    },
  },
});
