<template>
    <div class="player-card">
        <div class="player-list">
            <div class="current-player stay-square">
                <div class="top-row">
                    <div class="player-picture" >
                        <img id="player-image" height="125" width="125" src="../assets/player2.jpg" alt="Player-Image"/>
                    </div>
                    <div class="player-name"> 
                        <h2 id=player-name>Seymore</h2>
                        <div class="player-card-row-1">
                            <p>Race:Genasi class: Sorcerer Alignment: Neutral-Evil </p>
                        </div>
                    </div>
                </div>
                <div class="main-row">
    
                    <div class="player-card-column-1">
                        <div class="ability-modifier">
                            <p>Strength:</p>
                            <p>10</p>
                        </div>
                        <div class="ability-modifier">
                            <p>Dexterity:</p>
                            <p>10</p>
                        </div>
                        <div class="ability-modifier">
                            <p>Constitution:</p>
                            <p>10</p>
                        </div>
                        <div class="ability-modifier">
                            <p>Intelligence:</p>
                            <p>10</p>
                        </div>
                        <div class="ability-modifier">
                            <p>Wisdom:</p>
                            <p>10</p>
                        </div>
                        <div class="ability-modifier">
                            <p>Charisma:</p>
                            <p>10</p>
                        </div>
                    </div>
                    <div class="player-card-column-2">
                        <p>Stats</p>
                    </div>
                    <div class="player-card-column-3">
                        <p>Stats</p>
                    </div>
                </div>
            </div>

            <div class="current-player stay-square">
                <div class="top-row">
                    <div class="player-picture" >
                        <img id="player-image" height="125" width="125" src="../assets/player1.jpg" alt="Player-Image"/>
                    </div>
                    <div class="player-name"> 
                        <h2>Zethea</h2>
                    </div>
                </div>
                <div class="main-row">

                </div>
            </div>
            
            <div class="current-player stay-square">
                <div class="top-row">
                    <div class="player-picture">
                        <img id="player-image" height="125" width="125" src="../assets/player4.jpg" alt="Player-Image"/>
                    </div>
                    <div class="player-name"> 
                        <h2>Cornielia</h2>
                    </div>
                </div>

                
                <div class="main-row">

                </div>
            </div>

            <div class="current-player stay-square">
                <div class="top-row">
                    <div class="player-picture" >
                        <img id="player-image" height="125" width="125" src="../assets/player3.jpg" alt="Player-Image"/>
                    </div>
                    <div class="player-name"> 
                        <h2>Jeff</h2>
                    </div>
                </div>
                <div class="main-row">

                </div>
            </div>

            <div class="add-player stay-square" @click="toggleAddPlayer(true)">
                <h4>Add Player Character</h4>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
            </div>
        </div>
        <div class="new-player" v-if="newPlayer" v-drag>
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleAddPlayer(false)"></i>
            </div>
            <h2>Create New Player</h2>
            <br/>
            <form>
                <div class="new-player-body">
                    <img id="player-image-background" height="600" width="400" src="../assets/player.jpg" alt="Player-Image"/>
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
                                <input placeholder="Enter Level"/>
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
                                <input placeholder="Enter Experience Points"/>
                            </div>
                        </div>
                        <div class="second">
                            <div class="input-label">
                                <h4>Strength</h4>
                                <input placeholder="Enter Strength"/>
                            </div>
                            <div class="input-label">
                                <h4>Dexterity</h4>
                                <input placeholder="Enter Dexterity"/>
                            </div>
                            <div class="input-label">
                                <h4>Constitution</h4>
                                <input placeholder="Enter Constitution"/>
                            </div>
                            <div class="input-label">
                                <h4>Intelligence</h4>
                                <input placeholder="Enter Intelligence"/>
                            </div>
                            <div class="input-label">
                                <h4>Wisdom</h4>
                                <input placeholder="Enter Wisdom"/>
                            </div>
                            <div class="input-label">
                                <h4>Charisma</h4>
                                <input placeholder="Enter Charisma"/>
                            </div>
                        </div>
                        <div class="third">
                            <div class="input-label">
                                <h4>Initiative</h4>
                                <input placeholder="Enter Initiative"/>
                            </div>   
                            <div class="input-label">
                                <h4>Speed</h4>
                                <input placeholder="Enter Speed"/>
                            </div>
                            <div class="input-label">
                                <h4>Skills</h4>
                                <input placeholder="Enter Skills"/>
                            </div>
                            <div class="input-label">
                                <h4>Armor Class</h4>
                                <input placeholder="Enter Armor Class"/>
                            </div>
                            <div class="input-label">
                                <h4>Max Hit Points</h4>
                                <input placeholder="Enter Max Hit Points"/>
                            </div>
                            <button id="submit-buttom" type="submit">Submit</button>
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
    name: 'PlayerCard',
    components: {
        
    },
    data() {
        return {
            newPlayer: false,
            next: false
        }
    },
    methods: {
        toggleAddPlayer: function(value) {
            this.newPlayer = value
        },
        toggleNext: function(value) {
            this.next = value
        }
    }
}
</script>

<style scoped>

    .player-card-row-1 {
        margin-left: -5rem;
    }

    .ability-modifier {
        width: 7rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: -1rem;
    }

    .main-row {
        width: 100%;
        display: flex;
        line-height: .7;
        justify-content: space-between;
    }

    #player-image {
        margin-top: .5rem;

    }

    #player-image-background {
        position: relative;
        bottom: 2rem;
        left: 5rem;
    }

    .top-row {
        display: flex;
    }

    .stay-square {
        height: 20rem;
        width: 15rem;
    }

    .player-picture {
        height: 8rem;
        width: 8rem;
        left: -3rem;
        top: -1rem;
        position: relative;
        grid-area: player-top;
    }

    #player-name {
        position: relative;
        left: -3rem;
    }

    .player-name {
        margin-left: 1.5rem;
        margin-top: 1rem;
        grid-area: player-top;
    }

    .player-list {
        display: flex;
        width: 100%;
        overflow: auto;
        margin-right: 1rem;
    }

    .player-card {
        overflow: auto;    
    }


    .new-player-body {
        display: grid;
        grid-template-areas: 
        "Left Right";
        grid-template-columns: 1fr 1fr;
    }

    .first {
        grid-area: first;
    }

    .input-label {
        display: flex;
        padding-left: .5rem;
        margin-top: .5rem;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .player-input-area {
        margin-right: 2rem;
        display: grid;
        grid-template-areas: 
        "first second third";
        grid-template-columns: 1fr 1fr 1fr;
    }

    #plus-icon {
        height: 25px;
        width: 25px;
        transform: rotate(-180deg);
    }

    .add-player {
        align-content: center;
        cursor: pointer;
        background-color: var(--bg-secondary);
        margin: 1rem;
        border: solid 1px var(--bg-secondary);
        padding: 1rem;
        padding-right: 6rem;
        padding-left: 6rem;
        transition: 400ms;

    }

    .current-player {
        display: grid;
        grid-template-areas:
        "player-top"
        "player-bottom";
        grid-template-rows: 1fr 3fr;
        align-content: center;
        cursor: pointer;
        background-color: var(--bg-secondary);
        padding: 1rem;
        padding-right: 3rem;
        padding-left: 3rem;
        margin: 1rem;
        height: 20rem;
        width: 15rem;
        transition: 400ms;
        border: solid 1px var(--bg-secondary);
    }

    .main-row {
        position: relative;
        left: -2.5rem;
        width: 20rem;
    }

    .current-player:hover {
        border: solid 1px var(--text-primary);
        background-color: var(--bg-hover);
    }

    .add-player:hover {
        border: solid 1px var(--text-primary);
        background-color: var(--bg-hover);
    }

    .new-player {
        position: fixed;
        top: 9rem;
        right: 15rem;
        height: 47rem;
        width: 90rem;
        background-color: var(--bg-secondary);
        border: solid 1px var(--text-primary);
    }

    input {
        margin-left: .5rem;
        height: 2rem;
    }

    .menu-bar {
        width: 100%;
        height: 2rem;
        border: solid 1px var(--text-primary);
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