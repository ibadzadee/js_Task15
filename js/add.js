const form = document.querySelector(".form")
const formFile = document.querySelector(".formFile")
const imageInp = document.querySelector("#img")
const nameInp = document.querySelector("#name")
const categoryInp = document.querySelector("#category")
const submit = document.querySelector("#submit")

formFile.addEventListener("submit", function (event) {
    event.preventDefault()
    let obj = {}
    let src = imageInp.files[0]
    const reader = new FileReader()
    reader.onload = function (e) {
        obj = {
            image: e.target.result,
            name: nameInp.value,
            description: categoryInp.value
        }
        axios.post("http://localhost:3000/robots", obj)
        .then(res =>{
            window.location="../index.html"
        })  
    }
    reader.readAsDataURL(src)
})

let nav = document.querySelector("nav")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.style.opacity = ".9"
        nav.style.padding = "10px 0px"
    }
    else {
        nav.style.opacity = ""
        nav.style.padding = "20px 0px"
    }
})


// // ---mobile nav----
// const menu = document.querySelector("nav #menu")
// const mobileNav = document.querySelector("#mobile-nav")
// const mobileNavBody = document.querySelector("#mobile-nav-body")
// const exit = document.querySelector(".exit")

// menu.addEventListener("click", () => {
//     mobileNav.style.display = "block"
//     mobileNavBody.style.display = "block"
//     exit.style.display = "block"
// })

// exit.addEventListener("click", () => {
//     mobileNav.style.display = ""
//     mobileNavBody.style.display = ""
//     exit.style.display = ""
// })
// mobileNavBody.addEventListener("click", () => {
//     mobileNav.style.display = ""
//     mobileNavBody.style.display = ""
//     exit.style.display = ""
// })