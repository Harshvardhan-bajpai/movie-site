// Function to set the movie title in local storage
function setMovieTitle(title) {
    localStorage.setItem('movieTitle', title);
}

// Function to get the movie title from local storage
function getMovieTitle() {
    return localStorage.getItem('movieTitle');
}

// Get the movie title from local storage
const movieTitle = getMovieTitle();

// Update the movie title and video source if movieTitle is available
if (movieTitle) {
    document.getElementById('movieTitle').innerText = movieTitle;
    document.getElementById('movieImage').src = `/images/${movieTitle}.jpg`;
    document.getElementById('movieSource').src = `/images/${movieTitle}.mp4`;
    document.getElementById('movieVideo').load(); // Reload the video to reflect the new source
}
