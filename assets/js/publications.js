document.addEventListener("click", function (event) {
  const button = event.target.closest(".bibtex-toggle");
  if (!button) return;

  const panel = document.getElementById(button.getAttribute("aria-controls"));
  if (!panel) return;

  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  panel.hidden = expanded;
});
