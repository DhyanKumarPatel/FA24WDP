

let loginForm = document.getElementById("loginForm")
if(loginForm) loginForm.addEventListener('submit', login)

function login(e) {
    e.preventDefault()
  
    const user = {
      username: document.getElementById("username").value,
      password: document.getElementById("pswd").value
    }
  
    console.log(user)
  }  


  
let regForm = document.getElementById("regForm")
if(regForm) regForm.addEventListener('submit', register)

function register(e) {
  e.preventDefault()

  const user = {
    fname: document.getElementById("fname").value,
    mname: document.getElementById("mname").value,
    lname: document.getElementById("lname").value,
    gender: document.getElementById("gender").value,
    username: document.getElementById("username").value,
    password: document.getElementById("pswd").value
  }

  console.log(user)
}