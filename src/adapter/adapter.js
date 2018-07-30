const indexCat = 'http://localhost:3000/api/v1/cats'
const userUrl = 'http://localhost:3000/api/v1/trainers/1'

const fetchIndex = () => {
  return fetch(indexCat)
    .then(resp => resp.json())
}

const fetchUser = () => {
  return fetch(userUrl)
    .then(resp => resp.json())
}

export { fetchIndex, fetchUser }
