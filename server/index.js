require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      fandomCtrl = require('./controllers/fandomController'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
});

app.listen(SERVER_PORT, () => console.log(`Fandoms happening on ${SERVER_PORT}`));