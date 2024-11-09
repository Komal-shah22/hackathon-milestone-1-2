
document.addEventListener("DOMContentLoaded", () => {
    const openResumeBtn = document.getElementById("openResumeBtn");

    if (openResumeBtn) {
        openResumeBtn.addEventListener("click", () => {
            window.open("resume.html", "_blank");
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle") as HTMLElement;
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    });
    const toggleButton = document.getElementById("toggle-skills-button") as HTMLButtonElement;
    const skillsContent = document.getElementById("skills-content") as HTMLElement;

    toggleButton.addEventListener("click", () => {
        skillsContent.classList.toggle("hidden");
        toggleButton.textContent = skillsContent.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle") as HTMLElement;
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
        themeToggle.classList.add("rotate-animation");
        setTimeout(() => themeToggle.classList.remove("rotate-animation"), 500);  // For smooth rotation
    });

    const toggleButton = document.getElementById("toggle-skills-button") as HTMLButtonElement;
    const skillsContent = document.getElementById("skills-content") as HTMLElement;

    toggleButton.addEventListener("click", () => {
        skillsContent.classList.toggle("hidden");
        toggleButton.textContent = skillsContent.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
    });
});

