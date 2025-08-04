// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
let likedMovies = [];

const setup = () => {
    let movielist = document.getElementById("movielist");
    let likedlist = document.getElementById("likedlist");

    movies.forEach(movie => {
        let movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML =`
 <div class="movie-interaction">
            <h3>${movie.title}</h3>
             <div class="buttons">
                <img src="images/like.png" alt="like button" class="like-button" width="20px">
                <img src="images/dislike.png" alt="dislike button" class="dislike-button" width="20px">
            </div>
            <div>
        <img src="${movie.imageUrl}" alt="poster van ${movie.title}"/>
        </div>
        <div>
        <p>${movie.description}</p>
            </div>`;


        movielist.appendChild(movieDiv);
    });
    let likeBtns = document.querySelectorAll(".like-button");
    let dislikeBtns = document.querySelectorAll(".dislike-button");

    for(let i = 0; i < likeBtns.length; i++) {
        likeBtns[i].addEventListener("click", () => {
            likeBtns[i].style.backgroundColor = "green";
            dislikeBtns[i].style.backgroundColor = "";
            const title = movies[i].title;
            if (!likedMovies.includes(title)) {
                likedMovies.push(title);
                updateLikedList();
            }
        });
    }
    for(let i = 0; i < dislikeBtns.length; i++) {
        dislikeBtns[i].addEventListener("click", () => {
            dislikeBtns[i].style.backgroundColor = "red";
            likeBtns[i].style.backgroundColor = "";
            if (likedMovies.includes(title)){
                // film moet uit likedMovies gaan maar blijft er nu nog staan.
            }
        });
    }
    updateLikedList();
}
const updateLikedList = () => {
    const likebar = document.getElementById("likebar");
    const likebarmovies = document.getElementById("likebarmovies");

    if(likedMovies.length > 0) {
        likebar.style.visibility = "visible";
    } else {
        likebar.style.visibility = "hidden";
    }

    likebarmovies.innerHTML = "";
    likedMovies.forEach((movie) => {
        const div = document.createElement("div");
        div.textContent = movie;
        likebarmovies.appendChild(div);
    });
}
window.addEventListener('load', setup);