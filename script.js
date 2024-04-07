const root = document.getElementById("root");
const showCodeBtn = document.getElementById("showCodeBtn");

const arrow = document.getElementById("arrow");
const addShadowBtn = document.getElementById("addShadowBtn");
const palette = document.getElementById("palette");

const blockContainer = document.getElementById("blockContainer");
const block = document.getElementById("block");
const boxMenu = document.getElementById("boxMenu");

const inputWidth = document.getElementById("boxWidth");
const inputHeight = document.getElementById("boxHeight");
const inputRadius = document.getElementById("borderRadius");

const rangeWidth = document.getElementById("boxWidthRange");
const rangeHeight = document.getElementById("boxHeightRange");
const rangeRadius = document.getElementById("borderRadiusRange");

const borderColor = document.getElementById("borderPallete");
const boxColor = document.getElementById("boxPallete");

// Color change

    // BG color
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
    // BG color end

    // Border BG
        borderColor.addEventListener("input", (event) => 
        {
            block.style.borderColor = event.target.value;
        });

        borderColor.addEventListener("mouseenter", () =>
        {
            borderColor.style.transition = "0.5s";
            borderColor.style.transform = "scale(1.2, 1.2)"
            borderColor.style.opacity = "0.95";
        });

        borderColor.addEventListener("mouseleave", () =>
        {
            borderColor.style.transition = "0.5s";
            borderColor.style.transform = "scale(1, 1)";
        });
    // Border BG end

    // Box BG
        boxColor.addEventListener("input", (event) => 
        {
            block.style.backgroundColor = event.target.value;
        });

        boxColor.addEventListener("mouseenter", () =>
        {
            boxColor.style.transition = "0.5s";
            boxColor.style.transform = "scale(1.2, 1.2)"
            boxColor.style.opacity = "0.95";
        });

        boxColor.addEventListener("mouseleave", () =>
        {
            boxColor.style.transition = "0.5s";
            boxColor.style.transform = "scale(1, 1)";
        });
    // Box BG end
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

// Buttons animation end


// Box custom

    // Box custom menu
        const createBoxMenu = (e) => 
        {
            x = e.clientX + 35;
            y = e.clientY;
            boxMenu.style.left = `${x}px`;
            boxMenu.style.top = "91px";
        }
    // Box custom menu end

    // Arrow animate
        arrow.addEventListener("click", (ev) => 
        {
            arrow.classList.toggle("arrowAnimate");
            boxMenu.classList.toggle("active");
            createBoxMenu(ev);
        });
    // Arrow animate

    // Box parameters

        // Box width
            function updateWidthInput()
            {
                rangeWidth.value = inputWidth.value;
                const widthVal = inputWidth.value || rangeWidth.value;
                block.style.width = widthVal + 'rem';
            }

            function updateWidthRange()
            {
                inputWidth.value = rangeWidth.value;
                const widthVal = inputWidth.value || rangeWidth.value;
                block.style.width = widthVal + 'rem';
            }

            inputWidth.addEventListener("input", updateWidthInput);
            rangeWidth.addEventListener("input", updateWidthRange);
        // Box width end

        // Box height
            function updateHeightInput()
            {
                rangeHeight.value = inputHeight.value
                const heightVal = inputHeight.value || rangeHeight.value;
                block.style.height = heightVal + 'rem';
            }

            function updateHeightRange()
            {
                inputHeight.value = rangeHeight.value
                const heightVal = inputHeight.value || rangeHeight.value;
                block.style.height = heightVal + 'rem';
            }

            inputHeight.addEventListener("input", updateHeightInput);
            rangeHeight.addEventListener("input", updateHeightRange);
        // Box height end

        // Box border-radius
        function updateRadiusInput()
        {
            rangeRadius.value = inputRadius.value;
            const radiusVal = inputRadius.value || rangeRadius.value;
            block.style.borderRadius = radiusVal + 'rem';
        }

        function updateRadiusRange()
        {
            inputRadius.value = rangeRadius.value;
            const radiusVal = inputRadius.value || rangeRadius.value;
            block.style.borderRadius = radiusVal + 'rem';
        }

        inputRadius.addEventListener("input", updateRadiusInput);
        rangeRadius.addEventListener("input", updateRadiusRange);
        // Box border-radius end

    // Box parameters end
// Box custom end

