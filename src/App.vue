<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/Perfil">Perfil</router-link> |
      <router-link to="/Admin">Admin</router-link> |
      <router-link to="/AprovarPropostas">Aprovar Propostas</router-link> |
      <router-link to="/Forum">Forum</router-link> |
      <router-link to="/Register">Register</router-link> |
      <router-link to="/MinhasPropostas">Minhas Propostas</router-link> |
      <router-link to="/LandingPage">LandingPage</router-link> |
      <router-link to="/EditarUser">Editar User</router-link> |
      <router-link to="/DetalhesProposta">Detalhes Proposta</router-link> |
      <router-link to="/CriarProposta">Criar Proposta</router-link> |
      <router-link to="/AprovarPropostas">Aprovar Propostas</router-link> |
      <router-link to="/EditarProposta">Editar Proposta</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
