require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

// Import routes
console.log('Attempting to import routes...');
const pokemonRoutes = require('./src/routes/PokemonRoutes');
console.log('Routes imported successfully');

// Use routes
app.use('/api/pokemon', pokemonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
