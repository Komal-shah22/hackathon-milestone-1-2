document.addEventListener("DOMContentLoaded", function () {
    var openResumeBtn = document.getElementById("openResumeBtn");
    if (openResumeBtn) {
        openResumeBtn.addEventListener("click", function () {
            window.open("resume.html", "_blank");
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var themeToggle = document.querySelector(".theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    });
    var toggleButton = document.getElementById("toggle-skills-button");
    var skillsContent = document.getElementById("skills-content");
    toggleButton.addEventListener("click", function () {
        skillsContent.classList.toggle("hidden");
        toggleButton.textContent = skillsContent.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
    });
});
