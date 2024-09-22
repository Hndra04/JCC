// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu diklik
document.querySelector("#menu-icon").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan menu
const menuicon = document.querySelector("#menu-icon");
document.addEventListener("click", function (e) {
  if (!menuicon.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function validateData() {
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const detail = document.getElementById("detail").value;
  const phone = document.getElementById("phone");
  const mail = document.getElementById("mail");
  const agreement = document.getElementById("agreement");

  console.log(username);
  if (username.length < 5) {
    alert("Username must have atleast 5 character long");
  } else if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com");
  } else if (number.length < 10) {
    alert("Your phone number is not valid");
  } else if (detail.length < 5) {
    alert("Detail must have atleast 5 character length");
  } else if (!phone.checked && !mail.checked) {
    alert("You must at least choose 1 preferred contact method");
  } else if (!agreement.checked) {
    alert("You must accept our terms and condition");
  } else window.location.href = "contactus.html";
}
