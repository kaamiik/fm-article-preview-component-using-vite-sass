const shareButton = document.querySelector(".share__button");
const sharePopover = document.querySelector(".share__popover");

function closeSharePopover() {
  shareButton.setAttribute("aria-expanded", "false");
}
function openSharePopover() {
  shareButton.setAttribute("aria-expanded", "true");
}

shareButton.addEventListener("click", function () {
  if (shareButton.getAttribute("aria-expanded") === "false") {
    openSharePopover();
  } else {
    closeSharePopover();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSharePopover();
  }
});

// Close sharePopover when clicking outside of it
document.addEventListener("click", function (event) {
  if (event.target !== shareButton && event.target !== sharePopover) {
    closeSharePopover();
  }
});
