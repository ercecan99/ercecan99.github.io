const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const name2Input = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
});



function name2DisplayCheck() {
  // check whether the 'name2' data item is stored in web Storage
  if(localStorage.getItem('name2')) {
    // If it is, display personalized greeting
    let name2 = localStorage.getItem('name2');
    h1.textContent = 'Welcome, ' + name2;
    personalGreeting.textContent = 'Welcome to our website, ' + name2 + '! We hope you have fun while you are here.';
    // hide the 'remember' part of the form and show the 'forget' part
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    // if not, display generic greeting
    h1.textContent = 'Welcome to our website ';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    // hide the 'forget' part of the form and show the 'remember' part
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}


submitBtn.addEventListener('click', function() {
  // store the entered name2 in web storage
  localStorage.setItem('name2', name2Input.value);
  // run name2DisplayCheck() to sort out displaying the
  // personalized greetings and updating the form display
  name2DisplayCheck();
});

forgetBtn.addEventListener('click', function() {
  // Remove the stored name from web storage
  localStorage.removeItem('name2');
  // run nameDisplayCheck() to sort out displaying the
  // generic greeting again and updating the form display
  name2DisplayCheck();
  });


document.body.onload = name2DisplayCheck;