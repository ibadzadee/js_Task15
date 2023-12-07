let bottom = document.querySelector(".bottom")

let page = 4
let loadBtn = document.querySelector("#loadMore")
function showData() {
    fetch('http://localhost:3000/robots')
        .then(reponse => reponse.json())
        .then(data => {
            data.slice(page - 4, page).forEach(element => {
                bottom.innerHTML += `
            <div class="card">
            <img src="${element.image}" alt="">
                <div class="bottom">
                    <h5>${element.name}</h5>
                    <p>${element.description}</p>
                    <button><a href = "./details.html?id=${element.id}">VIEW DETAILS </a></button>
                    <button onclick="deleteRobot(${element.id})">DELETE</button>
                    <button onclick="deleteRobot(${element.id})">UpDate</button>
    
                </div>
            </div> 
            `
            })
        })
}
showData()
loadMore.addEventListener("click", () => {
    page += 4
    showData()
})

function deleteRobot(id) {
    // console.log(id);
    axios.delete(`http://localhost:3000/robots/${id}`)
    window.location.reload()
}



let nav = document.querySelector("nav")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.style.background = "#8a90ff"
        nav.style.opacity = ".9"
        nav.style.padding = "10px 0px"
    }
    else {
        nav.style.background = ""
        nav.style.opacity = ""
        nav.style.padding = "20px 0px"
    }
})

// ---mobile-nav---
const menu = document.querySelector("nav #menu")
const mobileNav = document.querySelector("#mobile-nav")
const mobileNavBody = document.querySelector("#mobile-nav-body")
const exit = document.querySelector(".exit")

menu.addEventListener("click", () => {
    mobileNav.style.display = "block"
    mobileNavBody.style.display = "block"
    exit.style.display = "block"
})

exit.addEventListener("click", () => {
    mobileNav.style.display = ""
    mobileNavBody.style.display = ""
    exit.style.display = ""
})
mobileNavBody.addEventListener("click", () => {
    mobileNav.style.display = ""
    mobileNavBody.style.display = ""
    exit.style.display = ""
})


// ------- from end to top button ------

let topBtn = document.querySelector('#top-button')

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        topBtn.style.display = "block"
    }
    else {
        topBtn.style.display = ""
    }
})


topBtn.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});