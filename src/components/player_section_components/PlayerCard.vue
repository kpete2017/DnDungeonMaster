<template>
    <div class="player-card">
        <div class="player-list">
            <div v-for="player in currentPlayers" :key="player.name">
                <SinglePlayerCard
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
                    v-bind:proficiencyBonus="player.proficiency_bonus"
                    v-bind:speed="player.speed"
                    v-bind:playerName="player.player_name"
                    v-bind:image='player.image_url'
                    v-bind:actions="player.actions"
                    v-bind:equipment="player.equipment"
                    v-bind:ally="player.ally"
                    @create-large-player-card="handlePlayerCard"
                    @delete-player-from-player-list="handleRemovePlayer"
                />
            </div>
            <div class="last-card" @click="toggleAddPlayer(true)">
                <h1>Add Ally</h1>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
            </div>
        </div>
        <div class="new-player-body" v-if="newPlayer" v-drag>
            <h1 id="add-a-character">Add Ally</h1>
            <div class="new-player"  v-if="allPlayers.length > 0">
                <div class="add-new-players-div" v-for="player in allPlayers" :key="player.name">
                    <PlayerPickCard
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
                        v-bind:proficiencyBonus="player.proficiency_bonus"
                        v-bind:speed="player.speed"
                        v-bind:playerName="player.player_name"
                        v-bind:image='player.image_url'
                        v-bind:actions="player.actions"
                        v-bind:equipment="player.equipment"
                        v-bind:id="player.id"
                        @add-player="handleAddPlayer"
                    />
                </div>
            </div>
            <div v-else>
                <h1>Please create a character in the player page</h1>
            </div>
            <div class="new-player-footer">
                <button id="close-button" @click="toggleAddPlayer(false)">close</button>
            </div>
        </div>
        <div class="player-stats" v-if="createPlayerCard" v-drag>
            <div class="player-stats-menu-bar">
                <i id="exit-button" class="fa fa-times" @click="closePlayerCard()"></i>
            </div>
            <div class="player-stats-body"> 
                <div class="player-stats-picture">
                    <img :src="playerCardStats[17]" style='max-height:38vh; max-width: 18vw; position: absolute; left: 0; object-fit: cover; object-position:top; border-top-left-radius: 4.5px;'/>
                </div>
                <div class="player-stats-body-general-information">
                    <h1>{{this.playerCardStats[0]}}</h1>
                    <h2>{{this.playerCardStats[1]}}</h2>
                    <h2>Race: {{this.playerCardStats[2]}}</h2>
                    <h2>Class: {{this.playerCardStats[3]}}</h2>
                    <h2>Level: {{this.playerCardStats[4]}}</h2>
                </div>
                <div class="player-stats-body-ability-scores">
                    <div class="ability-score">
                        <h2>Strength</h2>
                        <h2>{{this.playerCardStats[5]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Dexterity</h2>
                        <h2>{{this.playerCardStats[6]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Constitution</h2>
                        <h2>{{this.playerCardStats[7]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Intelligence</h2>
                        <h2>{{this.playerCardStats[8]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Wisdom</h2>
                        <h2>{{this.playerCardStats[9]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Charisma</h2>
                        <h2>{{this.playerCardStats[10]}}</h2>
                    </div>
                    <br/>
                    <br/>
                    <div class="ability-score">
                        <h2>Initiative</h2>
                        <h2>{{this.playerCardStats[11]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Armor Class</h2>
                        <h2>{{this.playerCardStats[12]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Pas Perception</h2>
                        <h2>{{this.playerCardStats[13]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Speed</h2>
                        <h2>{{this.playerCardStats[15]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Max-HP</h2>
                        <h2>{{this.playerCardStats[14]}}</h2>
                    </div>
                    <div class="ability-score">
                        <h2>Proficiency Bonus</h2>
                        <h2>{{this.playerCardStats[18]}}</h2>
                    </div>
                </div>
                <div class="player-stats-attacks-spellcasting">
                    <h2>Attacks and SpellCasting</h2>
                    <h4 v-html="this.playerCardStats[19]"></h4>
                </div>
                <div class="player-stats-equipment">
                    <h2>Equipment</h2>
                    <h4 v-html="this.playerCardStats[20]"></h4>
                </div>
            </div>
            <div class="player-stats-footer">
                <button id="player-close-button" @click="closePlayerCard()">close</button>
            </div>
        </div>
    </div>
</template>

<script>

import SinglePlayerCard from './SinglePlayerCard.vue'
import PlayerPickCard from './PlayerPickCard'

export default {
    name: 'PlayerCard',
    components: {
        SinglePlayerCard,
        PlayerPickCard
    },
    data() {
        return {
            newPlayer: false,
            currentPlayers: [],
            allPlayers: [],
            createPlayerCard: false,
            allAllies: this.allies,
            next: false
        }
    },
    created: function() {

        // this.npcs.forEach( npc => {
        //     this.allPlayers.push(npc)
        // })
        
        this.players.forEach( player => {
            this.allPlayers.push(player)
        })

        this.refreshList()
 
    },
    props: ["players", "npcs", "allies"],
    methods: {
        refreshList: function() {
            this.currentPlayers.splice(0, this.currentPlayers.length)
            this.allAllies.forEach(ally => {
            fetch(`https://dndungeonmaster.herokuapp.com/players/${ally.player_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(response => response.json())
                .then(result => {
                    result.ally = ally.id
                    this.currentPlayers.push(result)
                })
            })
        },
        toggleAddPlayer: function(value) {
            this.newPlayer = value
        },
        toggleNext: function(value) {
            this.next = value
        },
        handlePlayerCard(value) {
            this.createPlayerCard = true
            this.playerCardStats = value
        },
        closePlayerCard() {
            this.createPlayerCard = false
        },
        handleAddPlayer(value) {

            const player_id = value[21]
            const userData = { player_id }

            fetch("https://dndungeonmaster.herokuapp.com/allies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(userData)
            })
                .then( response => response.json())
                .then(results => {
                    this.allAllies.push(results)
                    this.refreshList()
                })

            this.toggleAddPlayer(false)
        },
        handleRemovePlayer(value) {

            
            let pos = this.currentPlayers.map(function(e) { return e.name; }).indexOf(value[0]);
            this.currentPlayers.splice(pos, 1)
            let allyPos = this.allAllies.map(function(e) { return e.name; }).indexOf(value[21]);
            this.allAllies.splice(allyPos, 1)
            
            fetch(`https://dndungeonmaster.herokuapp.com/allies/${value[21]}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }) 

        }
    }
}
</script>

<style scoped>

    h2 {
        font-size: 1vw;
    }

    #plus-icon {
        justify-self: center;
        align-self: center;
        height: 25px;
        width: 25px;
    }

    .last-card {
        display: grid;
        grid-template-columns: 16vw;
        grid-template-rows: 20vh 10vh 6vh;
        grid-template-areas: "image" "text" "stats";
        border-radius: 4.5px;
        background: var(--bg-secondary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        text-align: center;
        transition: 0.5s ease;
        cursor: pointer;
        height: 36vh;
        width: 16vw;
        margin:25px;
        margin-top: 1rem;
    }

    .last-card:hover {
        transform: scale(1.05);
    }
    

    .player-card {
        z-index: 2;
        height: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        font-size: .8rem;
    }

    .main-row {
        width: 100%;
        display: flex;
        line-height: .7;
        justify-content: space-between;
    }

    .player-list {
        display: flex;
        width: 100%;
        margin-right: 1rem;
    }

    .player-stats {
        position: absolute;
        display: grid;
        grid-template-areas:
        "player-stats-body"
        "player-stats-footer";
        grid-template-rows: 9fr 1fr;
        top: 6rem;
        left: 10rem;
        height: 75vh;
        width: 70vw;
        z-index: 2;
        border-radius: 4.5px;
        background: var(--bg-secondary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    }

    .player-stats-body {
        grid-area: player-stats-body;
        line-height: 1;
    }

    .player-stats-body-general-information {
        position: relative;
        width: 17vw;
        text-align: left;
        padding-left: 1vw;
        top: 65%;
    }

    .player-stats-body-ability-scores {
        width: 10vw;
        position: absolute;
        text-align: left;
        top: 0;
        left: 18vw;
    }

    .player-stats-attacks-spellcasting {
        position: absolute;
        overflow: auto;
        background-color: var(--bg-primary);
        border-radius: 4.5px;
        width: 30vw;
        height: 30vh;
        right: 5vw;
        top: 1vh;
    }

    .player-stats-attacks-spellcasting h4 { 
        margin-left: 1rem;
        text-align: left;
    }

    .player-stats-equipment {
        position: absolute;
        overflow: auto;
        background-color: var(--bg-primary);
        border-radius: 4.5px;
        width: 30vw;
        height: 30vh;
        right: 5vw;
        top: 33vh;
    }

    .player-stats-equipment h4 { 
        margin-left: 1rem;
        text-align: left;
    }

    .ability-score {
        display: flex;
        justify-content: space-between;
    }

    .player-body-content {
        grid-area: player-stats-body;
    }

    .player-stats-footer {
        grid-area: player-stats-footer;
        background-color: rgb(209, 38, 29);
        border-bottom-left-radius: 4.5px;
        border-bottom-right-radius: 4.5px;
    }

    #player-close-button {
        position: absolute;
        color: var(--text-secondary);
        bottom: 1rem;
        width: 5rem;
        height: 2rem;
        right: 3rem;
        font-size: 1rem;
        background-color: var(--bg-primary);
        cursor: pointer;
    }

    .new-player {
        grid-area: new-player-top;
        display: flex;
        overflow: auto;
        flex-wrap: wrap;
        justify-content: center;
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

</style>