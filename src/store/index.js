import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [
        { name: "CCA", password: "CCAPassword", email: "CCA@esmad.ipp.pt", img: "https://pbs.twimg.com/profile_images/510551693822410752/6LDxkA6a_400x400.jpeg" }
      ],
    loggedUser: localStorage.getItem("loggedUser")
      ? JSON.parse(localStorage.getItem("loggedUser"))
      : "",
    proposals: localStorage.getItem("proposals")
      ? JSON.parse(localStorage.getItem("proposals")) : [],

    notifications: localStorage.getItem("notification") ? JSON.parse(localStorage.getItem("notification")) : [],
    applications: localStorage.getItem("applications")
      ? JSON.parse(localStorage.getItem("applications")) : []
  },
  getters: {
    getNextProposalId: (state) => {
      return state.proposals.length > 0
        ? state.proposals[state.proposals.length - 1].id + 1
        : 1;
    },
    getNextnotificationId: (state) => {
      return state.notifications.length > 0
        ? state.notifications[state.notifications.length - 1].id + 1
        : 1;
    },
    getUsers: (state) => state.users,
    getLoggedUser: (state) => state.loggedUser,
    isLoggedUser: (state) => (state.loggedUser == "" ? false : true),
    getProposals: (state) => {
      return state.proposals
    },
    getFilterdProposals: (state) => (type, search) => {
      const card_filter = state.proposals.filter((proposal) => (proposal.tipo == type || type == "all") && (proposal.titulo.toUpperCase() == search.toUpperCase() || search == ""))
      return card_filter
    },
    getType: (state) => {
      return state.proposals.tipo
    },
    getNotification: (state) => {
      return state.notifications
    }
  },
  actions: {
    eliminar(context, id) {
      context.commit("DELETEPROPOSAL", id)
      localStorage.setItem('proposals', JSON.stringify(context.state.proposals))
      
    },
    login(context, payload) {
      // verificar se este user já existe
      const user = context.state.users.find(
        (user) =>
          user.email === payload.email &&
          user.password === payload.password
      );
      if (user != undefined) {
        // login com sucesso
        context.commit("LOGIN", user);
        localStorage.setItem("loggedUser", JSON.stringify(user));
      } else {
        throw "O seu email ou password estão incorretos"
      }
    },
    logout(context) {
      context.commit("LOGOUT");
      localStorage.removeItem("loggedUser");
    },
    register(context, payload) {
      // verificar se este user já existe
      const user = context.state.users.find(
        (user) => user.email === payload.email
      );
      if (user == undefined) {
        context.commit("REGISTER", payload);
        localStorage.setItem('users', JSON.stringify(context.state.users))
      } else {
        throw "Email já existente";
      }
    },
    registerProposal(context, payload) {
      const proposal = context.state.proposals.find(
        (proposal) => proposal.titulo === payload.titulo
      );
      if (proposal == undefined) {
        context.commit("REGISTERPROPOSAL", payload);
        localStorage.setItem('proposals', JSON.stringify(context.state.proposals))
      } else {
        throw "Proposta já criada! Por favor reveja os campos"
      }
    },

    registerNotification(context, payload){
      context.commit("REGISTERNOTIFICATION", payload)
      localStorage.setItem("notification",  JSON.stringify(context.state.notifications))
    },

    aprovar(context, data) {
      console.log(data.proposta)
      let edited = context.state.proposals.filter(proposal => proposal.id == data.proposta.id)[0]
      edited.estado = "aprovado"
      edited.orientador = data.form.orientador
      context.commit("ALTERARPROP", edited)
      localStorage.setItem('proposals', JSON.stringify(context.state.proposals))

    },
    revisao(context, data) {

      let edited = context.state.proposals.filter(proposal => proposal.id == data.proposta.id)[0]
      edited.estado = "revisao"
      edited.msgRevisao = data.form.revisao
      context.commit("ALTERARPROP", edited)
      localStorage.setItem('proposals', JSON.stringify(context.state.proposals))

    },
    candidatar(context, data) {

      let application = { user: data.form.user, id_proposta: data.proposta.id, mensagem: data.form.candidatura }
      //console.log(application)
      context.commit("CANDIDATURA", application)
      localStorage.setItem('applications', JSON.stringify(context.state.applications))
    },

  },
  mutations: {
    DELETEPROPOSAL(state, id) {
      state.proposals = state.proposals.filter(proposal => proposal.id != id)
    },
    CANDIDATURA(state, data) {

      state.applications.push(data)

    },
    ALTERARPROP(state, data) {
      console.log(data)
      state.proposals = state.proposals.map(proposal => proposal.id == data.id ? data : proposal)

    },
    LOGIN(state, user) {
      state.loggedUser = user;
    },
    LOGOUT(state) {
      state.loggedUser = "";
    },
    REGISTER(state, user) {
      state.users.push(user);
    },
    REGISTERPROPOSAL(state, proposal) {
      state.proposals.push(proposal)
    },
    REGISTERNOTIFICATION(state, notif){
      state.notifications.push(notif)
    }
  },
});

