const generateButton = document.getElementById('generateButton')
const roleSelect = document.getElementById('selectRoleID')
const generatedChampion = document.getElementById('generatedChampion')
const wikiLink = document.getElementById('wikiLink')
const rollCount = document.getElementById('rollCount')

let rollCountVariable = 0
generateButton.addEventListener('click', function() {
    rollCountVariable++
    rollCount.innerHTML = rollCountVariable
    let roleSelection = roleSelect.value
    let randomValueFromArrayLength = Math.floor(Math.random() * roles[roleSelection].length)
    let championValue = roles[roleSelection][randomValueFromArrayLength]
    generatedChampion.innerHTML = championValue
    wikiLink.href = `https://leagueoflegends.fandom.com/wiki/${championValue}/LoL`
    wikiLink.innerHTML = 'View Champion Wiki'
})

roleSelect.addEventListener('change', function() {
    rollCountVariable = 0
    rollCount.innerHTML = rollCountVariable
})
