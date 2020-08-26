<template>
    <div class="party-page">
        <div class="party-page-custom-instance" @click="toggleAddPlayer(true)">
                <h1>Create New Party Member</h1>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </div>
        <div class="party-list"> 
            <div v-for="player in allPlayers" :key="player.name">
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
                    v-bind:proficiencyBonus='player.proficiency_bonus'
                    v-bind:id="player.id"
                    v-bind:actions="player.actions"
                    v-bind:equipment="player.equipment"
                    @deletePlayer="handleDeletePlayer"
                />
            </div>
        </div>
        <div class="new-player" v-if="newPlayer">
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
                                <input v-model="newPlayerName" placeholder="Enter Character Name"/>
                            </div>
                            <div class="input-label">
                                <h4>Subtitle</h4>
                                <input v-model="newPlayerSubtitle" placeholder="Enter Character Name"/>
                            </div>
                            <div class="input-label">
                                <h4>Race</h4>
                                <input v-model="newPlayerRace" placeholder="Enter Character Name"/>
                            </div>
                            <div class="input-label">
                                <h4>Class</h4>
                                <input v-model="newPlayerClass" placeholder="Enter Class"/>
                            </div>
                            <div class="input-label">
                                <h4>Level</h4>
                                <input v-model="newPlayerLevel" type="number" placeholder="Enter Level"/>
                            </div>
                            <div class="input-label">
                                <h4>Proficiency Bonus</h4>
                                <input v-model="newPlayerProficiencyBonus" type="number" placeholder="Enter Level"/>
                            </div>
                        </div>
                        <div class="second">
                            <div class="input-label">
                                <h4>Strength</h4>
                                <input v-model="newPlayerStrength" value=10 type="number" placeholder="Strength"/>
                            </div>
                            <div class="input-label">
                                <h4>Dexterity</h4>
                                <input v-model="newPlayerDexterity" value=10 type="number" placeholder="Dexterity"/>
                            </div>
                            <div class="input-label">
                                <h4>Constitution</h4>
                                <input v-model="newPlayerConstitution" value=10 type="number" placeholder="Constitution"/>
                            </div>
                            <div class="input-label">
                                <h4>Intelligence</h4>
                                <input v-model="newPlayerIntelligence" value=10 type="number"  placeholder="Intelligence"/>
                            </div>
                            <div class="input-label">
                                <h4>Wisdom</h4>
                                <input v-model="newPlayerWisdom" value=10 type="number" placeholder="Wisdom"/>
                            </div>
                            <div class="input-label">
                                <h4>Charisma</h4>
                                <input v-model="newPlayerCharisma" value=10 type="number" placeholder="Charisma"/>
                            </div>
                        </div>
                        <div class="third">
                            <div class="input-label">
                                <h4>Initiative</h4>
                                <input v-model="newPlayerInitiative" value=3 type="number" placeholder="Initiative"/>
                            </div>   
                            <div class="input-label">
                                <h4>Speed</h4>
                                <input v-model="newPlayerSpeed" value=20 type="number" placeholder="Speed"/>
                            </div>
                            <div class="input-label">
                                <h4>Skills</h4>
                                <input v-model="newPlayerPassivePerception" type="number" placeholder="Skills"/>
                            </div>
                            <div class="input-label">
                                <h4>Armor Class</h4>
                                <input v-model="newPlayerArmorClass" value=12 type="number" placeholder="Armor Class"/>
                            </div>
                            <div class="input-label">
                                <h4>Max hit_points</h4>
                                <input v-model="newPlayerHitPoints" value=40 type="number" placeholder="hit_points"/>
                            </div>
                            <div class="input-label">
                                <h4 style="line-height: 1;">Player Image URL</h4>
                                <input v-model="newPlayerImage" style="width: 10vw;" type="text" placeholder="insert url"/>
                            </div>
                            <button @click="handleNewPlayer" id="party-submit-button">Submit</button>
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

import PlayerListItem from './PlayerListItem'
export default {
    name: "Party",
    data() {
        return {
            newPlayer: false,
            allPlayers: this.players,

            newPlayerName: "",
            newPlayerSubtitle: "",
            newPlayerRace: "human",
            newPlayerClass: "warrior",
            newPlayerLevel: "1",
            newPlayerStrength: "10",
            newPlayerDexterity: "10",
            newPlayerConstitution: "10",
            newPlayerIntelligence: "10",
            newPlayerWisdom: "10",
            newPlayerCharisma: "10",
            newPlayerArmorClass: "10",
            newPlayerInitiative: "0",
            newPlayerSpeed: "20",
            newPlayerPassivePerception: "10",
            newPlayerHitPoints: "30",
            newPlayerImage: "https://i.kym-cdn.com/entries/icons/facebook/000/022/255/tumblr_inline_o58r6dmSfe1suaed2_500.jpg",
            newPlayerProficiencyBonus: "2",
            newPlayerActions: "",
            newPlayerEquipment: ""      
        }
    },
    components: {
        PlayerListItem
    },
    methods: {
        toggleAddPlayer: function(value) {
            this.newPlayer = value
        },
        handleDeletePlayer: function(value, id) {
            let pos = this.allPlayers.map(function(e) { return e.name; }).indexOf(value[0]);
            this.allPlayers.splice(pos, 1)

            fetch(`https://dndungeonmaster.herokuapp.com/players/${id}`, {
                method: 'DELETE',
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        handleNewPlayer: function() {
            this.toggleAddPlayer(false)
            const name = this.newPlayerName
            const subtitle = this.newPlayerSubtitle
            const race = this.newPlayerRace
            const characterClass = this.newPlayerClass
            const level = this.newPlayerLevel
            const strength = this.newPlayerStrength
            const dexterity = this.newPlayerDexterity
            const constitution = this.newPlayerConstitution
            const intelligence  = this.newPlayerIntelligence
            const wisdom = this.newPlayerWisdom
            const charisma = this.newPlayerCharisma
            const armor_class = this.newPlayerArmorClass
            const initiative = this.newPlayerInitiative
            const speed = this.newPlayerSpeed
            const passive_perception = this.newPlayerPassivePerception
            const hit_points = this.newPlayerHitPoints
            const image_url = this.newPlayerImage
            const proficiency_bonus = this.newPlayerProficiencyBonus
           
            const userData = { name, subtitle, race, characterClass, level, 
            strength, dexterity, constitution, intelligence, wisdom, charisma, 
            initiative, armor_class, passive_perception, hit_points, proficiency_bonus, 
            speed, image_url }

            

            fetch("https://dndungeonmaster.herokuapp.com/players", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(results => {
                userData.id = results.id
                this.allPlayers.push(userData)
            })
        }
    },
    props: ["players"],
}
</script>

<style scoped>

    .party-list {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 5vh;      
    }

    .party-page {
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
        border-radius: 4.5px;
        color: var(--text-secondary);
        text-align: center;
        margin: 0 auto;
        margin-top: 10vh;
        background-color: var(--bg-primary);
        border: solid 1px var(--bg-primary);
        height: 20vh;
        width: 70vw;
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
        margin-top: -.5rem;
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
        border-radius: 4.5px;
        background-image: url("../../assets/player-background.jpg");
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