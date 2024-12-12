const express = require("express")
const Blog = require("../models/blog")
const router = express.Router()

router
.get('/getBlogs', async (req, res) => {
  try {
    const blogs = await Blog.getAllBlogs()
    res.send(blogs)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.put('/blogs/title', async (req, res) => {
    try {
      let updatedBlogTitle = await Blog.editBlogTitle(req.body)
      res.send({...updatedBlogTitle})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .put('/blogs/category', async (req, res) => {
    try {
      let updatedBlogCategory = await Blog.editBlogCategory(req.body)
      res.send({...updatedBlogCategory})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/blogs/remove', async (req, res) => {
    try {
      await Blog.deleteBlog(req.body)
      res.send({success: "Blog Deleted successfully"})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  module.exports = router