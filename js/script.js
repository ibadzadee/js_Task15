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

let nav = document.querySelector("nav")
window.addEventListener("scroll" , ()=>{
    if(window.scrollY >100){
        nav.style.background = "#8a90ff"
        nav.style.opacity = ".9"
        nav.style.padding = "10px 0px"
    }
    else{
        nav.style.background = ""
        nav.style.opacity = ""
        nav.style.padding = "20px 0px"
    }
})