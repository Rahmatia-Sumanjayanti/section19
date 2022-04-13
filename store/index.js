import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = ()=>({
    list:[],
    category: 'General',
    apiKey: 'fc12fdab8dc9453ebe3d6f72423cca6a',
    query: ''

});

export const mutations = {
    allList(state, param){
        state.list= param;
    },
    setCategory(state, param){
        state.category = param;
    },
    setQuery(state, param){
        state.query = param;
    }
};

export const actions = {
    fetchList(store){
        axios.get("https://newsapi.org/v2/top-headlines?country=id&category="+ this.state.category + "&q=" + this.state.query + "&apiKey=" + this.state.apiKey
        ).then((response)=>{
        store.commit("allList", response.data.articles)
        })
    },
    changeCategory(store, param){
        store.commit("setCategory", param)
    },
    searchQuery(store, param){
        store.commit("setQuery", param)
    }
};
