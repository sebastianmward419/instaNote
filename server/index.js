const express = require('express');
const bodyParser = require('body-parser');
const postgres = require('../database/pgdb.js');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../public/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
    
    postgres.getPosts(
        (err, results) => {
            if(err) {
                console.log(err);
            }
                res.send(results.rows);
        }
    )
})

app.post('/api/log-in', (req, res) => {
    var info = req.body;

    postgres.getUser(info.username, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            if (result.rows[0].password === info.password) {
                res.sendStatus(200);
            } else {
                res.sendStatus(403);
            }
        }
    })
})

app.post('/api/sign-up', (req, res) => {
    var info = req.body;
 
    postgres.addUser(info.username, info.password, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.sendStatus(200);
        }
    }) 
})

app.post('/api/post', (req, res) => {
    var info = req.body;

    postgres.post(info.currentUser, info.imageUrl, (err, result) => {
         if(err) {
             console.log(err);
         } else {
             res.sendStatus(200)          
         }
    })
})


app.listen(port, () => {
    console.log('Server listening on port 3000');
});