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
