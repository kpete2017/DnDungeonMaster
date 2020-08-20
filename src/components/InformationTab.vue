<template>
  <div class="information-tab">
    <div class="top-third">
      <h2 style="margin: 0 auto;">Region information</h2>
      <div class="region-info">
        <div class="region-div">
          <p>Plane:</p>
          <input v-if="editRegionInfo" v-model="plane"/>
          <p v-else>{{plane}}</p>
        </div> 
        <div class="region-div">
          <p>Continent:</p>
          <input v-if="editRegionInfo" v-model="continent"/>
          <p v-else>{{continent}}</p>
        </div> 
        <div class="region-div">
          <p>Area: </p>
          <input v-if="editRegionInfo" v-model="area"/>
          <p v-else>{{area}}</p>
        </div> 
        <div class="region-div">
          <p>Climate: </p>
          <input v-if="editRegionInfo" v-model="climate"/>
          <p v-else>{{climate}} </p>
        </div>
        <div class="region-div">
          <p>Terrain: </p>
          <input v-if="editRegionInfo" v-model="terrain"/>
          <p v-else>{{terrain}} </p>
        </div>  
      </div>
      <button style="margin: 0 auto;" v-if="editRegionInfo" @click="handleEditRegionInfo" id="edit-region-button">Done</button>
      <button style="margin: 0 auto;" v-else @click="editRegionInfo = !editRegionInfo" id="edit-region-button">Edit</button>
    </div>
    <div class="middle-third">
      <h2>Turn Rotation</h2>
      <button @click="rotate" id="rotation-next-button">Next</button>
      <div class="turn-rotation" v-for="character in turnRotation" :key="character.name">
        <i  style="cursor: pointer;" class="fa fa-times" @click="deletePlayerFromRotation(character)"></i>
        <p class="turn-rotation-character">{{character.name}}</p>
      </div>
      <form style="margin: 1rem;" @submit.prevent="handleAddTurnRotation">
        <input style="width: 8vw;" v-model="newCombatant" type="text"/>
        <button type="submit">Add</button>
      </form>
    </div>
    <div class="bottom-third">
      <svg id="roll-pic" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-d20" class="svg-inline--fa fa-dice-d20 fa-w-15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M106.75 215.06L1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07-108.64-190.1zM7.41 315.43L82.7 193.08 6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09zM18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57zm81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78l81.53 48.69zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176H240zm233.94-28.9l-76.64 45.99 75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41 18.72l81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14l79.93 142.94zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56zm-86.3-200.97l-108.63 190.1 208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14L373.25 215.06zM240 208H139.57L240 383.75 340.43 208H240z"></path></svg>
      <h2 id="roll-text">Roll</h2>
      <form  @submit.prevent="processForm">
        <select v-model="dice">
          <option value="D4">D4</option>
          <option value="D6">D6</option>
          <option value="D8">D8</option>
          <option value="D10">D10</option>
          <option value="D12">D12</option>
          <option value="D00">D100</option>
          <option value="D20">D20</option>
        </select>
        <input v-model="number" type="number" placeholder="0"/>
        <button type="submit">Roll Dice</button>
      </form>
      <div class="roll-result"> 
          <h4 id="roll-result-text">{{result}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationTab",
  data() {
    return {
      dice: "D4",
      number: 1,
      result: 0,
      turnRotation: this.rotation,
      newCombatant: "",
      storedRegionInfo: "",
      editRegionInfo: false,
      plane: "",
      continent: "",
      area: "",
      climate: "",
      terrain:  "",
    }
  },
  props: ["region", "rotation"],
  created: function(){
    if(this.region) {
      this.plane = this.region.plane
      this.continent = this.region.continent
      this.area =  this.region.area
      this.climate = this.region.climate
      this.terrain = this.region.terrain
    }
  },
  methods: {
    processForm: function() {
      if(this.dice == "D4") {
        this.getResult(4)
      } else if(this.dice == "D6") {
        this.getResult(6)
      } else if(this.dice == "D8") {
        this.getResult(8)
      } else if(this.dice == "D10") {
        this.getResult(10)
      } else if(this.dice == "D12") {
        this.getResult(12)
      } else if(this.dice == "D00") {
        this.getResult(100)
      } else if(this.dice == "D20") {
        this.getResult(20)
      }
    },
    getResult: function(n) {
      let total = 0
      for(let i = 0; i < this.number; i++) {
        total = total + Math.floor(Math.random() * n) + 1
      }
      this.result = total
    },
    rotate: function() {
      let firstEntry = this.turnRotation[0]
      this.turnRotation.shift()
      this.turnRotation.push(firstEntry)
    },
    handleAddTurnRotation: function() {

      const name = this.newCombatant
      const userData = { name }

      fetch(`https://dndungeonmaster.herokuapp.com/rotations`, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(userData)
      })
      .then(respone => respone.json())
      .then(results => this.turnRotation.push(results))

    },
    deletePlayerFromRotation: function(character) {
      fetch(`https://dndungeonmaster.herokuapp.com/rotations/${character.id}`, {
        method: 'DELETE',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })    
      let pos = this.turnRotation.indexOf(character)
      this.turnRotation.splice(pos, 1)
    },
    handleEditRegionInfo: function() {

      this.editRegionInfo = !this.editRegionInfo

      const plane = this.plane
      const continent = this.continent
      const area = this.area
      const climate = this.climate
      const terrain = this.terrain

      const userData =  {plane, continent, area, climate, terrain}

      fetch(`https://dndungeonmaster.herokuapp.com/regions/${this.region.id}`, {
              method: 'PUT',
              headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
              },
              body: JSON.stringify(userData)
          })
    }
  },
}
</script>

<style>

 .turn-rotation:first-of-type {
   border: solid 1px rgb(209, 38, 29);
 }

 .middle-third > input {
   margin-left: 1rem;
   width: 2vw;
 }

 .turn-rotation {
   margin: 0 auto;
   width: 80%;
   display: flex;
   align-items: center;
 }

 .turn-rotation-character {
   margin: 0 auto;
   padding-top: 1rem;
   padding-bottom: 1rem;
 }

  #rotation-next-button {
    width: 80%;
    padding: 1rem;
    position: relative;
    cursor: pointer;
    top: -1rem;
    color: var(--text-secondary);
    background-color: var(--bg-secondary);
  }

  .roll-result {
    background-color: var(--bg-secondary);
    margin: 0 auto;
    width: 8vw;
    height: 6vh;
    position: relative;
    margin-top: 1vh;
    bottom: 2.5vh;
  }

  #roll-result-text {
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 1rem;
  }

  #roll-pic {
    margin-top: .5rem;
    height: 45px;
    width: 45px;
  }

  .information-tab {
    max-height: 95vh;
    display: grid;
    grid-template-areas: 
    "top"
    "middle"
    "bottom";
    grid-template-rows: 1fr 1fr 1fr;
  }

  select {
    height: 1.3rem;
  }

  .middle-third {
    grid-area: middle;
    height: 29.5vh;
    overflow: auto;
    border-top: solid 1px var(--text-secondary);

  }

  .bottom-third {
    grid-area: bottom;
    border-top: solid 1px var(--text-secondary);
    overflow: auto;
  }

  .bottom-third input {
    width: 2rem;
  }

  .top-third {
    color: black;
    grid-area: top;
    padding-left: 1rem;
    max-width: 12.5vw;
    max-height: 28vh;
    overflow: auto;
  }

  .region-info {
    margin-left: 1rem;
    line-height: .2;
  }

  #roll-text {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  .region-div {
    display: flex;
    justify-content: space-between;
    color: var(--text-secondary);
    margin-right: 1rem;
    line-height: 0;
  }

  #edit-region-button {
    position: relative;
    width: 8vw;
    height: 4vh;
    top: 1rem;
    color: #fff !important;
    background: var(--bg-secondary);
    cursor: pointer;
    transition: all 0.4s ease 0s;
  }

  #edit-region-button:hover {
    transform: scale(1.05);
    transition: all 0.4s ease 0s;
  }

  .text-editor {
    max-height: 17vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
</style>