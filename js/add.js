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
