const express = require('express');
const app = express();

// Import Morgan middleware library, for logging info. on HTTP requests
const morgan = require('morgan');
app.use(morgan('common'));

let topTenMovies = [
    {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont'
    },
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola'
    },
    {
        title: 'The Godfather: Part II',
        director: 'Francis Ford Coppola'
    },
    {
        title: 'The Dark Knight',
        director: 'Christopher Nolan'
    },
    {
        title: '12 Angry Men',
        director: 'Sidney Lumet'
    },
    {
        title: 'Schindler\'s List',
        director: 'Steven Spielberg'
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        director: 'Peter Jackson'
    },
    {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino'
    },
    {
        title: 'The Good, the Bad and the Ugly',
        director: 'Sergio Leone'
    },
    {
        title: 'The Lord Of The Rings: The Fellowship Of The Rings',
        director: 'Peter Jackson'
    }
];

// GET requests
app.get('/movies', (req, res) => {
    res.json(topTenMovies);
});

app.get('/', (req, res) => {
    res.send('Welcome to your source on Movies!');
});

// Using the express.static function to serve files from the 'public' folder in the directory
app.use(express.static('public'));


// Error-handling middleware function
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Listen to port 8080
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});