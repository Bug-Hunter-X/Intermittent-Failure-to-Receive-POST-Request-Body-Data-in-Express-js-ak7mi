const express = require('express');
const app = express();

// Using the raw body parser as a fallback
app.use(express.raw({ type: '*/*' }));
app.use(express.json());

app.post('/data', (req, res) => {
  let data;
  try {
    data = req.body;  // Try to parse from json body
    if(!data || Object.keys(data).length === 0) { // Check if JSON body is empty
      data = JSON.parse(req.body); //Try parsing the raw body as JSON
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Invalid JSON');
    return;
  }

  // Perform operations with data
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});