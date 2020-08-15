<template>
  <div>
    <Calculator/>
    <div id="pinned-create-new-note" class="pinned-note" @click="toggleNewNote(true)">
      <h2 id="pinned-new-note">Pin A Note</h2>
        <svg id="note-plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
    </div>
  </div>
</template>

<script>
import Calculator from './Calculator.vue'

export default {
  name: "PinnedItemsAndSpells",
  components: {
    Calculator
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
    height: 20rem;
    width: 90%;
    color: var(--text-secondary);
    background-color: var(--bg-secondary);
    margin: 0 auto;
    position: relative;
    margin-top: 5vh;
  }
</style>