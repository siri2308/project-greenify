const videoUploadInput = document.getElementById('video-upload');
const starBadgeContainer = document.querySelector('.star-badge-container');
const fileNameElement = document.getElementById('file-name');
const fileSizeElement = document.getElementById('file-size');

videoUploadInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  console.log('File uploaded:', file);

  fileNameElement.innerText = `File Name: ${file.name}`;
  fileSizeElement.innerText = `File Size: ${file.size} bytes`;

  if (file.type.startsWith('video/')) {
    console.log('Video file detected');
    starBadgeContainer.style.display = 'block';
    setTimeout(() => {
      starBadgeContainer.style.display = 'none';
    }, 3000); // Hide badge after 3 seconds
  } else {
    console.log('Non-video file detected');
  }
});

// Add error handling
videoUploadInput.addEventListener('error', (e) => {
  console.error('Error uploading file:', e);
});
