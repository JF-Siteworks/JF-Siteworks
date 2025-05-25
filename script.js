window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const show = params.get("showMessage");

  if (show === "true") {
    const message = document.getElementById("welcome-message");
    if (message) {
      message.classList.add("show");
    }
  }
});

function toggleSidebar() {
  document.getElementById("mobileSidebar").classList.toggle("active");
}
