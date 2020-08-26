<template>
  <div>
    <Calculator/>
    <div v-if="pinNote === false" id="pinned-create-new-note" class="pinned-note" @click="toggleNewNote(true)">
      <h2 id="pinned-new-note">Pin A Note</h2>
        <svg id="note-plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
    </div>
    <div class="new-player-body" v-if="selectNote" v-drag>
      <h1 id="add-a-character">Pick a note to pin</h1>
      <div class="new-player" v-if="notes.length > 0">
          <div class="add-new-players-div" v-for="note in notes" :key="note.title">
              <div @click="handleAddNoteClick(note.title, note.message)" class="list-notes">
                <Note v-bind:title="note.title" v-bind:message="note.message" v-bind:id="note.id" @deleteNote="removeNote(note.title)"/>
              </div>
          </div>
      </div>
      <div v-else>
        <h1>Please create a note in the notes tab to pin it here!</h1>
      </div>
      <div class="new-player-footer">
          <button id="close-button" @click="toggleNewNote(false)">close</button>
      </div>
    </div>
    <div @click="toggleNewNote(true)" v-if="pinNote" id="pinned-create-new-note" class="pinned-note">
        <Note v-bind:title="noteTitle" v-bind:message="noteMessage" />
    </div>
  </div>
</template>

<script>
import Calculator from './calculator_components/Calculator.vue'
import Note from './note_components/Note'

export default {
  name: "PinnedItemsAndSpells",
  components: {
    Calculator,
    Note
  },
  props: ['notes'],
  data() {
    return {
      pinNote: false,
      selectNote: false,
      noteTitle: "",
      noteMessage: ""
    }
  },
  methods: {
    toggleNewNote: function(value) {
      this.selectNote = value
    },
    handleAddNoteClick: function(title, message) {
      this.toggleNewNote(false)
      this.pinNote = true
      this.noteTitle = title
      this.noteMessage = message
    }
  }
}
</script>

<style scoped>
  #note-plus-icon {
    height: 2.5vh;
    width: 2.5vw;
  }

  .pinned-note {
    border-radius: 4.5px;
    cursor: pointer;
    height: 30vh;
    width: 90%;
    color: var(--text-secondary);
    background-color: var(--bg-secondary);
    margin: 0 auto;
    position: relative;
    transition: 400ms ease;
    margin-top: 8vh;
  }

  .pinned-note:hover {
       transform: scale(1.05);
    }

    .list-notes:hover {
      transform: scale(1.05);
    }

  .new-player {
    grid-area: new-player-top;
    display: flex;
    overflow: auto;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    width: 75vw;
    background-color: var(--bg-secondary);
  }

  #add-a-character {
    grid-area: new-player-header;
  }

  .new-player-body {
    box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    display: grid;
    grid-template-areas:
    "new-player-header" 
    "new-player-top"
    "new-player-bottom";
    grid-template-rows: 1fr 9fr 1fr;
    overflow: auto;
    border-radius: 4.5px;
    line-height: .7;
    position: fixed;
    top: 4rem;
    left: 15rem;
    height: 80%;
    width: 75vw;
    z-index: 4;
    background-color: var(--bg-secondary);
  }

  .new-player-footer {
    grid-area: new-player-bottom;
    background-color: rgb(209, 38, 29);
  }

  .list-notes {
    line-height: 1;
    border-radius: 4.5px;
    cursor: pointer;
    height: 20rem;
    margin: 1rem;
    margin-top: 2rem;
    width: 15vw;
    color: var(--text-secondary);
    background-color: var(--bg-primary);
    transition: 400ms ease;
  }

  .pinned-note-exit-button {
    position: relative;
    top: 0;
    right: 0;
  }

</style>