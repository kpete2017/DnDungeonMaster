<template>
  <div class="note-template">
        <i v-if="exitable" id="note-exit-button" class="fa fa-times" @click="deleteNewNote()"></i>
        <h3 class=note-title>{{this.title}}</h3>
        <p class="note-message" v-html="this.message"></p>
  </div>
</template>

<script>
export default {
    name: "Note",
    props: ["title", "message", "id", "exitable"],
    methods: {
        deleteNewNote: function() {
            this.$emit('deleteNote')
            fetch(`https://dndungeonmaster.herokuapp.com/notes/${this.id}`, {
                method: 'DELETE',
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        }
    }
}
</script>

<style>
    .note-title {
        margin-top: -1rem;
    }

</style>