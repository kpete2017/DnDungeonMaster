<template>
  <div class="notes-page">
      <div class="notes-section">
        <div id="create-new-note" class="note" @click="toggleNewNote(true)">
            <h1 id="new-note">Add New Note</h1>
            <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </div>
        <div id="create-new-note" class="note" v-for="note in notes" :key="note.title">
            <i id="note-exit-button" class="fa fa-times" @click="toggleNewNote(false)"></i>
            <h2 class=note-title>{{note.title}}</h2>
            <p class="note-message">{{note.message}}</p>
        </div>
      </div>
      <div class="new-note" v-if="newNote" v-drag> 
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleNewNote(false)"></i>
            </div>
            <form @submit.prevent="getEditorData()">
                <div class="editor"> 
                    <div class="title">
                        <label for="input">Title:     </label><input placeholder="Enter Title" v-model="newNoteTitle" />
                    </div>
                    <ckeditor class="ck-editor" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
                <button id="submit-button" type="submit">Submit</button>
                <button id="close-button" @click="toggleNewNote(false)">close</button>
            </form>
        </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: "notes",
    data() {
        return {
            newNote: false,
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                
            },
            notes: [
                { 
                    title: "Test Note Title 1",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies purus at turpis rutrum, a placerat ex dapibus. Aliquam semper euismod mollis. Donec ornare eget justo at ullamcorper. Fusce porta tellus nibh, id consectetur purus sodales ac. Nullam hendrerit tristique elementum. Morbi hendrerit felis nec dolor cursus, vel tristique nunc bibendum. Donec nec massa orci. Nam eget faucibus elit, et faucibus leo. Ut pretium enim id interdum lobortis."
                },
                { 
                    title: "Test Note Title 2",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies purus at turpis rutrum, a placerat ex dapibus. Aliquam semper euismod mollis. Donec ornare eget justo at ullamcorper. Fusce porta tellus nibh, id consectetur purus sodales ac. Nullam hendrerit tristique elementum. Morbi hendrerit felis nec dolor cursus, vel tristique nunc bibendum. Donec nec massa orci. Nam eget faucibus elit, et faucibus leo. Ut pretium enim id interdum lobortis."
                }
            ],
            newNoteTitle: "",
        }
    },
    methods: {
        toggleNewNote: function(value) {
            this.newNote = value
        },
        getEditorData: function() {
            console.log(this.newNoteTitle, this.editorData)
            let newNote = {
                title: this.newNoteTitle,
                message: this.editorData
            }
            this.notes.push(newNote)
            this.toggleNewNote(false)
        }
    }
}
</script>

<style>

    .note-message {
        text-align: left;
        margin: 1rem;
    }

    .ck-content { height:28rem; }

    .title {
        margin: 1rem;
    }

    .editor {
        height: 40vh;
        margin: 1rem;
    }
    .notes-page {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        max-height: 100vh;
        background-color: var(--bg-secondary);
    }

    .notes-section {
        margin-top: 15vh;
        margin-left: 2vw;
        background-color: var(--bg-secondary);
        min-height: 85vh;
        display: flex;
        justify-content: space-evenly;
    }

    #plus-icon {
        height: 25px;
        width: 25px;
    }

    .notes-section {
        display: flex;
    }

    .note {
        cursor: pointer;
        width: 20rem;
        height: 20rem;
        margin-left: 6rem;
        color: var(--text-secondary);
        background-color: var(--bg-primary);
        padding-top: 2rem;
        border: solid 1px var(--bg-secondary);
    }

    .note:hover {
        border: solid 1px var(--text-secondary);
    }

    .new-note {
        position: absolute;
        top: -80vh;
        margin: 0 auto;
        height: 70vh;
        width: 70vw;
        z-index: 4;
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
        bottom: 3rem;
        width: 5rem;
        height: 2rem;
        right: 3rem;
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
        bottom: 3rem;
        width: 5rem;
        height: 2rem;
        right: 10rem;
        font-size: 1rem;
        background-color: var(--bg-primary);
        cursor: pointer;
    }


</style>