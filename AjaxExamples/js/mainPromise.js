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

let allBtn = document.getElementById('myButton');
let Btn10 = document.getElementById('');


// let p = new Promise(function(resolve, reject)){
// 	setTimeout(function(){
// 		resolve('Done!');
// 	}, 1000);
// });
//
//
// console.log('Me first');
