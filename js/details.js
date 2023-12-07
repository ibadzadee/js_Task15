let id = new URLSearchParams(window.location.search).get("id");

let element = document.querySelector(".element")

fetch(`http://localhost:3000/robots/${id}`)
    .then(reponse => reponse.json())
    .then(data => {
        element.innerHTML += `
        <div class="card cardDetails">
        <img src="${data.image}" alt="">
            <div class="bottom">
                <h5>${data.name}</h5>
                <p>${data.description}</p>
                <button><a href = "./details.html?id=${data.id}">VIEW DETAILS </a></button>
            </div>
        </div> 
        `
})
