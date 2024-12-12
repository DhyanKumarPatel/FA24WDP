# Welcome to the blog website!

## Blog.com

### Treanding Topics

![Trending Topics!](./public/images/Readme%20images/Screenshot%202024-10-30%20053730.png "Trending topics page")

### ERD Diagram

![ERD!](./public/images/Readme%20images/Assignment3_Dhyankumar_Patel_ER-Model.drawio.png "ERD diagram")

### Relation Diagram

![Relation!](./public/images/Readme%20images/Assignment-4(Relation).pdf.drawio.png "Relation of ERD")


" Share your ideas, Start Blogging today "

# DATABASE

Table 1: User

The user table holds all the attributes that are required to know about a user for an effective blog website. The table has "user_id," which is a primary key; attributes like "username, password, firstname, and lastname" cannot be null as users are required to fill these areas to publish their work and comments, as other user's can identify them through these attributes. Email, phone number, and gender give additional information about the author/user.

![user!](./public/images/Readme%20images/Database%20images/user.png "USER TABLE")

TABLE 2: Blog

The blog table is used to give details about the individual blogs posted on the website. Each blog will have a "blog_id," which is the primary key in this case. "blog_title," which cannot be null. Other attributes like category, shares, agree/disagree give additional information about the individual blog. Here, user_id is a foreign key, which helps to relate the blog with its author/user.

![Blog!](./public/images/Readme%20images/Database%20images/blog.png "Blog Table")

Table 3: Blog Reference

The blog reference table holds a multi-valued attribute, i.e., reference. Whenever an author is writing a blog/article, they refer various writings from different articles/blogs; these attributes hold all the link's or names that the author refers to in the given blog. This is like giving credit to original authors and showing the individuality/uniqueness in the given blog.

![Blog Reference!](./public/images/Readme%20images/Database%20images/BR.png "Blog Reference Table")

Table 4:  Comment

Whenever a blog is displayed, another user wants to share their view about the blog. Comment is the best way to express. Here, in the comment table, comment_id is a primary key and user_id, reviewID, is a foreign key. Content is text.

![Comment!](./public/images/Readme%20images/Database%20images/comment.png "Comment")

Table 5: Comment Reaction

Comment reaction has "comment_id" as a foreign key, as it shows to which comment is reaction shown. Reactions can be emoji's.

![Comment Reaction!](./public/images/Readme%20images/Database%20images/CR.png "Comment Reaction Table")

Table 6: Review

In the review table, "reviewID" is the primary key as it shows all the individual reviews. It also has content, likes, ratings, and a blog_id. The user_id shows the result of the review to the user and the blog.

![Review!](./public/images/Readme%20images/Database%20images/review.png "Review Table")

All the created Tables.

![Table!](./public/images/Readme%20images/Database%20images/tables.png "Table")