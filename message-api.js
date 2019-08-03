const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const parserMiddleware = bodyParser.json();

const port = 3000;
let requestLimitCounter = 0;
const MAX_ALLOWED_REQUEST = 5;
const responseMessage = {message: "Message received loud and clear"};

const checkMaxCalls = (request, response, next) => {
    if (requestLimitCounter >= MAX_ALLOWED_REQUEST) {
        response.status(429).send();
    } else {
        next();
    }
};

app.use(checkMaxCalls);
app.use(parserMiddleware);

app.post('/messages', (request, response) => {
    const text = request.body.text;
    if (!text || text.trim().length === 0) {
        response.status(400).send();
    } else {
        requestLimitCounter++;
        console.log(request.body.text);
        response.json(responseMessage)
    }

});

app.listen(port, () => console.log("listening on port " + port));

