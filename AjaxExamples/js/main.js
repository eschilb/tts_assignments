document.getElementById("comments").style.display = "none";

const ajaxCall = () => {
	//GET all posts
	fetch("https://jsonplaceholder.typicode.com/posts")
	.then(response => response.json())
	.then(json => console.log(json))
	//output is all posts
}

const ajaxCallSpecific = () => {
	//GET post id 10
	fetch("https://jsonplaceholder.typicode.com/posts/10")
  .then(response => response.json())
  .then(json => console.log(json))
	//output is post id 10
}

const ajaxCallComments = () => {
	//GET post comments
	fetch("https://jsonplaceholder.typicode.com/posts/12/comments")
  .then(response => response.json())
  .then(json => console.log(json))
}

const ajaxCallUser = () => {
	//GET post userid 2
	fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
	  .then((response) => response.json())
	  .then((json) => console.log(json))
}

// POST adds a random id to the object sent
const ajaxPostRequest = () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'clean room',
      completed: true,
      userId: 3
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

const ajaxPutRequest = () => {
	fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
      id: 12,
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

const ajaxPutTitle = () => {
	fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
      id: 12,
      title: "I'm not a robot",
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

const ajaxDeleteRequest = () =>{
	fetch('https://jsonplaceholder.typicode.com/posts/12', {
		method: 'DELETE'
	})
	.then(console.log("successfully deleted"))
}

// const render = () => {
// 	fetch('https://jsonplaceholder.typicode.com/posts')
// 	  .then((response) => response.json())
// 	  .then((json) => console.log(json))
//
// }

const render = () => {

	fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      // Traditional for loop
      var result = "";
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        result += "<p id='" + data[i].id + "'><a href='#'>" + data[i].title + "</a></p>";
				//can add body after
      }
		console.log(result);
		document.getElementById("result").innerHTML = result;
    });

}

document.getElementById("result").onclick = function() {
		document.getElementById("result").style.display = "none";
		document.getElementById("comments").style.display = "block";
}

document.getElementById("display").onclick = function() {
		document.getElementById("result").style.display = "block";
		document.getElementById("comments").style.display = "none";
}

let myButton = document.getElementById('myButton');
let specific = document.getElementById('specific');
let comments = document.getElementById('userComments');
let userPosts = document.getElementById('userPosts');
let post = document.getElementById('post');
let put = document.getElementById('put');
let updateTitle = document.getElementById('updateTitle');
let deletePost = document.getElementById('deletePost');
let display = document.getElementById('display');
//let result =
//all posts
myButton.addEventListener("click", ajaxCall);
//post10
specific.addEventListener("click", ajaxCallSpecific);
//comments
userComments.addEventListener("click", ajaxCallComments);
//posts user 12
userPosts.addEventListener("click", ajaxCallUser);
//create new post
post.addEventListener("click", ajaxPostRequest);
//put
put.addEventListener("click", ajaxPutRequest);
//PUT
updateTitle.addEventListener("click", ajaxPutTitle);
//delete
deletePost.addEventListener("click", ajaxDeleteRequest);
//render
display.addEventListener("click", render);


// let p = new Promise(function(resolve, reject)){
// 	setTimeout(function(){
// 		resolve('Done!');
// 	}, 1000);
// });
//
//
// console.log('Me first');
