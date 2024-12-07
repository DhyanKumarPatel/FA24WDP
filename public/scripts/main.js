let feedbackForm = document.getElementById("feedback")
if(feedback) feedback.addEventListener('submit', feed)

    function feed(e) {
        e.preventDefault()

        const user = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            rating : document.getElementById("rating").value,
            comments : document.getElementById("comments").value
        }

        console.log(user)
    }