<template>
    <div class="party-page">
        <h1 id="test-text">Party Page</h1>
        <div class="party-page-custom-instance" @click="toggleAddPlayer(true)">
                <h1>Create New Party Member</h1>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </div>
        <div class="party-list"> 
            <div v-for="player in players" :key="player.name">
                <PlayerListItem 
                    v-bind:name="player.name"
                    v-bind:subtitle="player.subtitle"
                    v-bind:race="player.race"
                    v-bind:characterClass="player.characterClass"
                    v-bind:level="player.level"
                    v-bind:strength="player.strength"
                    v-bind:dexterity="player.dexterity"
                    v-bind:constitution="player.constitution"
                    v-bind:intelligence="player.intelligence"
                    v-bind:wisdom="player.wisdom"
                    v-bind:charisma="player.charisma"
                    v-bind:initiative="player.initiative"
                    v-bind:armorClass="player.armor_class"
                    v-bind:passivePerception="player.passive_perception"
                    v-bind:hitPoints="player.hit_points"
                    v-bind:speed="player.speed"
                    v-bind:playerName="player.player_name"
                    v-bind:image='player.image_url'
                />
            </div>
        </div>
        <div class="new-player" v-if="newPlayer" v-drag>
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleAddPlayer(false)"></i>
            </div>
            <form>
                <h2>Create New Player</h2>
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
                            <div class="input-label">
                                <h4>Player Image URl</h4>
                                <input type="text" placeholder="insert url"/>
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
import PlayersJson from '../Players.json'
import PlayerListItem from './PlayerListItem'
export default {
    name: "Party",
    data() {
        return {
            newPlayer: false,
            players: PlayersJson
        }
    },
    components: {
        PlayerListItem
    },
    methods: {
        toggleAddPlayer: function(value) {
            this.newPlayer = value
        }
    }
}
</script>

<style scoped>

    .party-list {
        display: flex;
        flex-wrap: wrap;   
    }

    .party-page {
        color: var(--text-secondary);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        height: auto;
        background-color: var(--bg-secondary);
    }

    .party-page-custom-instance{
        cursor: pointer;
        color: var(--text-secondary);
        text-align: center;
        margin: 0 auto;
        margin-top: 2rem;
        background-color: var(--bg-primary);
        border: solid 1px var(--bg-primary);
        height: 20vh;
        width: 80vw;
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
        border-radius: 18px;
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