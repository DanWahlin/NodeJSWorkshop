const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const www = process.env.WEB || './www';
const bodyParser = require('body-parser');
const routes = require('./routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(www));
console.log(`serving ${www}`);
app.use('/api', routes);
app.get('*', (req, res) => {
  res.end('Start sending your API calls');
  // res.sendFile(`index.html`, { root: www });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
