import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [
      {
        firstname: "eray",
        lastname: "tufan",
        age: 26,
        email: "eray.tufan@brainstork.com",
        companyname: "brainstork",
      },
      {
        firstname: "mahdi",
        lastname: "hsoumi",
        age: 23,
        email: "mahdi.hsoumi@brainstork.com",
        companyname: "brainstork",
      },
      {
        firstname: "dza",
        lastname: "dza",
        age: 26,
        email: "adz.dza@brainstork.com",
        companyname: "brainstork",
      },
      {
        firstname: "azd",
        lastname: "zad",
        age: 26,
        email: "azddazd.dvdsqv@brainstork.com",
        companyname: "brainstork",
      },
      {
        firstname: "trb",
        lastname: "brtbrt",
        age: 26,
        email: "brtb.thn@brainstork.com",
        companyname: "brainstork",
      },
      {
        firstname: "kiuyt;",
        lastname: "uj",
        age: 26,
        email: "thrhrtb@brainstork.com",
        companyname: "brainstork",
      },
      {
        firstname: "xbgf",
        lastname: "xbgf",
        age: 26,
        email: "xgbxgf.qcsqc@brainstork.com",
        companyname: "brainstork",
      },
      {
        firstname: "qscazez",
        lastname: "azdazd",
        age: 26,
        email: "vdsdsv.zeczd@brainstork.com",
        companyname: "brainstork",
      },
    ],
  },
  mutations: {},
  actions: {
    addContact(context, contact) {
      context.state.contacts.push(contact);
      console.log(`contact`, contact)
    },
    removeContact(context, contact) {
      context.state.contacts.push(contact);
      console.log(`contact`, contact)
    },
  },
  modules: {},
});
