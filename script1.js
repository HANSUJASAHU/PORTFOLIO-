const firebaseConfig = {
  apiKey: "AIzaSyCxF0Kz605j_WXrFk7AHXkZVc-0WAfEmtA",
  authDomain: "hansuja-sahu.firebaseapp.com",
  databaseURL: "https://hansuja-sahu-default-rtdb.firebaseio.com",
  projectId: "hansuja-sahu",
  storageBucket: "hansuja-sahu.appspot.com",
  messagingSenderId: "807066046067",
  appId: "1:807066046067:web:551e9a392bf11915496406",
  measurementId: "G-P06DECDCCQ"
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}