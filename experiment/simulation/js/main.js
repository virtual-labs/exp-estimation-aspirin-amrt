//Your JavaScript goes in here


 // Get the base path dynamically
  const currentUrl = window.location.href;
  const basePath = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  const swfPath = basePath + "/simulation/flash/simulation/index.swf";


function copyLink() {
  const text = document.getElementById("copyText").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const tooltip = document.getElementById("tooltip");
    tooltip.classList.add("show");
    setTimeout(() => {
      tooltip.classList.remove("show");
    }, 1500);
  });
}
function toggleAccordion(header) {
  const item = header.parentElement;
  item.classList.toggle("active");
  const icon = header.textContent.trim().startsWith("▶") ? "▼" : "▶";
  header.textContent = header.textContent.replace(/^(▶|▼)/, icon);
}
