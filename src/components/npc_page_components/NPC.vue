<template>
    <div class="party-page">
        <div class="party-page-custom-instance" @click="toggleAddNpc(true)">
                <h1>Create New NPC</h1>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </div>
        <div class="party-list"> 
            <div v-for="Npc in allNpcs" :key="Npc.name">
                <NpcListItem 
                    v-bind:name="Npc.name"
                    v-bind:subtitle="Npc.subtitle"
                    v-bind:race="Npc.race"
                    v-bind:characterClass="Npc.characterClass"
                    v-bind:level="Npc.level"
                    v-bind:strength="Npc.strength"
                    v-bind:dexterity="Npc.dexterity"
                    v-bind:constitution="Npc.constitution"
                    v-bind:intelligence="Npc.intelligence"
                    v-bind:wisdom="Npc.wisdom"
                    v-bind:charisma="Npc.charisma"
                    v-bind:initiative="Npc.initiative"
                    v-bind:armorClass="Npc.armor_class"
                    v-bind:passivePerception="Npc.passive_perception"
                    v-bind:hitPoints="Npc.hit_points"
                    v-bind:speed="Npc.speed"
                    v-bind:NpcName="Npc.Npc_name"
                    v-bind:image='Npc.image_url'
                    v-bind:proficiencyBonus='Npc.proficiency_bonus'
                    v-bind:id="Npc.id"
                    v-bind:actions="Npc.actions"
                    v-bind:equipment="Npc.equipment"
                    @deleteNpc="handleDeleteNpc"
                />
            </div>
        </div>
        <div class="new-Npc" v-if="newNpc">
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleAddNpc(false)"></i>
            </div>
            <form>
                <h2>Create New Npc</h2>
                <br/>
                <div class="new-Npc-body">
                    <div class="Npc-input-area">
                        <div class="first"> 
                            <div class="input-label">
                                <h4>Character Name</h4>
                                <input v-model="newNpcName" placeholder="Enter Character Name"/>
                            </div>
                            <div class="input-label">
                                <h4>Subtitle</h4>
                                <input v-model="newNpcSubtitle" placeholder="Enter Character Name"/>
                            </div>
                            <div class="input-label">
                                <h4>Race</h4>
                                <input v-model="newNpcRace" placeholder="Enter Character Name"/>
                            </div>
                            <div class="input-label">
                                <h4>Class</h4>
                                <input v-model="newNpcClass" placeholder="Enter Class"/>
                            </div>
                            <div class="input-label">
                                <h4>Level</h4>
                                <input v-model="newNpcLevel" type="number" placeholder="Enter Level"/>
                            </div>
                            <div class="input-label">
                                <h4>Proficiency Bonus</h4>
                                <input v-model="newNpcProficiencyBonus" type="number" placeholder="Enter Level"/>
                            </div>
                        </div>
                        <div class="second">
                            <div class="input-label">
                                <h4>Strength</h4>
                                <input v-model="newNpcStrength" value=10 type="number" placeholder="Strength"/>
                            </div>
                            <div class="input-label">
                                <h4>Dexterity</h4>
                                <input v-model="newNpcDexterity" value=10 type="number" placeholder="Dexterity"/>
                            </div>
                            <div class="input-label">
                                <h4>Constitution</h4>
                                <input v-model="newNpcConstitution" value=10 type="number" placeholder="Constitution"/>
                            </div>
                            <div class="input-label">
                                <h4>Intelligence</h4>
                                <input v-model="newNpcIntelligence" value=10 type="number"  placeholder="Intelligence"/>
                            </div>
                            <div class="input-label">
                                <h4>Wisdom</h4>
                                <input v-model="newNpcWisdom" value=10 type="number" placeholder="Wisdom"/>
                            </div>
                            <div class="input-label">
                                <h4>Charisma</h4>
                                <input v-model="newNpcCharisma" value=10 type="number" placeholder="Charisma"/>
                            </div>
                        </div>
                        <div class="third">
                            <div class="input-label">
                                <h4>Initiative</h4>
                                <input v-model="newNpcInitiative" value=3 type="number" placeholder="Initiative"/>
                            </div>   
                            <div class="input-label">
                                <h4>Speed</h4>
                                <input v-model="newNpcSpeed" value=20 type="number" placeholder="Speed"/>
                            </div>
                            <div class="input-label">
                                <h4>Skills</h4>
                                <input v-model="newNpcPassivePerception" type="number" placeholder="Skills"/>
                            </div>
                            <div class="input-label">
                                <h4>Armor Class</h4>
                                <input v-model="newNpcArmorClass" value=12 type="number" placeholder="Armor Class"/>
                            </div>
                            <div class="input-label">
                                <h4>Max hit_points</h4>
                                <input v-model="newNpcHitPoints" value=40 type="number" placeholder="hit_points"/>
                            </div>
                            <div class="input-label">
                                <h4 style="line-height: 1;">Npc Image URL</h4>
                                <input v-model="newNpcImage" style="width: 10vw;" type="text" placeholder="insert url"/>
                            </div>
                            <button @click="handleNewNpc" id="party-submit-button">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="new-Npc-footer">
                <button id="close-button" @click="toggleAddNpc(false)">close</button>
            </div>
        </div>
  </div>
</template>

<script>
import NpcListItem from './NpcListItem'
export default {
    name: "NPC",
    data() {
        return {
            newNpc: false,
            allNpcs: this.npcs,

            newNpcName: "",
            newNpcSubtitle: "",
            newNpcRace: "human",
            newNpcClass: "warrior",
            newNpcLevel: "1",
            newNpcStrength: "10",
            newNpcDexterity: "10",
            newNpcConstitution: "10",
            newNpcIntelligence: "10",
            newNpcWisdom: "10",
            newNpcCharisma: "10",
            newNpcArmorClass: "10",
            newNpcInitiative: "0",
            newNpcSpeed: "20",
            newNpcPassivePerception: "10",
            newNpcHitPoints: "30",
            newNpcImage: "data:image/jpeg;base64,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",
            newNpcProficiencyBonus: "2",
            newNpcActions: "",
            newNpcEquipment: ""
        }
    },
    components: {
        NpcListItem
    },
    methods: {
        toggleAddNpc: function(value) {
            this.newNpc = value
        },
        handleDeleteNpc: function(value, id) {
            let pos = this.allNpcs.map(function(e) { return e.name; }).indexOf(value[0]);
            this.allNpcs.splice(pos, 1)

            fetch(`https://dndungeonmaster.herokuapp.com/npcs/${id}`, {
                method: 'DELETE',
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        handleNewNpc: function() {
            this.toggleAddNpc(false)
            const name = this.newNpcName
            const subtitle = this.newNpcSubtitle
            const race = this.newNpcRace
            const characterClass = this.newNpcClass
            const level = this.newNpcLevel
            const strength = this.newNpcStrength
            const dexterity = this.newNpcDexterity
            const constitution = this.newNpcConstitution
            const intelligence  = this.newNpcIntelligence
            const wisdom = this.newNpcWisdom
            const charisma = this.newNpcCharisma
            const armor_class = this.newNpcArmorClass
            const initiative = this.newNpcInitiative
            const speed = this.newNpcSpeed
            const passive_perception = this.newNpcPassivePerception
            const hit_points = this.newNpcHitPoints
            const image_url = this.newNpcImage
            const proficiency_bonus = this.newNpcProficiencyBonus
           
            const userData = { name, subtitle, race, characterClass, level, 
            strength, dexterity, constitution, intelligence, wisdom, charisma, 
            initiative, armor_class, passive_perception, hit_points, proficiency_bonus, 
            speed, image_url }

            fetch("https://dndungeonmaster.herokuapp.com/npcs", {
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
                this.allNpcs.push(userData)
            })
        }
    },
    props: ["npcs"]
}
</script>

<style scoped>

    .party-list {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 5vh;   
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
        border-radius: 9px;
        color: var(--text-secondary);
        text-align: center;
        margin: 0 auto;
        margin-top: 10vh;
        background-color: var(--bg-primary);
        border: solid 1px var(--bg-primary);
        height: 20vh;
        width: 70vw;
    }
        .new-Npc-body {
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

    .Npc-input-area {
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

    .new-Npc {
        border-radius: 9px;
        background-image: url("../../assets/npc-background.jpg");
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
        height: 54vh;
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