const express = require('express');
const router = express.Router();

// Example route
router.get('/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

module.exports = router;
