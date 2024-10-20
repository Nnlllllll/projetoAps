function toggleOverlay() {
    var button = document.querySelector('button');
    var overlay = document.getElementById("overlay");

    if (overlay.style.display === "block") {
        overlay.style.display = "none";
    } else {
        overlay.style.display = "block";
        // Posição do overlay em relação ao botão
        var rect = button.getBoundingClientRect();
        overlay.style.top = (rect.top + window.scrollY) + "px";
        overlay.style.left = (rect.left + window.scrollX) + "px";
    }
}