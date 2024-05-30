// Nav bar constants
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector('.navbar__menu');
const cards = document.querySelector(".container2");
const statistics = document.querySelector(".call");

// displaying menu for mobile
const mobMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobMenu);

//Dark mode
let themeButton = document.querySelector("#theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  console.log("toggled")
}

themeButton.addEventListener("click", toggleDarkMode);

//Form

// Add your query for the sign now button here
//let count = 3;
const counter = document.getElementById("counter");

const signNowButton = document.getElementById("sign-now-button");
const form = document.getElementById("sign-petition");
const elements = form.elements;
const signature = document.querySelector(".signatures");
const email = document.getElementById('email');

const addSignature = (person) => {
  // Write your code to manipulate the DOM here
  const form = document.getElementById("sign-petition");
  const elements = form.elements;

  signature.innerHTML += "<p>🖊️ " + person.name + " from " + person.hometown + " supports this.</p>"

  // count = count + 1;
  // // counter.remove()
  // //document.getElementById('counter').innerText = count;
  // signature.innerHTML += "<p>🖊️  " + count + " people have signed this petition and support this cause.</p>"
}

var petitionInputs = document.getElementById("sign-petition").elements;

const validateForm = () => {
  person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  let containsErrors = false;

  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!email.value.includes('@')) {
    email.classList.add('error');
    containsErrors = true;
  }
  else {
    email.classList.remove('error');
  }
  // TODO: Validate the value of each input
  if (containsErrors == false) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
    toggleModal(person);
  }
}

signNowButton.addEventListener('click', validateForm);

//MODAL TOGGLE
let scaleFactor = 1;
modalImage = document.getElementById("thanks-img");
modal = document.getElementById("thanks-modal")
modalContent = document.getElementById("thanks-modal-content")

const toggleModal = (person) => {
  intervalId = setInterval(scaleImage, 500);
  modal.style.display = "flex";
  modalContent.innerHTML = "Thank you so much, " + person.name + " from " + person.hometown + " for signing the petition! You're the best!";
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
}

const scaleImage = () => {
  if (scaleFactor == 1) {
    scaleFactor = 0.8;
  }
  else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}


//Animation
let animation = {
  revealDistance: 50,
  initialOpactiy: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");

console.log(revealableContainers.length)
const revealItems = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      console.log("start");
      revealableContainers[i].classList.add("active");
    }
    else {
      console.log("end");
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', revealItems);
