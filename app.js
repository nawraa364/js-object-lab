const pokemon = require('./data.js')

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

// console.dir(pokemon, { maxArrayLength: null })

// Exercise 1
// console.log(pokemon[58].name)


// Exercise 2
// console.log(game)

// Exercise 3
game.difficulty = "Hard"

// Exercise 4
const myPokemon = pokemon[0]
game.party.push(myPokemon)

// Exercise 5
game.party.push(pokemon[1], pokemon[2], pokemon[3])

// Exercise 6

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})


// Exercise 7 
game.party.forEach(pok => {
  const number = pok.number
  game.party.splice(number - 1, 1, pokemon[number])
})

// Exercise 8
// game.party.forEach(pok => {
//   console.log(pok.name)
// })


// Exercise 9
// pokemon.forEach(pok => {
//   if (pok.starter) {
//     console.log(pok.name)
//   }
// }) 


// Exercise 10 
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
}


game.catchPokemon(
  { number: 100, name: "Nawraa", type: "Girl", hp: -5, starter: false }
)


// Exercise 11
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
  game.items[1].quantity -= 1
}

game.catchPokemon(
  { number: 100, name: "Nawraa", type: "Girl", hp: -5, starter: false }
)

// Exercise 12
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
})

// Exercise 13

game.gymStatus = () => {
  const gymTally = {
    completed: 0,
    incomplete: 0
  }

  game.gyms.forEach(gym => {
    if(gym.completed) {
      gymTally.completed += 1
    } else {
      gymTally.incomplete += 1
    }
  })
  console.log(gymTally)
}

// game.gymStatus()

// Exercise 14
game.partyCount = () => {
  return game.party.length
}

const count = game.partyCount()
console.log(count)


// Exercise 15
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})

// Exercise 16 
console.log(game)