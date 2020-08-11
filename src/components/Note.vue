<template>
  <div class="note-template">
        <i id="note-exit-button" class="fa fa-times" @click="deleteNewNote()"></i>
        <h2 class=note-title>{{this.title}}</h2>
        <p class="note-message">{{this.message}}</p>
  </div>
</template>

<script>
export default {
    name: "Note",
    props: ["title", "message"],
    methods: {
        deleteNewNote: function() {
            this.$emit('deleteNote')
        }
    }
}
</script>

<style>
    .note-title {
        margin-top: -1rem;
    }
</style>