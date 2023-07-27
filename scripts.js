const colorPicker = document.getElementById('color-picker');
const colorCodeDisplay = document.getElementById('color-code');

colorPicker.addEventListener('input', function () {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    colorCodeDisplay.textContent = selectedColor;
});

const initialColor = colorPicker.value;
document.body.style.backgroundColor = initialColor;
colorCodeDisplay.textContent = initialColor;