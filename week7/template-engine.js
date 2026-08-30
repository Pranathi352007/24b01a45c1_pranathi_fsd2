const express = require('express');

const app = express();

const port = 3000;


// Configure EJS as template engine

app.set('view engine', 'ejs');


// Middleware to read form data

app.use(express.urlencoded({ extended: true }));


// Display registration form

app.get('/', (req, res) => {

    res.render('index', {

        title: 'User Registration',

        error: null,

        user: null

    });

});


// Accept form data

app.post('/register', (req, res) => {

    const { username, age } = req.body;


    // Validation

    let errorMessage = null;


    if (!username || username.length < 3) {

        errorMessage = 'Username must be at least 3 characters long.';

    }

    else if (!age || isNaN(age) || age < 18) {

        errorMessage = 'You must be at least 18 years old.';

    }


    // If validation fails

    if (errorMessage) {

        return res.render('index', {

            title: 'Registration Failed',

            error: errorMessage,

            user: null

        });

    }


    // If validation succeeds

    res.render('index', {

        title: 'Registration Successful',

        error: null,

        user: {

            username: username,

            age: age

        }

    });

});

// Start server
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);

});
