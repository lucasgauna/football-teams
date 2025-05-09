const express = require('express');
const cors = require('cors');
const teams = require('./teams.json');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/api/teams', (req, res) => {
    // Return static data.
    res.json(teams);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
