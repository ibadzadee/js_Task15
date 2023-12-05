let bottom = document.querySelector(".bottom")

fetch('http://localhost:3000/robots')
    .then(reponse => reponse.json())
    .then(data => {
        data.forEach(element => {
            bottom.innerHTML += `
        <div class="card">
        <img src="${element.image}" alt="">
            <div class="bottom">
                <h5>${element.name}</h5>
                <p>${element.description}</p>
                <button><a href = "./details.html?id=${element.id}">VIEW DETAILS </a></button>
            </div>
        </div> 
        `
        })
    })