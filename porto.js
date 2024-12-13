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
