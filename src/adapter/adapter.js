const indexCat = 'http://localhost:3000/api/v1/cats'
const trainerUrl = 'http://localhost:3000/api/v1/trainers/'
const battleCatUrl = 'http://localhost:3000/api/v1/battle_cats'
const teamUrl = `http://localhost:3000/api/v1/teams/`

const fetchIndex = () => {
  return fetch(indexCat)
    .then(resp => resp.json())
}

const fetchUser = (username) => {
  return fetch(`${trainerUrl}${username}`)
    .then(resp => resp.json())
}

const postBattleCat = (battleCatObject) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(battleCatObject)
  }

  return fetch(battleCatUrl, options)
    .then(resp => resp.json())
}

const postTeam = (teamObject) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(teamObject)
  }

  return fetch(teamUrl, options)
    .then(resp => resp.json())
}



export { fetchIndex, fetchUser, postBattleCat, postTeam }
