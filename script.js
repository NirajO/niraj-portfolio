const html = document.documentElement;

function applyTheme(theme) {
  html.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const isDark = html.classList.contains("dark");
  applyTheme(isDark ? "light" : "dark");
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("theme") || "light");
});
