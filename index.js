document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(data => {
        data.forEach(film => {
            const left_sideContainer = document.querySelector(`left_side`)
            const movieDiv = document.createElement(`div`)
            movieDiv.className = `movieDiv`
            movieDiv.innerHTML = `    
            <p>title: ${film.title}</p>
            `
            left_side.appendChild(movieDiv)
            
        })
    })
}) 
fetch("http://localhost:3000/films")
.then(res => res.json())
.then(data => {
    data.forEach(film => {
        const right_sideContainer = document.querySelector(`right_side`)
        const movieDiv = document.createElement(`div`)
        movieDiv.className = `movieDiv`
        movieDiv.innerHTML = `
        <img id = "poster"poster: src = "${film.poster}"/>
        <p id = "title">title:${film.title}</p>
        <p id = "runtime">runtime:${film.runtime}</p>
        <p id = "capacity">capacity:${film.capacity}</p>
        <p id = "showtime">showtime:${film.showtime}</p>
        <p id = "ticket_sold">ticket_sold = ${film.tickets_sold}</p>
        <p id = "Av_tickets"> Available_tickets = ${film.capacity} - ${film.tickets_sold}</p>
        <button id = "buy_btn">Buy_Ticket</button>
        <p id = "description">description:${film.description}</p>
        
        `
        right_side.appendChild(movieDiv)
    })
})