const toastBox = document.getElementById("toastBox");
const successBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const invalidBtn = document.getElementById("invalid");
const successMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg =
  '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
const invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("Invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}

successBtn.addEventListener("click", () => {
  showToast(successMsg);
});

errorBtn.addEventListener("click", () => {
  showToast(errorMsg);
});

invalidBtn.addEventListener("click", () => {
  showToast(invalidMsg);
});
