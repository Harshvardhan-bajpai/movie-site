const express = require('express');
const path = require('path');
const app = express();

const movies = [
    { title: 'Hitman Agent 47', src: '/images/hitmanagent47.jpg', video: '/images/Hitman Agent 47.mp4' },
    { title: '47 RONIN', src: '/images/47 RONIN.jpg', video: '/images/47 RONIN.mp4' },
    { title: 'UNCHARTED', src: '/images/UNCHARTED.jpg', video: '/images/UNCHARTED.mp4' },
    { title: 'ANIMAL', src: '/images/ANIMAL.jpg', video: '/images/ANIMAL.mp4' },
    { title: 'AQUAMAN AND THE LOST KINGDOM', src: '/images/AQUAMAN AND THE LOST KINGDOM.jpg', video: '/images/AQUAMAN AND THE LOST KINGDOM.mp4' },
    { title: 'BAD NEWZ', src: '/images/BAD NEWZ.jpg', video: '/images/BAD NEWZ.mp4' },
    { title: 'BHOLA', src: '/images/BHOLA.jpg', video: '/images/BHOLA.mp4' },
    { title: 'BLACK PANTHER WAKANDA FOREVER', src: '/images/BLACK PANTHER WAKANDA FOREVER.jpg', video: '/images/BLACK PANTHER WAKANDA FOREVER.mp4' },
    { title: 'FINAL DESTINATION 3', src: '/images/FINAL DESTINATION 3.jpeg', video: '/images/FINAL DESTINATION 3.mp4' },
    { title: 'GREATEST OF ALL TIME', src: '/images/GREATEST OF ALL TIME.jpg', video: '/images/GREATEST OF ALL TIME.mp4' },
    { title: 'HEREDITARY', src: '/images/HEREDITARY.jpg', video: '/images/HEREDITARY.mp4' },
    { title: 'INSIDIOUS CHAPTER 1', src: '/images/INSIDIOUS CHAPTER 1.jpg', video: '/images/INSIDIOUS CHAPTER 1.mp4' },
    { title: 'INSIDIOUS CHAPTER 2', src: '/images/INSIDIOUS CHAPTER 2.jpg', video: '/images/INSIDIOUS CHAPTER 2.mp4' },
    { title: 'INSIDIOUS CHAPTER 3', src: '/images/INSIDIOUS CHAPTER 3.jpeg', video: '/images/INSIDIOUS CHAPTER 3.mp4' },
    { title: 'INSIDIOUS THE LAST KEY', src: '/images/INSIDIOUS THE LAST KEY.jpg', video: '/images/INSIDIOUS THE LAST KEY.mp4' },
    { title: 'Ironman 1', src: '/images/ironman1.jpg', video: '/images/ironman1.mp4' },
    { title: 'IT', src: '/images/IT.jpg', video: '/images/IT.mp4' },
    { title: 'JOHN WICK CHAPTER 2', src: '/images/JOHN WICK CHAPTER 2.jpg', video: '/images/JOHN WICK CHAPTER 2.mp4' },
    { title: 'JOHN WICK CHAPTER 3', src: '/images/JOHN WICK CHAPTER 3.jpg', video: '/images/JOHN WICK CHAPTER 3.mp4' },
    { title: 'JOHN WICK CHAPTER 4', src: '/images/JOHN WICK CHAPTER 4.jpg', video: '/images/JOHN WICK CHAPTER 4.mp4' },
    { title: 'JOHN WICK', src: '/images/JOHN WICK.jpg', video: '/images/JOHN WICK.mp4' },
    { title: 'KAALKI', src: '/images/KAALKI.jpg', video: '/images/KAALKI.mp4' },
    { title: 'KGF CHAPTER 2', src: '/images/KGF CHAPTER 2.jpg', video: '/images/KGF CHAPTER 2.mp4' },
    { title: 'KGF', src: '/images/KGF.jpg', video: '/images/KGF.mp4' },
    { title: 'KILL', src: '/images/KILL.jpg', video: '/images/KILL.mp4' },
    { title: 'MUNJYA', src: '/images/MUNJYA.webp', video: '/images/MUNJYA.mp4' },
    { title: 'RED NOTICE', src: '/images/RED NOTICE.jpeg', video: '/images/RED NOTICE.mp4' },
    { title: 'SCREAM 4', src: '/images/SCREAM 4.jpg', video: '/images/SCREAM 4.mp4' },
    { title: 'SCREAM 5', src: '/images/SCREAM 5.jpg', video: '/images/SCREAM 5.mp4' },
    { title: 'SHAMSHERA', src: '/images/SHAMSHERA.jpg', video: '/images/SHAMSHERA.mp4' },
    { title: 'SNOW WHITE AND THE HUNTSMAN', src: '/images/SNOW WHITE AND THE HUNTSMAN.jpg', video: '/images/SNOW WHITE AND THE HUNTSMAN.mp4' },
    { title: 'THE AMAZING SPIDERMAN 2', src: '/images/THE AMAZING SPIDERMAN 2.jpg', video: '/images/THE AMAZING SPIDERMAN 2.mp4' },
    { title: 'THE AMAZING SPIDERMAN', src: '/images/THE AMAZING SPIDERMAN.jpg', video: '/images/THE AMAZING SPIDERMAN.mp4' },
    { title: 'THE CONJURING 2', src: '/images/THE CONJURING 2.jpg', video: '/images/THE CONJURING 2.mp4' },
    { title: 'THE CONJURING 3', src: '/images/THE CONJURING 3.jpg', video: '/images/THE CONJURING 3.mp4' },
    { title: 'THE CONJURING', src: '/images/THE CONJURING.jpg', video: '/images/THE CONJURING.mp4' },
    { title: 'THE LOST CITY OF Z', src: '/images/THE LOST CITY OF Z.jpg', video: '/images/THE LOST CITY OF Z.mp4' },
    { title: 'TIGER 3', src: '/images/TIGER 3.jpg', video: '/images/TIGER 3.mp4' },
    { title: 'UNCHARTED', src: '/images/UNCHARTED.jpg', video: '/images/UNCHARTED.mp4' },
    { title: 'JOURNEY 2 THE MYSTERIOUS ISLAND', src: '/images/JOURNEY 2 THE MYSTERIOUS ISLAND.jpg', video: '/images/JOURNEY 2 THE MYSTERIOUS ISLAND.mp4' },
    { title: 'THE DAWN', src: '/images/THE DAWN.jpg', video: '/images/THE DAWN.mp4' }
];
// add more movies in future

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve homepage.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});


app.get('/bollywood.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'bollywood.html'));
});

app.get('/hollywood.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'hollywood.html'));
});

// Serve moviedisplay.html with movie details
app.get('/moviedisplay', (req, res) => {
    const title = req.query.title;
    const movie = movies.find(m => m.title === title);
    if (movie) {
        res.render('moviedisplay', { movie });
    } else {
        res.status(404).send('Movie not found');
    }
});

// Search route
app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    res.render('searchResults', { movies: filteredMovies });
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});