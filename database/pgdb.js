const dbInfo = require('../postgresInfo');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: dbInfo.user,
    host: 'localhost',
    database: dbInfo.db,
    password: dbInfo.password,
    post: 5432
});

exports.addUser = (username, password, cb) => {
    pool.query('INSERT INTO users (username, password) VALUES ($1, $2)',
    [username, password],
    cb
    );
};

exports.getUser = (username, cb) => {
    pool.query('SELECT username, password FROM users WHERE username = $1',
    [username],
    cb
    );
};

exports.post = (username, imageUrl, cb) => {
    pool.query('INSERT INTO posts (user_id, imageUrl) VALUES ((SELECT id FROM users WHERE username = $1), $2)',
    [username, imageUrl],
    cb
    );
};

exports.getPosts = cb => {
    pool.query('SELECT imageurl, username FROM posts CROSS JOIN users WHERE users.id = user_id',
    cb
    );
};



