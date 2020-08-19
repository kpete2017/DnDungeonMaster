<template>
    <div class="npc-list">
        <div v-for="player in players" :key="player.name">
                <SingleNpcCard
                    v-bind:name="player.name"
                    v-bind:meta="player.meta"
                    v-bind:armorClass="player.armor_class"
                    v-bind:hitPoints="player.hit_points"
                    v-bind:speed="player.Speed"
                    v-bind:strength="player.STR_mod"
                    v-bind:dexterity="player.DEX_mod"
                    v-bind:constitution="player.CON_mod"
                    v-bind:intelligence="player.INT_mod"
                    v-bind:wisdom="player.WIS_mod"
                    v-bind:charisma="player.CHA_mod"
                    v-bind:savingThrows="player.Saving_Throws"
                    v-bind:skills="player.Skills"
                    v-bind:senses="player.Senses"
                    v-bind:languages="player.Languages"
                    v-bind:Level="player.level"
                    v-bind:traits="player.Traits"
                    v-bind:actions="player.Actions"
                    v-bind:legendaryActions="player.Legendary_Actions"
                    v-bind:image='player.image_url'
                    v-bind:id="player.id"
                    @create-large-Npc-card="handlePlayerCard"
                    @delete-Npc-from-player-list="handleRemoveNpc"
                />
        </div>   
        <div class="add-npc" @click="toggleAddNpc(true)">
            <h1>Add Enemy</h1>
            <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </div>
        <div class="new-npc" v-if="newNpc" v-drag>
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleAddNpc(false)"></i>
            </div>
                <h2>Add Enemy</h2>
                <div class="monster-search-list">
                <form>
                    <label style="color:var(--text-secondary)">Search: </label>
                    <input v-model="search" style="width:20vw" class="note-search" type="text" placeholder="Search Monsters" />
                </form>
            </div>
                <div class="list-monsters">
                    <div v-for="monster in filteredList" :key="monster.name">
                        <div class="short-monster-description" @click="handleAddMonster(monster)">
                            <img :src="monster.image_url" style='height:24vh; width: 20vw; position: relative; left: 0; object-fit: cover; object-position:top; border-top-left-radius: 4.5px;'>
                            <div class="main-stats-description">
                                <h1>{{monster.name}}</h1>
                                <h2>Level: {{monster.level}}</h2>
                                <h2>Hit Points: {{monster.hit_points}}</h2>
                                <h2>Armor Class: {{monster.armor_class}}</h2>
                            </div>
                            <h4 class="main-traits-description" v-html="monster.Traits"> </h4>
                        </div>
                    </div>
                </div>
            <div class="new-npc-footer">
                <button id="close-button" @click="toggleAddNpc(false)">close</button>
            </div>
        </div>
        <div class="player-stats" v-if="createPlayerCard" v-drag>
            <div class="player-stats-menu-bar">
                <i id="exit-button" class="fa fa-times" @click="closePlayerCard()"></i>
            </div>
            <div class="player-stats-body"> 
                <div class="player-stats-picture">
                    <img :src="playerCardStats[19]" style='height:44vh; width: 20vw; position: absolute; left: 0; object-fit: cover; object-position:top; border-top-left-radius: 18px;'/>
                </div>
                <div class="player-stats-body-general-information">
                    <h1>{{this.playerCardStats[0]}}</h1>
                    <h2>{{this.playerCardStats[1]}}</h2>
                    <h2>Armor Class: {{this.playerCardStats[2]}}</h2>
                    <h2>Hit Points: {{this.playerCardStats[3]}}</h2>
                    <h2>Speed: {{this.playerCardStats[4]}}</h2>
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
                </div>
                <div class="player-stats-attacks-spellcasting">
                    <h2>Attacks and SpellCasting</h2>
                    <h4  class="ability-text" v-html="playerCardStats[17]"></h4>
                </div>
                <div class="player-stats-equipment">
                    <h2>Traits</h2>
                    <h4 class="trait-text" v-html="playerCardStats[16]"></h4>
                </div>
            </div>
            <div class="player-stats-footer">
                <button id="player-close-button" @click="closePlayerCard()">close</button>
            </div>
        </div>
    </div>
</template>

<script>
import SingleNpcCard from './SingleNpcCard.vue'
import Monsters from '../Monsters.json'

export default {
    name: "NpcCard",
    data() {
        return {
            newNpc: false,
            players: [],
            allMonsters: [],
            createPlayerCard: false,
            playerCardStats: [],
            next: false,
            abilities: [],
            allTraits: [],
            listAbility: [],
            listTrait: [],
            search: ""
        }
    },
    components: {
        SingleNpcCard,
    },
    props: ['npcs', 'enemies'],
    created: function() {

        this.npcs.forEach(npc => {
            this.allMonsters.push(npc)
        })

        Monsters.forEach(monster => {
            this.allMonsters.push(monster)
        })

        this.refreshList()
        
    },
    methods: {
        refreshList: function() {
            fetch(`https://dndungeonmaster.herokuapp.com/enemies`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(response => response.json())
            .then(result => {
                result.forEach( enemy => { this.players.push(enemy) })
            })
        },
        toggleAddNpc: function(value) {
            this.newNpc = value
        },
        toggleNext: function(value) {
            this.next = value
        },
        handlePlayerCard(value) {
            this.createPlayerCard = true
            this.playerCardStats = value
            
            this.abilities.splice(0, this.abilities.length)
            this.listAbility.splice(0, this.listAbility.length)
            this.allTraits.splice(0, this.abilities.length)
            this.listTrait.splice(0, this.abilities.length)

        },
        closePlayerCard() {
            this.createPlayerCard = false
        },
        handleRemoveNpc(value) {
            let pos = this.players.map(function(e) { return e.name; }).indexOf(value[0]);
            this.players.splice(pos, 1)

            console.log(value)

           fetch(`https://dndungeonmaster.herokuapp.com/enemies/${value[20]}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })

        },
        handleAddMonster(value) {

            fetch("https://dndungeonmaster.herokuapp.com/enemies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(value)
            })

            .then(response => response.json())
            .then(results => {
                this.players.push(results)
            })

            this.toggleAddNpc(false)
        },
    },
    computed: {
        filteredList() {
            if(this.search === "") {
                return this.allMonsters
            } else if(this.search) {
                return this.allMonsters.filter(monster => {
                    return monster.name.toLowerCase().includes(this.search.toLowerCase())
                }) 
            }
            return null
        }
    }
}
</script>

<style scoped>

    .ability-text {
        font-size: 1rem;
        text-align: left;
        margin-left: 2vw;
        margin-right: 2vw;
    }

    .add-npc:hover {
        transform: scale(1.05);
    }
    

    .trait-text {
        font-size: 1rem;
        text-align: left;
        margin-left: 2vw;
        margin-right: 2vw;
    }

    .list-monsters{
        height: 75%;
        width: 95%;
        margin: 0 auto;
        margin-top: 1rem;
        overflow: auto;
        text-align: left;
        line-height: 2;
        border-radius: 4.5px;
    }

    .new-npc-footer {
        background-color: rgb(209, 38, 29);
        height: 10vh;
        border-bottom-left-radius: 4.5px;
        border-bottom-right-radius: 4.5px;
        position: relative;
        bottom: -5.5vh;
    }

    .npc-list {
        font-size: .8rem;
        display: flex;
        width: 100%;
        height: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        margin-right: 1rem;
    }

    .short-monster-description {
        display: flex;
        margin-right: 1rem;
        background-color: var(--bg-primary);
        margin-top: 1rem;
        padding-right: 1rem;
        cursor: pointer;
    }

    .main-stats-description {
        margin-left: 2vw;
    }

    .main-traits-description   {
        margin-left: 5vw;
        margin: 0 auto;
        margin-top: 2vh;
        height: 20vh;
        width: 30vw;
        overflow: auto;
    }
    
    #plus-icon {
        height: 25px;
        width: 25px;
    }
    .add-npc {
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

    #plus-icon {
        justify-self: center;
        height: 25px;
        width: 25px;
    }

    .stay-square {
        width: 15rem;
    }

    .new-npc {
        border-radius: 4.5px;
        line-height: .7;
        position: fixed;
        top: 4rem;
        left: 15rem;
        height: 80%;
        width: 75vw;
        z-index: 3;
        background-color: var(--bg-secondary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
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
        z-index: 1;
        display: grid;
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
        position: relative;
        left: 22vw;
        top: -20vh;
        text-align: left;
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
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
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

</style>