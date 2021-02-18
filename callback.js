// create array of objects for posts
// create array of objects for posts
const posts = [
    { title:"Post One", body: "This is Post One" },
    { title:"Post Two", body: "This is Post Two" }
]

// create getPosts function to show posts on html page
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

// create function to create new post
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1.5000);
}
// call function with callback
createPost({ title:"Post Three", body: "This is Post Three" } , getPosts);