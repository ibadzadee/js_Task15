const form = document.querySelector(".form")
const imageInp = document.querySelector("#image")
const nameInp = document.querySelector("#name")
const categoryInp = document.querySelector("#category")
const submit = document.querySelector("#submit")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    let obj = {}
    let src = imageInp.files[0]
    const reader = new FileReader()
    read.onload = function (e) {
        obj = {
            image: e.target.result,
            name: nameInp.value,
            category: categoryInp.value
        }
        axios.post("http://localhost:3000/robots", obj)
    }
    reader.readAsDataURL(src)
    window.location = "../js/index.html"
})

