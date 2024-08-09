document.getElementById("editLocationBtn").addEventListener("click", function() {
    document.getElementById("editLocationPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("closePopupBtn").addEventListener("click", function() {
    document.getElementById("editLocationPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});
