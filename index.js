const addMoreEl = document.getElementById("addmore");
const inputContainerEl = document.getElementById("inputContainer");
const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const hiddenIndicatorEl = document.getElementById("hiddenIndicator");
const barEl = document.querySelector(".loading-bar-front");
const submitEl = document.getElementById("submitload");
const submit2El = document.getElementById("submitForm2");

var counter = 6;

addMoreEl.addEventListener("click", function (event) {
  event.preventDefault();
  var inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.id = "yourname";
  inputElement.name = "yourname";
  inputElement.placeholder = "Enter Name " + counter;
  var lineBreak = document.createElement("br");
  inputContainerEl.appendChild(inputElement);
  inputContainerEl.appendChild(lineBreak);
  counter++;
});

menuEl.addEventListener("click", () => {
  socialListsEl.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
  hiddenIndicatorEl.classList.toggle("hide");
  if (socialListsEl.classList.contains("hide")) {
    document.getElementById("hiddenImage").classList.remove("hide");
  } else {
    document.getElementById("hiddenImage").classList.add("hide");
  }
});

submitEl.addEventListener("click", (event) => {
  event.preventDefault();
  //console.log("load");
  barEl.style.width = 40 + "%";
});
submit2El.addEventListener("click", (event) => {
  event.preventDefault();
});
//below comment is to make load forms but the problem is arriving at going to third form(last form)
/*const formContainer = document.getElementById("formContainer");
function loadForm(formFile) {
  fetch(formFile)
    .then((response) => response.text())
    .then((data) => {
      formContainer.innerHTML = data; 

     
      newForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        loadForm("lastForm.html");
      });
    })
    .catch((error) => {
      console.error("Error loading form:", error);
    });
}*/
document
  .getElementById("submitload")
  .addEventListener("click", function (event) {
    event.preventDefault();
    submitForm1();
  });
document
  .getElementById("submitForm2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    barEl.style.width = 70 + "%";
    submitForm2();
  });
document.getElementById("form3").addEventListener("submit", function (event) {
  event.preventDefault();
});

function submitForm1() {
  var checkName = document.getElementById("yourname");
  var checkNameIn = checkName.value;
  if (checkNameIn !== "") {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "block";
  } else {
    checkName.style.borderColor = "red";
    alert("Please enter a name");
  }
}

function submitForm2() {
  var dateInForm2 = document.getElementById("sdate");
  var dateform2 = dateInForm2.value;
  var datePattern = /^\d{4}-\d{2}-\d{2}$/;

  var email2 = document.getElementById("email2form");
  var email2c = email2.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email2c) && datePattern.test(dateform2)) {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "block";
  } else if (!datePattern.test(dateform2)) {
    dateInForm2.style.borderColor = "red";
    alert("Please enter a valid date in YYYY-MM-DD format. ");
  } else if (!emailPattern.test(email2c)) {
    email2.style.borderColor = "red";
    alert("Please enter a valid email address! ");
  }
}

function handleSubmit3() {
  var button = document.getElementById("buttonform3");
  barEl.style.width = 100 + "%";
  button.value = "Submitted";
  button.disabled = true;
}
function goToPreviousForm1(event) {
  event.preventDefault();
  barEl.style.width = 0 + "%";

  var currentForm = document.getElementById("form2");
  currentForm.style.display = "none";

  var previousForm = document.getElementById("form1");
  previousForm.style.display = "block";
}
function goToPreviousForm2() {
  barEl.style.width = 40 + "%";

  var currentForm = document.getElementById("form3");
  currentForm.style.display = "none";

  var previousForm = document.getElementById("form2");
  previousForm.style.display = "block";
}

document
  .getElementById("formContainer")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
document.getElementById("form2").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
document.getElementById("form3").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
function handleSubmit(event) {
  event.preventDefault();

  //var form = document.getElementById("myForm");
  var textInput = document.getElementById("textInput");

  var email = textInput.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    textInput.value = "Signed up";
    textInput.style.cssText =
      "color: green; font-size: 16px; font-weight: bold;  text-align : center; font-family : cursive;";
    textInput.style.border = "none";
    textInput.disabled = true;
    var arrowIcon = document.querySelector(".arrow-icon");
    arrowIcon.style.display = "none";
  } else {
    textInput.style.borderColor = "red";
    alert("Please enter a valid email address!");
  }

  // Optionally, you can submit the form here if needed
  // form.submit();
}

document.querySelector(".arrow-icon").addEventListener("click", handleSubmit);
