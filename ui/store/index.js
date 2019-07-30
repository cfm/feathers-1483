import Vue from "vue";
import Vuex from "vuex";
import feathersVuex from "feathers-vuex";
import feathersClient from "./feathers-client";

const { service, FeathersVuex } = feathersVuex(
    feathersClient,
    {
        idField: "_id",
        enableEvents: true,
    }
);

Vue.use(Vuex);
Vue.use(FeathersVuex);

Vue.config.devtools = true;

// FIXME: Nuxt.js's Vuex "classic mode" (deprecated)
export default function createStore () {return new Vuex.Store({
    actions: {
        nuxtServerInit({ commit, dispatch }, { req }) {},
    },

    strict: process.env.NODE_ENV !== 'production',

    plugins: [
        service('counters', {autoRemove: true}),
    ],
})};
