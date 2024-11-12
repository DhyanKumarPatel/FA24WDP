# Welcome to the blog website!

## Blog.com

### Treanding Topics

![Trending Topics!](./images/Readme%20images/Screenshot%202024-10-30%20053730.png "Trending topics page")

### ERD Diagram

![ERD!](./images/Readme%20images/Assignment3_Dhyankumar_Patel_ER-Model.drawio.png "ERD diagram")

### Relation Diagram

![Relation!](./images/Readme%20images/Assignment-4(Relation).pdf.drawio.png "Relation of ERD")


" Share your ideas, Start Blogging today "

# DATABASE

Table 1: User

The user table holds all the attribute that are required to know aout a user for a effective blog website. The table has "user_id" which is a primary key, attributes like "username","password","firstname","lastname" cannot be null as user's are required to fill this areas to publish their work and comments, as others can identify them through this attibutes. Email, phonenumber, gender gives additional information about the author/user.

![user!](./images/Readme%20images/Database%20images/user.png "USER TABLE")

TABLE 2: Blog

The blog table is used to give details about the individual blogs posted on the website. Each blog will have a "blog_id", which is primary key in this case. "blog_title" which cannot be null. Other attributes like category, shares, agree/disagree gives additional information of the individual blog. Here, user_id is a foreign key which helps to relate blog with it's author/user.

![Blog!](./images/Readme%20images/Database%20images/blog.png "Blog Table")

Table 3: Blog Reference

Blog Reference table hold's a multi-valued attribute i.e reference. Whenever, an author is writing a blog/article, they refer various writings from different article/blog, this attributes hold all the link's or name that author refered to write given blog. This is like giving credit to original authors and show casing the indviduality/uniqueness in the given blog.

![Blog Reference!](./images/Readme%20images/Assignment-4(Relation).pdf.drawio.png "Blog Reference Table")

Table 4:  Comment

Whenever, a blog is displayed, other user wants to share their view about the blogs. Comment is best way to expess. Here, in comment table comment_id is a primary key and user_id, reviewID as foreign key. content is TEXT.

![Comment!](./images/Readme%20images/Database%20images/comment.png "Comment")

Table 5: Comment Reaction

Comment reaction has "comment_id" as a foreign key, as it shows to which comment is reaction shown. Reaction can be emoji's.

![Comment Reaction!](./images/Readme%20images/Database%20images/CR.png "Comment Reaction Table")

Table 6: Review

In review table "reviewID" is primary key as it shows all the individual reviews. It also has content, likes, rating and blog_id, user_id show the realtion of the review to the user and the blog.

![Review!](./images/Readme%20images/Database%20images/review.png "Review Table")

![Table!](./images/Readme%20images/Database%20images/tables.png "Table")