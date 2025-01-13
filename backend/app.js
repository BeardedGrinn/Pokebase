require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON requests

app.get('/', (req, res) => {
  res.send('API is running!');
});

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
