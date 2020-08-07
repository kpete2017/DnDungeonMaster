<template>
  <div id="app">
    <Login v-if="loggedIn==false"/>
    <div v-if="loggedIn" v-bind:class="[isActive ? 'dark' : 'light']">
      <NavBar @toggled="handleToggle"/>
      <PageHeader/>
      <PageBody />
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageBody from './components/PageBody.vue'
import NavBar from './components/NavBar.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login,
    PageHeader,
    PageBody,
    NavBar
  },
  data() {
    return {
        isActive: true,
        loggedIn: false
    }
  },
  methods: {
    handleToggle() { 
      if(this.isActive === true) {
        this.isActive = false 
      } else {
        this.isActive = true
      }
    }
  }
}
</script>

<style>

body {
  background-color: var(--bg-secondary);
}

#app {
  font-family: 'Fantasy';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-secondary);
}

.dark {
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #242424;
  --bg-secondary: #121212;
  --bg-hover: rgb(26, 26, 26);
}

.light {
  --text-primary: #1f1f1f;
  --text-secondary: #000000;
  --bg-primary: #ffffff;
  --bg-secondary: #e4e4e4;
  --bg-hover: #b6b6b6;
}


::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: black;
}
  
::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

</style>
