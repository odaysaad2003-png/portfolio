
const fff = document.getElementById("contactForm");



fff.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(fff);

  const response = await fetch("contact.php", {
    method: "POST",
    body: formData
  });

  const data = await response.json();
console.log(data);
  if (data.status === "success") {
    showMessage(data.message, "success");
    fff.reset();
  } else {
    showMessage(data.message, "error");
  }
});

function showMessage(msg, type) {
  let box = document.getElementById("msgBox");

  if (!box) {
    box = document.createElement("div");
    box.id = "msgBox";
    box.style.marginTop = "15px";
    box.style.padding = "10px";
    box.style.borderRadius = "8px";
    fff.appendChild(box);
  }

  box.textContent = msg;

  if (type === "success") {
    box.style.background = "#10b981";
    box.style.color = "white";
  } else {
    box.style.background = "#ef4444";
    box.style.color = "white";
  }
}









const shar = document.getElementById("share")



shar.addEventListener("click",()=>{
  document.querySelector(".share-box").classList.toggle("activ")
})