const express = require('express');
const router = express.Router();

// Mock database (Replace with actual DB logic later)
let pokemonList = [
  { pokedex_number: 1, name: "Bulbasaur", type1: "Grass", type2: "Poison" },
  { pokedex_number: 4, name: "Charmander", type1: "Fire", type2: null },
];

// Get all Pokémon
router.get('/', (req, res) => {
  res.json(pokemonList);
});

// Get a Pokémon by ID
router.get('/:id', (req, res) => {
  const pokemon = pokemonList.find(p => p.pokedex_number === parseInt(req.params.id));
  if (!pokemon) {
    return res.status(404).json({ message: "Pokémon not found" });
  }
  res.json(pokemon);
});

// Add a new Pokémon
router.post('/', (req, res) => {
  const newPokemon = req.body;
  if (!newPokemon.pokedex_number || !newPokemon.name) {
    return res.status(400).json({ message: "Pokedex number and name are required" });
  }
  pokemonList.push(newPokemon);
  res.status(201).json(newPokemon);
});

// Update a Pokémon
router.put('/:id', (req, res) => {
  const index = pokemonList.findIndex(p => p.pokedex_number === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Pokémon not found" });
  }
  pokemonList[index] = { ...pokemonList[index], ...req.body };
  res.json(pokemonList[index]);
});

// Delete a Pokémon
router.delete('/:id', (req, res) => {
  const index = pokemonList.findIndex(p => p.pokedex_number === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Pokémon not found" });
  }
  const deletedPokemon = pokemonList.splice(index, 1);
  res.json(deletedPokemon);
});

module.exports = router;
