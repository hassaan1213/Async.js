// create array of objects for posts
const posts = [
    { title: "Post One", body: "This is Post One" },
    { title: "Post Two", body: "This is Post Two" }
]

// create getPosts function to show posts on html page
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

// create function with promise
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            // creat flag for error / set it to true to get an error
            const error = false;

            // if no error it resolve, if error it reject
            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}
// call function with promise
createPost({
    title: "Post Three",
    body: "This is Post Three"
}).then(getPosts)
  .catch(err => console.log(err))