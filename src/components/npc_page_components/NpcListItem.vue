<template>
  <div class="long-Npc-list">
        <div class="Npc-stats-body">
            <div class="Npc-stats-body-left-side">
            <div class="Npc-stats-picture">
                    <div v-if="editNpc" style="margin-left: 1vw; height:44vh; width: 19vw; position: relative; left: 0; object-fit: cover; object-position:top; border-top-left-radius: 4.5px;">
                        <h2>Enter Image URL: </h2>
                        <input v-model="storedImage" style="width:15vw;" placeholder="Please Enter Image URL"/>
                    </div>
                    <img v-else :src="image" style='height:44vh; width: 20vw; position: relative; left: 0; object-fit: cover; object-position:top; border-top-left-radius: 4.5px;'/>
            </div>
            <div class="Npc-stats-body-general-information">
                <div class="character-general-info-list">
                    <h2 v-if="editNpc">Name: </h2>
                    <input v-if="editNpc" v-model="storedName" style="width: 5rem; height: 1rem;" placeholder="Please Enter Name"/>
                    <h1 v-else>{{storedName}}</h1>
                </div>
                <div class="character-general-info-list">
                    <h2 v-if="editNpc">Subtitle: </h2>
                    <input v-if="editNpc" v-model="storedSubtitle" style="width: 5rem; height: 1rem;" placeholder="Please Enter Subtitle"/>
                    <h2 v-else>{{storedSubtitle}}</h2>
                </div>
                <div class="character-general-info-list">
                    <h2>Race: </h2>
                    <input v-if="editNpc" v-model="storedRace" style="width: 5rem; height: 1rem;" placeholder="Please Enter Race"/>
                    <h2 class="general-info-value" v-else>{{storedRace}}</h2>
                </div>
                <div class="character-general-info-list">
                    <h2>Class: </h2>
                    <input v-if="editNpc" v-model="storedClass" style="width: 5rem; height: 1rem;" placeholder="Please Enter Class"/>
                    <h2 class="general-info-value" v-else>{{storedClass}}</h2>
                </div>
                <div class="character-general-info-list">
                    <h2>Level: </h2>
                    <input v-if="editNpc" v-model="storedLevel" style="width: 5rem; height: 1rem;" placeholder="Please Enter level"/>
                    <h2 class="general-info-value" v-else>{{storedLevel}}</h2>
                </div>
            </div>
            </div>
            <div class="Npc-stats-body-ability-scores">
                <div class="ability-score">
                    <h2>Strength:</h2>
                    <input v-if="editNpc" v-model="storedStrength" style="width: 5rem; height: 1rem;" placeholder="Please Enter strength"/>
                    <h2 v-else>{{storedStrength}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Dexterity:</h2>
                    <input v-if="editNpc" v-model="storedDexterity" style="width: 5rem; height: 1rem;" placeholder="Please Enter dexterity"/>
                    <h2 v-else>{{storedDexterity}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Constitution:</h2>
                    <input v-if="editNpc" v-model="storedConstitution" style="width: 5rem; height: 1rem;" placeholder="Please Enter constitution"/>
                    <h2 v-else>{{storedConstitution}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Intelligence:</h2>
                    <input v-if="editNpc" v-model="storedIntelligence" style="width: 5rem; height: 1rem;" placeholder="Please Enter intelligence"/>
                    <h2 v-else>{{storedIntelligence}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Wisdom:</h2>
                    <input v-if="editNpc" v-model="storedWisdom" style="width: 5rem; height: 1rem;" placeholder="Please Enter wisdom"/>
                    <h2 v-else>{{storedWisdom}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Charisma:</h2>
                    <input v-if="editNpc" v-model="storedCharisma" style="width: 5rem; height: 1rem;" placeholder="Please Enter charisma"/>
                    <h2 v-else>{{storedCharisma}}</h2>
                </div>
                <br/>
                <br/>
                <div class="ability-score">
                    <h2>Initiative:</h2>
                    <input v-if="editNpc" v-model="storedInitiative" style="width: 5rem; height: 1rem;" placeholder="Please Enter initiative"/>
                    <h2 v-else>{{storedInitiative}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Armor Class:</h2>
                    <input v-if="editNpc" v-model="storedArmorClass" style="width: 5rem; height: 1rem;" placeholder="Please Enter armor class"/>
                    <h2 v-else>{{storedArmorClass}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Pas Perception:</h2>
                    <input v-if="editNpc" v-model="storedPassivePerception" style="width: 5rem; height: 1rem;" placeholder="Please Enter passive-perception"/>
                    <h2 v-else>{{storedPassivePerception}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Speed:</h2>
                    <input v-if="editNpc" v-model="storedSpeed" style="width: 5rem; height: 1rem;" placeholder="Please Enter speed"/>
                    <h2 v-else>{{storedSpeed}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Max HP:</h2>
                    <input v-if="editNpc" v-model="storedHitPoints" style="width: 5rem; height: 1rem;" placeholder="Please Enter hitPoints"/>
                    <h2 v-else>{{storedHitPoints}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Proficiency Bonus:</h2>
                    <input v-if="editNpc" v-model="storedProficiencyBonus" style="width: 5rem; height: 1rem;" placeholder="Please Enter proficiency bonus"/>
                    <h2 v-else>{{storedProficiencyBonus}}</h2>
                </div>
            </div>
            <div class="right-side">
                <div class="Npc-stats-attacks-spellcasting">
                    <h2>Attacks and SpellCasting</h2>
                    <ckeditor v-if="editNpc" class="ck-editor" :editor="editor" v-model="storedActions"></ckeditor>
                    <p v-else v-html="storedActions"></p>
                </div>
                <div class="Npc-stats-equipment">
                    <h2>Equipment</h2>
                    <ckeditor v-if="editNpc" style="color:black;" class="ck-editor" :editor="editor" v-model="storedEquipment"></ckeditor>
                    <p v-else v-html="storedEquipment"></p>
                </div>
            </div>      
        </div>
        <div class="Npc-stats-footer">
            <button v-if="editNpc" @click="handleEditNpc()" class="Npc-options-button">Done</button>
            <button v-else @click="toggleEditNpc(true)" class="Npc-options-button">Edit</button>
            <button @click="deleteNpc" value="delete" class="Npc-options-button">Delete</button>
        </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: "LargeNpcListItem",
    props: ["name", "subtitle", "race", "characterClass", "level", "strength", "dexterity", "constitution", "intelligence", 
        "wisdom", "charisma", "initiative", "armorClass", "passivePerception", 
        "hitPoints", "speed", "NpcName", "image", "proficiencyBonus", "id", "actions", "equipment"],
    methods: {
        deleteNpc: function() {
            this.$emit("deleteNpc", this.allStats, this.storedId)
        },
        toggleEditNpc: function(value) {
            this.editNpc = value
        },
        handleEditNpc: function() {
            this.toggleEditNpc(false)

            const name = this.storedName
            const subtitle = this.storedSubtitle
            const race = this.storedRace
            const characterClass = this.storedClass
            const level = this.storedLevel
            const strength = this.storedStrength
            const dexterity = this.storedDexterity
            const constitution = this.storedConstitution
            const intelligence  = this.storedIntelligence
            const wisdom = this.storedWisdom
            const charisma = this.storedCharisma
            const armor_class = this.storedArmorClass
            const initiative = this.storedInitiative
            const speed = this.storedSpeed
            const passive_perception = this.storedPassivePerception
            const hit_points = this.storedHitPoints
            const image_url = this.storedImage
            const proficiency_bonus = this.storedProficiencyBonus
            const equipment = this.storedEquipment
           
            const userData = { name, subtitle, race, characterClass, 
            level, strength, dexterity, constitution, intelligence, wisdom, 
            charisma, initiative, armor_class, passive_perception, 
            hit_points, proficiency_bonus, speed, image_url, equipment }


            fetch(`https://dndungeonmaster.herokuapp.com/npcs/${this.storedId}`, {
                method: 'PUT',
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(userData)
            })
        }
    },
    data() {
        return {
            editNpc: false,
            storedName: this.name,
            storedSubtitle: this.subtitle,
            storedRace: this.race,
            storedClass: this.characterClass,
            storedLevel: this.level,
            storedStrength: this.strength,
            storedDexterity: this.dexterity,
            storedConstitution: this.constitution,
            storedIntelligence: this.intelligence,
            storedWisdom: this.wisdom,
            storedCharisma: this.charisma,
            storedInitiative: this.initiative,
            storedArmorClass: this.armorClass,
            storedPassivePerception: this.passivePerception,
            storedHitPoints: this.hitPoints,
            storedSpeed: this.speed,
            storedNpcName: this.NpcName,
            storedImage: this.image,
            storedProficiencyBonus: this.proficiencyBonus,
            storedId: this.id,
            storedActions: this.actions,
            storedEquipment: this.equipment,

            editor: ClassicEditor,
        }
    },
    mounted() {
        this.allStats = [this.name, this.subtitle, this.race, this.characterClass, this.level, this.strength, this.dexterity, this.constitution, this.intelligence, 
        this.wisdom, this.charisma, this.initiative, this.armorClass, this.passivePerception, 
        this.hitPoints, this.speed, this.NpcName, this.image, this.proficiencyBonus, this.actions, this.equipment, this.id]
    }
}
</script>

<style scoped>

    .general-info-value {
        margin-left: 1rem;
    }

    .character-general-info-list {
        align-items: center;
        line-height: 1;
        width: 80%;
        height: 2.0rem;
        display: flex;
        flex-wrap: wrap;
    }

    .character-general-info h2 h1{
        margin-left: 1rem;
        margin-right: 1rem;
    }


    .long-Npc-list {
        font-size: .8rem ;
        height: 75vh;
        width: 70vw;
        display: grid;
        grid-template-areas:
        "Npc-stats-body"
        "Npc-stats-footer";
        grid-template-rows: 9fr 1fr;
        margin-left: 14.6vw;
        background-color: var(--bg-primary);
        border-radius: 4.5px;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    }

    .Npc-stats-body {
        grid-area: Npc-stats-body;
        display: flex;
        line-height: 1;
    }

    .Npc-stats-body-general-information {
        margin-left: 1rem;
        margin-bottom: 1rem;
    }

    .ability-score {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.5rem;
    }

    .Npc-stats-body-ability-scores {
        width: 10vw;
        height: 2rem;
        text-align: left;
        margin-left: 1rem;
    }

    .Npc-stats-attacks-spellcasting {
        position: relative;
        text-align: center;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--bg-secondary);
        border-radius: 4.5px;
        width: 30vw;
        height: 30vh;
        right: -6vw;
        top: 1vh;
    }

    .Npc-stats-equipment {
        margin-top: 1rem;
        position: relative;
        text-align: center;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--bg-secondary);
        border-radius: 4.5px;
        width: 30vw;
        height: 30vh;
        right: -6vw;
        top: 1vh;
    }

    .Npc-stats-attacks-spellcasting > p {
        text-align: left;
        font-size: 1rem;
        margin-left: 1rem;
    }

    .Npc-stats-equipment > p {
        text-align: left;
        font-size: 1rem;
        margin-left: 1rem;
    }

    .Npc-options-button {
        color: var(--text-secondary);
        background-color: var(--bg-secondary);
        padding: 1rem;
        margin-top: 1rem;
        margin-left: 1rem;
        cursor: pointer;
    }

    .ability-score {
        display: flex;
        justify-content: space-between;
    }

    .Npc-body-content {
        grid-area: Npc-stats-body;
    }

    .Npc-stats-footer {
        grid-area: Npc-stats-footer;
        background-color: rgb(209, 38, 29);
        border-bottom-left-radius: 4.5px;
        border-bottom-right-radius: 4.5px;
    }

</style>