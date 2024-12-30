// Loading animation dots
function updateLoadingDots() {
    const loadingText = document.querySelector("#loading-text");
    if (!loadingText) return;

    const text = loadingText.innerHTML;
    const baseText = text.split("...")[0];
    const dots = text.split("...")[1] || "";

    if (dots.length >= 3) {
        loadingText.innerHTML = baseText + ".";
    } else {
        loadingText.innerHTML = baseText + dots + ".";
    }
}

// Start the loading animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Start the loading dots animation
    setInterval(updateLoadingDots, 500);

    // Add fade-in animation to the Toyota logo
    const toyotaLogo = document.querySelector("#toyota-logo");
    if (toyotaLogo) {
        toyotaLogo.style.opacity = "0";
        setTimeout(() => {
            toyotaLogo.style.transition = "opacity 1s ease-in";
            toyotaLogo.style.opacity = "1";
        }, 100);
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const canvas = document.querySelector("#unity-canvas");
    if (canvas) {
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
    }
}); 
