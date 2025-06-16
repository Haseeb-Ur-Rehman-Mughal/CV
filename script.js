// This script ensures the profile image is properly loaded and displayed
document.addEventListener('DOMContentLoaded', function() {
    // Set up profile image if it exists
    const profileImage = document.querySelector('.profile-image');
    
    // Function to handle image load error
    function handleImageError() {
        // If profile.jpg doesn't load, we add a fallback styling
        profileImage.style.backgroundColor = '#546e7a';
        profileImage.innerHTML = '<div style="color: white; text-align: center; line-height: 144px; font-size: 50px;">HMA</div>';
    }
    
    // Create a test image to check if profile.jpg exists
    const testImg = new Image();
    testImg.onerror = handleImageError;
    testImg.src = 'profile.jpg';
    
    // Adjust print settings
    const mediaQueryList = window.matchMedia('print');
    mediaQueryList.addEventListener('change', function(mql) {
        if (mql.matches) {
            // Before print
            document.body.classList.add('printing');
        } else {
            // After print
            document.body.classList.remove('printing');
        }
    });
}); 