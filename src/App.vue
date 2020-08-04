<template>
  <div id="app" v-bind:class="[isActive ? 'dark' : 'light']">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavBar @toggled="handleToggle"/>
    <PageHeader/>
    <PageBody />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PageHeader from './components/PageHeader.vue'
import PageBody from './components/PageBody.vue'
import NavBar from './components/NavBar.vue'
// import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PageHeader,
    PageBody,
    NavBar
    // PageFooter
  },
  data() {
    return {
        isActive: true
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
}

.light {
  --text-primary: #1f1f1f;
  --text-secondary: #000000;
  --bg-primary: #ffffff;
  --bg-secondary: #e4e4e4;
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
