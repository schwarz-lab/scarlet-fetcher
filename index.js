require('dotenv').config();
const fetch = require('node-fetch');

if (!process.env.PROJECT_URL) {
    console.log(`The PROJECT_URL variable doesn't store any URL, exiting...`);
} else {
    console.log(`Sent an HTTP request to ${process.env.PROJECT_URL}.`);

    fetch(`http://${process.env.PROJECT_URL}`)
        .then(res => {
            const data = res.text();

            switch (!data) {
                case true:
                        console.log(`Oof, we couldn't make an HTTP request to that site.`);
                    break;

                default:
                        console.log(`Received a response from the site.`);
                    break;
            }
        })
        .catch(err => {
            console.log(`Oof, something happened on our end (or that server).`);
            console.error(err);
        });
}