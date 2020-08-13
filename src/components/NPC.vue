<template>
  <div class="party-page">
      <h1 id="test-text">NPC Page</h1>
      <div class="party-page-custom-instance" @click="toggleAddPlayer(true)">
                <h1>Create New NPC</h1>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
    </div>
      <div class="new-player" v-if="newPlayer" v-drag>
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleAddPlayer(false)"></i>
            </div>
            <form>
                <h2>Create New NPC</h2>
                <br/>
                <div class="new-player-body">
                    <div class="player-input-area">
                        <div class="first"> 
                            <div class="input-label">
                                <h4>Character Name</h4>
                                <input placeholder="Enter Character Name"/>
                            </div>
                            <div class="input-label">
                                <h4>Class</h4>
                                <input placeholder="Enter Class"/>
                            </div>
                            <div class="input-label">
                                <h4>Level</h4>
                                <input type="number" placeholder="Enter Level"/>
                            </div>
                            <div class="input-label">
                                <h4>Background</h4>
                                <input placeholder="Enter Background"/>
                            </div>
                            <div class="input-label">
                                <h4>Alignment</h4>
                                <input placeholder="Enter Alignment"/>
                            </div>
                            <div class="input-label">
                                <h4>Player Name</h4>
                                <input placeholder="Enter Player Name"/>
                            </div>
                            <div class="input-label">
                                <h4>Experience</h4>
                                <input type="number" placeholder="Enter Experience Points"/>
                            </div>
                        </div>
                        <div class="second">
                            <div class="input-label">
                                <h4>Strength</h4>
                                <input value=10 type="number" placeholder="Strength"/>
                            </div>
                            <div class="input-label">
                                <h4>Dexterity</h4>
                                <input value=10 type="number" placeholder="Dexterity"/>
                            </div>
                            <div class="input-label">
                                <h4>Constitution</h4>
                                <input value=10 type="number" placeholder="Constitution"/>
                            </div>
                            <div class="input-label">
                                <h4>Intelligence</h4>
                                <input value=10 type="number"  placeholder="Intelligence"/>
                            </div>
                            <div class="input-label">
                                <h4>Wisdom</h4>
                                <input value=10 type="number" placeholder="Wisdom"/>
                            </div>
                            <div class="input-label">
                                <h4>Charisma</h4>
                                <input value=10 type="number" placeholder="Charisma"/>
                            </div>
                        </div>
                        <div class="third">
                            <div class="input-label">
                                <h4>Initiative</h4>
                                <input value=3 type="number" placeholder="Initiative"/>
                            </div>   
                            <div class="input-label">
                                <h4>Speed</h4>
                                <input value=20 type="number" placeholder="Speed"/>
                            </div>
                            <div class="input-label">
                                <h4>Skills</h4>
                                <input type="number" placeholder="Skills"/>
                            </div>
                            <div class="input-label">
                                <h4>Armor Class</h4>
                                <input value=12 type="number" placeholder="Armor Class"/>
                            </div>
                            <div class="input-label">
                                <h4>Max Hit_Points</h4>
                                <input value=40 type="number" placeholder="Hit_Points"/>
                            </div>
                            <button id="submit-button" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="new-player-footer">
                <button id="close-button" @click="toggleAddPlayer(false)">close</button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "Party",
    data() {
        return {
            newPlayer: false,
        }
    },
    methods: {
        toggleAddPlayer: function(value) {
            this.newPlayer = value
        }
    }
}
</script>

<style scoped>
    .party-page {
        color: var(--text-secondary);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-secondary);
    }

    .party-page-custom-instance{
        cursor: pointer;
        color: var(--text-secondary);
        text-align: center;
        margin-left: 8rem;
        margin-top: 2rem;
        background-color: var(--bg-primary);
        border: solid 1px var(--bg-primary);
        height: 20vh;
        width: 90vw;
    }
        .new-player-body {
        display: flex;
        justify-content: center;
    }

    .first {
        grid-area: first;
    }

    .input-label {
        display: flex;
        padding-left: .5rem;
        margin-top: .5rem;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .player-input-area {
        display: grid;
        grid-template-areas: 
        "first second third";
        grid-template-columns: 1fr 1fr 1fr;
        margin-right: 1rem;
    }

    #plus-icon {
        height: 25px;
        width: 25px;
        position: absolute;
        transform: rotate(-180deg);
    }

    .new-player {
        border-radius: 9px;
        background-image: url("../assets/player-background.jpg");
        background-size: cover;
        line-height: .7;
        position: fixed;
        top: 4rem;
        left: 15rem;
        height: 70%;
        width: 70vw;
        z-index: 4;
        background-color: var(--bg-secondary);
    }
    
    .first input {
        margin-left: .5rem;
        height: 1rem;
        width: auto;
    }

    .second input {
        margin-left: .5rem;
        height: 1rem;
        width: 4vw;
    }

    .third input {
        margin-left: .5rem;
        height: 1rem;
        width: 4vw;
    }

    .menu-bar {
        width: 100%;
        height: 2rem;
    }

    form {
        padding: 1rem;
        background-color: #141414e5;
        width: 50vw;
        height: 50vh;
        margin: 0 auto;
    }

    #exit-button {
        position: absolute;
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

    .third {
        margin-right: 2rem;
    }

    .third button {
        position: absolute;
        width: 5rem;
        height: 2rem;
        color: var(--text-secondary);
        bottom: 3rem;
        right: 9rem;
        padding: .5rem;
        background-color: var(--bg-primary);
        cursor: pointer;
    }

    .third button:hover {
        color: rgb(209, 38, 29);
    }

    #close-button:hover {
        color: rgb(209, 38, 29);
    }
</style>