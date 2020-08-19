<template>
  <div class="notes-page">
        <div class="notes-section">
            <div id="create-new-note" class="note" @click="toggleNewNote(true)">
                <h1 id="new-note">Add New Note</h1>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
            </div>
            <div id="create-new-note" class="note" v-for="note in notes" :key="note.title">
                <Note v-bind:title="note.title" v-bind:message="note.message" v-bind:id="note.id" v-bind:exitable="true" @deleteNote="removeNote(note.title)"/>
            </div>
        </div>
        <div class="new-note" v-if="newNote" v-drag> 
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleNewNote(false)"></i>
            </div>
            <form @submit.prevent="getEditorData()">
                <div class="editor"> 
                    <div class="title">
                        <label for="input">Title:     </label><input style="width: 10vw;" placeholder="Enter Title" v-model="newNoteTitle" />
                    </div>
                    <ckeditor class="ck-editor" :editor="editor" v-model="editorData"></ckeditor>
                </div>
                <button id="submit-button" type="submit">Submit</button>
                <button id="close-button" @click="toggleNewNote(false)">close</button>
            </form>
        </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Note from './Note.vue'

export default {
    name: "notes",
    components: {
        Note
    },
    data() {
        return {
            newNote: false,
            editor: ClassicEditor,
            editorData: '',
            newNoteTitle: "",
            filterTitle: ""
        }
    },
    props: ["notes"],
    methods: {
        toggleNewNote: function(value) {
            this.newNote = value
        },
        getEditorData: function() {
            let newMessage = this.editorData.replace('<p>', '').replace('</p>', '')
            let newNote = {
                title: this.newNoteTitle,
                message: newMessage
            }
            this.notes.push(newNote)
            this.toggleNewNote(false)
        },
        removeNote: function(title) {
            let index = -1;
            
            for(let i = 0; i < this.notes.length; i++) {
                if(this.notes[i].title === title) {
                    index = i;
                }
            }
            
            this.notes.splice(index, 1)
        }
    }
}
</script>

<style>

    .note-message {
        text-align: left;
        margin-left: .5rem;
        margin-right: .5rem;
    }

    .ck-editor {
        max-width: 100%;
    }

    .ck-content { 
        min-height: 10vh;
        max-height: 100%;
        overflow: auto;
        color: black;
        max-width: 100%;
    }

    .title {
        margin: 1rem;
    }

    .editor {
        height: 20vh;
        margin: 1rem;
    }
    .notes-page {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        max-height: 400vh;
        background-color: var(--bg-secondary);
    }

    .notes-section {
        margin-top: 9vh;
        background-color: var(--bg-secondary);
        min-height: 95vh;
        max-height: 400vh;
        margin-left: 7rem;
        margin-bottom: 5rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 90vw;
    }

    #plus-icon {
        height: 25px;
        width: 25px;
    }

    .note {
        border-radius: 4.5px;
        cursor: pointer;
        height: 20rem;
        width: 20rem;
        color: var(--text-secondary);
        background-color: var(--bg-primary);
        padding-top: 2rem;
        border: solid 1px var(--bg-secondary);
        margin-right: 1rem;
        margin-top: 1rem;
    }
    
    .new-note {
        border-radius: 4.5px;
        position: fixed;
        margin: 0 auto;
        top: -100vh;
        height: 37vh;
        width: 38vw;
        z-index: 2;
        background-color: var(--text-secondary);
        border: solid 1px var(--text-primary);
    }

    #create-new-note {
        text-align: center;
        justify-items: center;
    }

    #test-text {
        color: var(--text-primary);
        margin-left: 6rem;
        margin-top: 5rem;
    }

    #note-exit-button {
        position: relative;
        right: -8rem;
        top: -1rem;
        transition: 400ms;
    }

    #note-exit-button:hover {
        color: rgb(209, 38, 29);
        transform: rotate(-180deg);
        transition: 400ms;
        cursor: pointer;
    }

    #exit-button {
        position: absolute;
        color: var(--text-secondary);
        right: 1rem;
        top: .5rem;
        transition: 400ms;
    }

    #exit-button:hover {
        color: rgb(209, 38, 29);
        transform: rotate(-180deg);
        transition: 400ms;
        cursor: pointer;
    }

    #close-button {
        position: absolute;
        color: var(--text-secondary);
        bottom: 0.5rem;
        width: 5rem;
        height: 2rem;
        right: 1rem;
        font-size: 1rem;
        background-color: var(--bg-primary);
        cursor: pointer;
    }

    #close-button:hover {
        color: rgb(209, 38, 29);
    }

    #submit-button {
        position: absolute;
        color: var(--text-secondary);
        bottom: .4rem;
        width: 5rem;
        height: 2rem;
        right: 10rem;
        font-size: 1rem;
        background-color: var(--bg-primary);
        cursor: pointer;
    }


</style>