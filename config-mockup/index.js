var gCurrentFlyover = null;

function showHelp(event) {
  if (!event.target.classList.contains("explore")) {
    return;
  }
  const feature = event.target.closest(".feature");
  const context = feature.querySelector(".context");
  if (gCurrentFlyover === context) {
    return;
  }
  if (gCurrentFlyover) {
    gCurrentFlyover.classList.add("hidden");
  }
  gCurrentFlyover = context;
  gCurrentFlyover.classList.remove("hidden");
}

document.body.addEventListener("click", showHelp);