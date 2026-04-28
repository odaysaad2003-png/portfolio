const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter valid email!");
    return;
  }

  alert("Message sent successfully 🚀");

  form.reset();
});








const shar = document.getElementById("share")



shar.addEventListener("click",()=>{
  document.querySelector(".share-box").classList.toggle("activ")
})