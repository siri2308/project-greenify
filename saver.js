// Get elements
const progressCircle = document.querySelector('.progress-circle circle');
const progressText = document.getElementById('progress-text');
const updateProgressButton = document.getElementById('update-progress');

// Calculate dash offset for 60% progress
const dashOffset = 283 - (283 * 0.6);

// Add event listener to button
updateProgressButton.addEventListener('click', () => {
    // Update progress circle and text
    progressCircle.setAttribute('stroke-dashoffset', dashOffset);
    progressCircle.classList.add('progress');
    progressText.textContent = '60%';
});
