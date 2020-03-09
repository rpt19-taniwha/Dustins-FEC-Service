const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
console.log('dirname', path.join(__dirname, 'public', 'index.html'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'public')));



app.get('/', (req, res) => {
  res.sendStatus(200);
  res.end();
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});