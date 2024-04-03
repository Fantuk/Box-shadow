const root = document.getElementById("root");
const showCodeBtn = document.getElementById("showCodeBtn");
const arrow = document.getElementById("arrow");
const addShadowBtn = document.getElementById("addShadowBtn");
const palette = document.getElementById("palette");
const blockContainer = document.getElementById("blockContainer");
const block = document.getElementById("block");

// Color change
    palette.addEventListener("input", (event) => 
    {
        blockContainer.style.backgroundColor = event.target.value;
    });

    palette.addEventListener("mouseenter", () =>
    {
        palette.style.transition = "0.5s";
        palette.style.transform = "scale(1.2, 1.2)"
        palette.style.opacity = "0.95";
    });

    palette.addEventListener("mouseleave", () =>
    {
        palette.style.transition = "0.5s";
        palette.style.transform = "scale(1, 1)";
    });
// End color change


// Buttons animation

    // Show code button
        showCodeBtn.addEventListener("mouseenter", () =>
        {
            showCodeBtn.style.transition = "0.5s";
            showCodeBtn.style.transform = "scale(1.2, 1.2)"
            showCodeBtn.style.opacity = "0.95";
        });

        showCodeBtn.addEventListener("mouseleave", () =>
        {
            showCodeBtn.style.transition = "0.5s";
            showCodeBtn.style.transform = "scale(1, 1)";
            showCodeBtn.style.opacity = "1";
        });

        showCodeBtn.addEventListener("mousedown", () => 
        {
            showCodeBtn.style.transition = "0.1s";
            showCodeBtn.style.backgroundColor = "var(--clr5)";
        });

        showCodeBtn.addEventListener("mouseup", () => 
        {
            showCodeBtn.style.backgroundColor = "var(--clr2)";
        });
    // Show code button end

    // Add shadow button
    addShadowBtn.addEventListener("mouseenter", () =>
    {
        addShadowBtn.style.transition = "0.5s";
        addShadowBtn.style.transform = "scale(1.1, 1.1)"
        addShadowBtn.style.opacity = "0.95";
    });

    addShadowBtn.addEventListener("mouseleave", () =>
    {
        addShadowBtn.style.transition = "0.5s";
        addShadowBtn.style.transform = "scale(1, 1)";
        addShadowBtn.style.opacity = "1";
    });

    addShadowBtn.addEventListener("mousedown", () => 
    {
        addShadowBtn.style.transition = "0.1s";
        addShadowBtn.style.backgroundColor = "var(--clr5)";
    });

    addShadowBtn.addEventListener("mouseup", () => 
    {
        addShadowBtn.style.backgroundColor = "var(--clr2)";
    });
    // Add shadow button end

// Buttons animation

// Box custom

// Box custom menu

const createBoxMenu = () => {
    const BoxMenu = document.createElement("div");
    
    BoxMenu.classList.add("boxMenu");

    root.appendChild(BoxMenu);
}
// Box custom menu end

    // Arrow animate
        arrow.addEventListener("click", () => 
        {
            arrow.classList.toggle("arrowAnimate");
            createBoxMenu();
        });
    // Arrow animate

// Box custom end

