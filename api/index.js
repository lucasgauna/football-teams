const express = require('express');
const cors = require('cors');
const path = require('path');
const teams = require('./teams.json');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the /assets folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/teams', (req, res) => {
    // Return static data.
    res.json(teams);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
