const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const app = dialogflow();

app.intent('actions.intent.MAIN', (conv) => {
    conv.ask("hello");
});
console.log("app running");

express()
    .use(bodyParser.json(), app)
    .listen(3000);