document.addEventListener('DOMContentLoaded', function() {
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const colorValueDisplay = document.getElementById('color-value');

    // Function to update the background color based on RGB input values
    function updateBackgroundColor() {
        
      const red = redInput.value;
      const green = greenInput.value;
      const blue = blueInput.value;
        
      const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        
      // Update the background color of the body
      document.body.style.backgroundColor = rgbColor;
        
      // Update the display text showing the current color value
      colorValueDisplay.textContent = `Current Color: ${rgbColor}`;

        // Add event listeners to the range inputs
    redInput.addEventListener('input', updateBackgroundColor);
    greenInput.addEventListener('input', updateBackgroundColor);
    blueInput.addEventListener('input', updateBackgroundColor);

        // Initialize the background color when the page loads
    updateBackgroundColor();
