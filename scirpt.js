// Image gallery main image update
function updateMainImage(thumbnail) {
    const mainImage = document.getElementById("main-product-image");
    mainImage.src = thumbnail.src;
  }
  
  // Modal functionality
  document.getElementById("size-chart-btn").onclick = function() {
    document.getElementById("size-chart-modal").style.display = "block";
  };
  
  document.querySelector(".close").onclick = function() {
    document.getElementById("size-chart-modal").style.display = "none";
  };
  
  window.onclick = function(event) {
    const modal = document.getElementById("size-chart-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Tabs functionality
  function openTab(tabId) {
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.style.display = "none");
  
    const tab = document.getElementById(tabId);
    tab.style.display = "block";
  }