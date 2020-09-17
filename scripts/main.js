
let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/react1.png'){
		myImage.setAttribute('src','images/react2.png');
	}
	else{
		myImage.setAttribute('src','images/react1.png');
	
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'wassup ' + myName;}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'wassup ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}