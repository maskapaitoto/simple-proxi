const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send('Missing URL');
  
  try {
    const response = await fetch(target);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).send('Error fetching content');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
