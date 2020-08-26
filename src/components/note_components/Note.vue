<template>
  <div class="note-template">
        <div class="header">
            <i v-if="exitable" id="note-exit-button" class="fa fa-times" @click="deleteNewNote()"></i>
        </div>
        <div>
            <h3 class=note-title>{{this.title}}</h3>
            <p class="note-message" v-html="this.message"></p>
        </div>
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

    .note-template {
        display: flex;
        flex-direction: column;
    }

    #note-exit-button {
        transition: 400ms;
        position: relative;
        top: -3vh;
        left: 7vw;
    }

    #note-exit-button:hover {
        color: rgb(209, 38, 29);
        transform: rotate(-180deg);
        transition: 400ms;
        cursor: pointer;
    }

</style>