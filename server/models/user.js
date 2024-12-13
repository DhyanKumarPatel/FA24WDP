const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS user (
     user_id INT PRIMARY KEY AUTO_INCREMENT,
     username VARCHAR(255) NOT NULL,
     password VARCHAR(255) NOT NULL,
     firstname VARCHAR(255) NOT NULL,
     middlename VARCHAR(255),
     lastname VARCHAR(255) NOT NULL,
     gender VARCHAR(10),
     phoneNumber VARCHAR(15),
     email VARCHAR(100)
     );`

  await con.query(sql);  
}

createTable()

// CRUD functions will go here 
//R for READ -- get all users
async function getAllUsers() {
  let sql = `SELECT * FROM user;`
  return await con.query(sql)
}

async function userExists(username) {
  let sql = `SELECT * FROM user 
    WHERE Username = "${username}"
  `
  return await con.query(sql) 
}

async function emailExists(email) {
  let sql = `SELECT * FROM user 
    WHERE Email = "${email}"
  `
  return await con.query(sql) 
}

let user = {
  Username: "cathy1",
  Email: "cc@fakemail.com",
  Password: "icecream"
}
// register(user)
// login(user)

// CREATE in CRUD
async function register(user) {
  let cUser = await userExists(user.username)
  if(cUser.length > 0) throw Error("Username Already in Use!")

  let email = await emailExists(user.email)
  if(email.length > 0) throw Error("Account with Email already in use")

  let sql = `
    INSERT INTO User(user_id, username, password, email, firstname, lastname)
    VALUES(${user.user_id}, "${user.username}", "${user.password}", "${user.email}", "${user.firstname}", "${user.lastname}")
  `
  await con.query(sql)
  const u = await userExists(user.username)
  console.log(u)
  return u[0]
}

// READ in CRUD
async function login(user) {
  let currentUser = await userExists(user.username)
  if(!currentUser[0]) throw Error("Username does not exist!")
  if(user.password !== currentUser[0].password) throw Error("Password does not match!")

  return currentUser[0]
}

// UPDATE in CRUD
async function editUsername(user) {
  let sql = `
    UPDATE User SET
    Username = "${user.username}"
    WHERE UserID = ${user.user_id}
  `
  await con.query(sql)

  let updatedUser = await userExists(user.username)
  return updatedUser[0]
}

// DELETE in CRUD
async function deleteAccount(user) {
  let sql = `
    DELETE FROM User
    WHERE UserID = ${user.user_id}
  `
  await con.query(sql)
}

module.exports = { getAllUsers, login, register, editUsername, deleteAccount }