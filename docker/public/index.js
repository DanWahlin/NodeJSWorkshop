const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const public = process.env.PUBLIC || './public';
const bodyParser = require('body-parser');
const routes = require('./routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(public));
console.log(`serving ${public}`);
app.use('/api', routes);
app.get('*', (req, res) => {
  res.end('Start sending your API calls');
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
