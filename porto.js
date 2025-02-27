document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillButton = document.getElementById("toggle-skill");
    const skillsList = document.getElementById("skills");
    const certificatesList = document.getElementById("certificates");

    let isSkillsVisible = false;

    toggleSkillButton.addEventListener("click", () => {
        isSkillsVisible = !isSkillsVisible;

        if (isSkillsVisible) {
            skillsList.style.display = "grid";  
            certificatesList.style.display = "none"; 
            toggleSkillButton.textContent = "Show Certificates";
        } else {
            skillsList.style.display = "none"; 
            certificatesList.style.display = "grid"; 
            toggleSkillButton.textContent = "Show Skills";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
        dropdownMenu.style.display = "none";
    });
});
