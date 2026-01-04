function updateCarouselHeight() {
  // Select the first group element
  const firstGroup = document.querySelector('.group');
  
  if (firstGroup) {
    // Get the exact pixel height of one full group
    const groupHeight = firstGroup.offsetHeight; 
    
    // Apply this pixel value to the global CSS variable
    // We use a negative value because the animation moves UP
    document.documentElement.style.setProperty('--animation-height', `-${groupHeight}px`);
  }
}

// Run the function when the page loads
window.addEventListener('load', updateCarouselHeight);

// Also run it if the browser window resizes (e.g., mobile rotation)
window.addEventListener('resize', updateCarouselHeight);
