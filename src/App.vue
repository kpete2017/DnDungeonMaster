<template>
  <div id="app">
    <Login v-if="loggedIn==false" @login="handleLogin"/>
    <div v-if="loggedIn" v-bind:class="[isActive ? 'dark' : 'light']">
      <NavBar 
        @toggled="isActive = !isActive" 
        @notes="handleNotesClick" 
        @home="handleHomeClick"
        @party="handlePartyClick"
        @NPC="handleNPCClick"
        @spell="handleMonsterClick"
        @compendium="handleCompendiumClick"
      />
      <PageHeader @logout="handleLogout"/>
      <PageBody v-if="PageBody"/>
      <Notes v-if="Notes"/>
      <Party v-if="Party" />
      <Npc v-if="Npc"/>
      <Monster v-if="Monster"/>
      <Compendium v-if="Compendium"/>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageBody from './components/PageBody.vue'
import NavBar from './components/NavBar.vue'
import Login from './components/Login.vue'
import Notes from './components/Notes.vue'
import Party from './components/Party'
import Npc from './components/NPC.vue'
import Monster from './components/Monsters.vue'
import Compendium from './components/Compendium.vue'

export default {
  name: 'App',
  components: {
    Login,
    PageHeader,
    PageBody,
    NavBar,
    Notes,
    Party,
    Npc,
    Monster,
    Compendium
  },
  data() {
    return {
        isActive: true,
        loggedIn: false,
        PageHeader: true,
        PageBody: true,
        Notes: false,
        Party: false,
        Npc: false,
        Monster: false,
        Compendium: false
    }
  },
  methods: {
    handleLogin: function() {
      this.loggedIn = true
    },
    handleLogout: function() {
      this.loggedIn = false
    },
    handleHomeClick: function() {
      this.PageBody = true
      this.Notes = false
      this.Party = false
      this.Npc = false
      this.Monster = false
      this.Compendium = false
    },
    handleNotesClick: function() {
      this.PageBody = false
      this.Notes = true
      this.Party = false
      this.Npc = false
      this.Monster = false
      this.Compendium = false
    },
    handlePartyClick: function() {
      this.PageBody = false
      this.Notes = false
      this.Party = true
      this.Npc = false
      this.Monster = false
      this.Compendium = false
    },
    handleNPCClick: function() {
      this.PageBody = false
      this.Notes = false
      this.Party = false
      this.Npc = true
      this.Monster = false
      this.Compendium = false
    },
    handleMonsterClick: function() {
      this.PageBody = false
      this.Notes = false
      this.Party = false
      this.Npc = false
      this.Monster = true
      this.Compendium = false
    },
    handleCompendiumClick: function() {
      this.PageBody = false
      this.Notes = false
      this.Party = false
      this.Npc = false
      this.Monster = false
      this.Compendium = true
    }
  }
}
</script>

<style>

body {
  background-color: var(--bg-secondary);
  font-family: 'Raleway';font-size: 18px;
  max-height: 100vh;
}

#app {
  font-family: 'Fantasy';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-secondary);
  width: 100%;
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
    height: 10px;
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
