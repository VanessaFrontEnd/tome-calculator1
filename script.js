const resetBtn = document.getElementById('reset-btn')

const addExpertTomesBtn = document.getElementById('expert-roulette')
const addTrialsTomesBtn = document.getElementById('trials-roulette')
const addAllianceTomesBtn = document.getElementById('alliance-roulette')
const addNormalTomesBtn = document.getElementById('normal-roulette')
const addLevellingTomesBtn = document.getElementById('levelling-roulette')
const addBeastTribeBtn = document.getElementById('daily-beast-tribe')
const addMsqRoulette = document.getElementById('msq-roulette')

const chosenRoulette = document.getElementById('roulette-chosen')

let tome = document.getElementById('tome')

tome.innerHTML = 0

let currentTomes = 0

let tomeArray = []

//Add Section

addExpertTomesBtn.addEventListener('click', function(){
  let expertValue = 90
  let displayValue = currentTomes += expertValue
  tomeArray.push(expertValue)
  tome.innerHTML = displayValue
  chosenRoulette.innerHTML += `
  <strong>Expert roulette added for ${expertValue} tomes.</strong><br>`
  console.log(currentTomes, "button clicked")
})

addTrialsTomesBtn.addEventListener('click', function(){
  let trialsValue = 15
  let displayValue = currentTomes += trialsValue
  tomeArray.push(trialsValue)
  tome.innerHTML = displayValue
  chosenRoulette.innerHTML += `
  <strong>Trials roulette added for ${trialsValue} tomes.</strong><br>`
  console.log(currentTomes, "button clicked")
})

addAllianceTomesBtn.addEventListener('click', function(){
  let allianceValue = 50
  let displayValue = currentTomes += allianceValue
  tomeArray.push(allianceValue)
  tome.innerHTML = displayValue
  chosenRoulette.innerHTML += `
  <strong>Alliance roulette added for ${allianceValue} tomes.</strong><br>`
  console.log(currentTomes, "button clicked")
})

addNormalTomesBtn.addEventListener('click', function(){
  let normalValue = 20
  let displayValue = currentTomes += normalValue
  tome.innerHTML = displayValue
  tomeArray.push(normalValue)
  chosenRoulette.innerHTML += `
  <strong>Normal roulette added for ${normalValue} tomes.</strong><br>`
  console.log(currentTomes, "button clicked")
})

addLevellingTomesBtn.addEventListener('click', function(){
  let levellingValue = 15
  let displayValue = currentTomes += levellingValue
  tomeArray.push(levellingValue)
  tome.innerHTML = displayValue
  chosenRoulette.innerHTML += `
  <strong>Levelling roulette added for ${levellingValue} tomes.</strong><br>`
  console.log(currentTomes, "button clicked")
})

addMsqRoulette.addEventListener('click', function(){
  let msqValue = 50
  let displayValue = currentTomes += msqValue
  tomeArray.push(msqValue)
  tome.innerHTML = displayValue
  chosenRoulette.innerHTML += `
  <strong>Main Scenario Roulette added for ${msqValue} tomes.</strong><br>`
  console.log(currentTomes, "button clicked")
})

addBeastTribeBtn.addEventListener('click', function(){
  let beastValue = 15
  let displayValue = currentTomes += beastValue
  tomeArray.push(beastValue)
  tome.innerHTML = displayValue
  chosenRoulette.innerHTML += `
  <strong>Three daily Beast Tribe Quests added for ${beastValue} tomes.</strong><br>`
  console.log(currentTomes, "button clicked")
})

//Clear

function clearRouletteInfo() {
  chosenRoulette.innerHTML = ``
}

//Reset Button

resetBtn.addEventListener('click', function(){
  currentTomes = 0
  tome.innerHTML = 0
  clearRouletteInfo()
  console.log('tomes reset', currentTomes)  
})

function newTomes(){
  if(tomeArray.length > 0){
    let totalTomes = tomeArray.reduce((prev, curr) => {
        prev + curr
        console.log(prev+ curr)
    })
  }
}
