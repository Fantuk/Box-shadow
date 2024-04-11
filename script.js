const root = document.getElementById("root");
const sidebar = document.getElementById("sidebar");

const showCodeBtn = document.getElementById("showCodeBtn");
const arrow = document.getElementById("arrow");
const shadowArrow = document.getElementById("shadowArrow");
const palette = document.getElementById("palette");

const blockContainer = document.getElementById("blockContainer");
const block = document.getElementById("block");
const boxMenu = document.getElementById("boxMenu");
const shadowMenu = document.getElementById("shadowMenu");

const inputWidth = document.getElementById("boxWidth");
const inputHeight = document.getElementById("boxHeight");
const inputRadius = document.getElementById("borderRadius");

const rangeWidth = document.getElementById("boxWidthRange");
const rangeHeight = document.getElementById("boxHeightRange");
const rangeRadius = document.getElementById("borderRadiusRange");

const borderColor = document.getElementById("borderPallete");
const boxColor = document.getElementById("boxPallete");
const shadowColor = document.getElementById("shadowPallete");

const shadowX = document.getElementById("shadowX");
const shadowY = document.getElementById("shadowY");
const shadowSpread = document.getElementById("shadowSpread");
const shadowBlur = document.getElementById("shadowBlur");

const shadowXrange = document.getElementById("shadowXrange");
const shadowYrange = document.getElementById("shadowYrange");
const shadowBlurRange = document.getElementById("shadowBlurRange");
const shadowSpreadRange = document.getElementById("shadowSpreadRange");

const activeInput = document.getElementById("activeInput");
const insetInput = document.getElementById("insetInput");

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

    // Shadow color
        shadowColor.addEventListener("input", (event) => 
        {
            block.style.boxShadow = `${shadowX.value || shadowXrange.value}px
            ${shadowY.value || shadowYrange.value}px
            ${shadowBlur.value || shadowBlurRange.value}px
            ${shadowSpread.value || shadowSpreadRange.value}px
            ${event.target.value}`;
        });

        shadowColor.addEventListener("mouseenter", () =>
        {
            shadowColor.style.transition = "0.5s";
            shadowColor.style.transform = "scale(1.2, 1.2)"
            shadowColor.style.opacity = "0.95";
        });

        shadowColor.addEventListener("mouseleave", () =>
        {
            shadowColor.style.transition = "0.5s";
            shadowColor.style.transform = "scale(1, 1)";
        });
    // Shadow color end
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
            if (boxMenu.classList.contains('active')) {
                boxMenu.classList.remove('active');
                arrow.classList.remove("arrowAnimate");
              } else {
                boxMenu.classList.add('active');
                arrow.classList.add("arrowAnimate");
                if (shadowMenu.classList.contains('active')) {
                  shadowMenu.classList.remove('active');
                  shadowArrow.classList.remove("arrowAnimate");
                }
              }
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

// Shadow custom 
    // Shadow custom menu
        const createShadowMenu = (e) => 
        {
            x = e.clientX + 35;
            y = e.clientY;
            shadowMenu.style.left = x + "px";
            shadowMenu.style.top = "115px";
        }

        shadowArrow.addEventListener("click", (ev) =>
        {
            if (shadowMenu.classList.contains('active')) {
                shadowMenu.classList.remove('active');
                shadowArrow.classList.remove("arrowAnimate");
              } else {
                shadowMenu.classList.add('active');
                shadowArrow.classList.add("arrowAnimate");
                if (boxMenu.classList.contains('active')) {
                  boxMenu.classList.remove('active');
                  arrow.classList.remove("arrowAnimate");
                }
              }
            createShadowMenu(ev);
        });   
    // Shadow custom menu end

    // Shadow parameters
        // Shadow X
            function updateX()
            {
                shadowXrange.value = shadowX.value;
                const xVal = shadowX.value || shadowXrange.value;
                block.style.boxShadow = `${xVal}px ${shadowY.value}px ${shadowBlur.value}px ${shadowSpread.value}px 
                ${shadowColor.value}`;
            }

            function updateXrange()
            {
                shadowX.value = shadowXrange.value;
                const xVal = shadowX.value || shadowXrange.value;
                block.style.boxShadow = `${xVal}px ${shadowYrange.value}px ${shadowBlurRange.value}px 
                ${shadowSpreadRange.value}px ${shadowColor.value}`;
            }

            shadowX.addEventListener("input", updateX);
            shadowXrange.addEventListener("input", updateXrange);
        // Shadow X end
        
        // Shadow Y
            function updateY()
            {
                shadowYrange.value = shadowY.value;
                const yVal = shadowY.value || shadowYrange.value;
                block.style.boxShadow = `${shadowX.value}px ${yVal}px ${shadowBlur.value}px ${shadowSpread.value}px 
                ${shadowColor.value}`;
            }

            function updateYrange()
            {
                shadowY.value = shadowYrange.value;
                const yVal = shadowY.value || shadowYrange.value;
                block.style.boxShadow = `${shadowX.value}px ${yVal}px ${shadowBlurRange.value}px 
                ${shadowSpreadRange.value}px ${shadowColor.value}`;
            }

            shadowY.addEventListener("input", updateY);
            shadowYrange.addEventListener("input", updateYrange);
        // Shadow Y end

        // Shadow Blur
            function updateBlur()
            {
                shadowBlurRange.value = shadowBlur.value;
                const blurVal = shadowBlur.value || shadowBlurRange.value;
                block.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${blurVal}px ${shadowSpread.value}px 
                ${shadowColor.value}`;
            }

            function updateBlurRange()
            {
                shadowBlur.value = shadowBlurRange.value;
                const blurVal = shadowBlur.value || shadowBlurRange.value;
                block.style.boxShadow = `${shadowX.value}px ${shadowYrange.value}px ${blurVal}px 
                ${shadowSpreadRange.value}px ${shadowColor.value}`;
            }

            shadowBlur.addEventListener("input", updateBlur);
            shadowBlurRange.addEventListener("input", updateBlurRange);
        // Shadow Blur end

        // Shadow Spread
            function updateSpread()
            {
                shadowSpreadRange.value = shadowSpread.value;
                const spreadVal = shadowSpread.value || shadowSpreadRange.value;
                block.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px ${spreadVal}px 
                ${shadowColor.value}`;
            }

            function updateSpreadRange()
            {
                shadowSpread.value = shadowSpreadRange.value;
                const spreadVal = shadowSpread.value || shadowSpreadrange.value;
                block.style.boxShadow = `${shadowX.value}px ${shadowYrange.value}px ${shadowBlurRange.value}px 
                ${spreadVal}px ${shadowColor.value}`;
            }

            shadowSpread.addEventListener("input", updateSpread);
            shadowSpreadRange.addEventListener("input", updateSpreadRange);
        // Shadow Blur end
        
        // Shadow active and inset
            let isShadowEnabled = true;
            let isInset = false;

            // Функция для обновления тени
            function updateShadow() {
                if (isShadowEnabled) {
                    const inset = isInset ? 'inset ' : '';
                    block.style.boxShadow = `${inset}${shadowX.value || shadowXrange.value}px 
                    ${shadowY.value || shadowYrange.value}px 
                    ${shadowBlur.value || shadowBlurRange.value}px 
                    ${shadowSpread.value || shadowSpreadRange.value}px ${shadowColor.value}`;
                } else {
                    block.style.boxShadow = 'none';
                }
            }

            // Функция для обработки нажатия на кнопку "active"
            function toggleShadow() {
                isShadowEnabled = !isShadowEnabled;
                updateShadow();
            }

            // Функция для обработки нажатия на кнопку "inset"
            function toggleInset() {
                isInset = !isInset;
                updateShadow();
            }

            // Привязываем обновление тени к изменению параметров тени
            shadowX.addEventListener("input", updateShadow);
            shadowY.addEventListener("input", updateShadow);
            shadowBlur.addEventListener("input", updateShadow);
            shadowSpread.addEventListener("input", updateShadow);
            shadowXrange.addEventListener("input", updateShadow);
            shadowYrange.addEventListener("input", updateShadow);
            shadowBlurRange.addEventListener("input", updateShadow);
            shadowSpreadRange.addEventListener("input", updateShadow);
            shadowColor.addEventListener("input", updateShadow);

            // Привязываем функции к кнопкам "active" и "inset"
            activeInput.addEventListener("change", toggleShadow);
            insetInput.addEventListener("change", toggleInset);
        // Shadow active and inset
    // Shadow parameters end
// Shadow custom end

// Opening menu

// Opening menu end