require('dotenv').config();
const fetch = require('node-fetch');
const express = require("express");
const app = express();

if (!process.env.PROJECT_URL) {
    console.log(`The PROJECT_URL variable doesn't store any URL, exiting...`);
    process.exit(0);
}

app.get('/', (request, response) => {
    console.log(`Sent an HTTP request to ${process.env.PROJECT_URL}.`);

    fetch(`http://${process.env.PROJECT_URL}`)
        .then(res => {
            const data = res.text();

            switch (!data) {
                case true:
                        console.log(`Oof, we couldn't make an HTTP request to that site.`);
                        response.sendStatus(500);
                    break;

                default:
                        console.log(`Received a response from the site.`);
                        response.sendStatus(200);
                    break;
            }
        })
        .catch(err => {
            console.log(`Oof, something happened on our end (or that server).`);
            response.sendStatus(503);
            console.error(err);
        });
});

app.get('*' (req, res) => {
    res.sendStatus(404);
    return res.end();
});

const listener = app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${listener.address().port}.`);
});
