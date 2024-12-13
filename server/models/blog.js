const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS blog(
     blog_id INT PRIMARY KEY,
     blog_title VARCHAR(255) NOT NULL,
     category VARCHAR(50),
     shares INT,
     agree_disagree VARCHAR(15),
     user_id INT,
     FOREIGN KEY (user_id) REFERENCES user(user_id)
     );`

  await con.query(sql);  
}

createTable()

async function getAllBlogs() {
    let sql = `SELECT * FROM blog;`
    return await con.query(sql)
  }

  async function editBlogTitle(blog) {
    let sql = `
      UPDATE blog SET
      blog_title = "${blog.blog_title}"
      WHERE blog_id = ${blog.blog_id}
    `
    await con.query(sql)
  
  }

  async function editBlogCategory(blog) {
    let sql = `
      UPDATE blog SET
      category = "${blog.category}"
      WHERE blog_id = ${blog.blog_id}
    `
    await con.query(sql)
  
  }

  async function deleteBlog(blog) {
    let sql = `
      DELETE FROM blog
      WHERE blog_id = ${blog.blog_id}
    `
    await con.query(sql)
  }

  module.exports = { getAllBlogs, editBlogTitle, editBlogCategory, deleteBlog }