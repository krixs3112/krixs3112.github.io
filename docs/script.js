document.addEventListener("DOMContentLoaded", () => {
  const yearTarget = document.getElementById("currentYear");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear().toString();
  }

  const internalLinks = Array.from(
    document.querySelectorAll('a[href^="#"]')
  ).filter((link) => link.getAttribute("href")?.length > 1);

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href")?.substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
