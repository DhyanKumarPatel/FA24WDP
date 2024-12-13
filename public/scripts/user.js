

let loginForm = document.getElementById("loginForm")
if(loginForm) loginForm.addEventListener('submit', login)

function login(e) {
    e.preventDefault()
  
    const user = {
      username: document.getElementById("username").value,
      password: document.getElementById("pswd").value
    }
  
    fetchData('/user/login', user, "POST"
      .then(data => {
        if(!data.message) {
          window.location.href = "index.html"
        }
      })

      .catch(err => {
        let errorSection = document.querySelector("#loginForm .error")
        erroeSection.innerText = err.message
      })
    )

    console.log(user)
  }  

  async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType,
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
  });
  if(response.ok){
    return await response.json();
  } else {
    throw await response.json();
  }
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

  fetchData('/user/register', user, "POST")
    .then(data => {
      if(!data.message) {
        setCurrentUser(data)
        window.location.href = "index.html"
      }
    })
    
    .catch(err => {
      let errorSection = document.querySelector("#loginForm .error")
      errorSection.innerText=err.message
    })
  
  console.log(user)
}


function setCurrentUser(user){
  localStorage.setItem('user', JSON.stringify(user));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

function removeCurrentUser() {
  localStorage.remove('user');
}