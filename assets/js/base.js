document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.gradient-circle');
    const mainTitle = document.querySelector('.logo-text .main-title');
    const subtitle = document.querySelector('.logo-text .subtitle');
    const locationText = document.querySelector('.logo-text .location');
  
    const colors = ['#562648', '#a8a8a8', '#6987C9', '#a8a8a8', '#a99047', '#a99047'];
    const colorCount = colors.length;
  
    let maxSize, minSize, initialSize;
    let initialTop = 100;
    let initialLeft = 800;
    let isStuck = false;
  
    // Keep track of original font sizes from CSS
    const originalFontSizeMainTitle = parseFloat(window.getComputedStyle(mainTitle).fontSize);
    const originalFontSizeSubtitle = parseFloat(window.getComputedStyle(subtitle).fontSize);
    const originalFontSizeLocation = parseFloat(window.getComputedStyle(locationText).fontSize);
  
    function updateSizes() {
        const windowWidth = window.innerWidth;
        if (windowWidth < 500) {
            maxSize = 150;
            minSize = 100;
        } else if (windowWidth < 900) {
            maxSize = 200;
            minSize = 150;
        } else {
            maxSize = 350;
            minSize = 150;
        }
        initialSize = maxSize; // Set the initial circle size to maxSize
    }
  
    function handleScroll() {
        const windowHeight = window.innerHeight;
        let scrollPosition = Math.min(window.scrollY, document.documentElement.scrollHeight - windowHeight);
  
        updateSizes();
  
        const index = Math.floor(scrollPosition / (windowHeight / colorCount)) % colorCount;
        const color1 = colors[index];
        const color2 = colors[(index + 1) % colorCount];
        const color3 = colors[(index + 2) % colorCount];
        const color4 = colors[(index + 3) % colorCount];
        const color5 = colors[(index + 4) % colorCount];
  
        circle.style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3}, ${color4}, ${color5})`;
  
        let newSize = maxSize - (scrollPosition / 300) * (maxSize - minSize);
        newSize = Math.max(minSize, Math.min(newSize, maxSize)); // Ensure newSize stays within bounds
  
        // Adjust circle size and position
        if (newSize === minSize) {
            circle.style.position = 'fixed';
            circle.style.width = `${newSize}px`;
            circle.style.height = `${newSize}px`;
            circle.style.top = `${initialTop}px`;
            circle.style.left = `${Math.max((window.innerWidth - newSize), 0)}px`;
            isStuck = true;
        } else {
            circle.style.position = 'absolute';
            circle.style.width = `${newSize}px`;
            circle.style.height = `${newSize}px`;
            const newTop = Math.min(initialTop + (scrollPosition / 300) * (200 - 50), windowHeight - newSize);
            circle.style.top = `${Math.max(newTop, 50)}px`;
            circle.style.left = `${Math.max(0, Math.min(window.innerWidth - newSize, initialLeft))}px`;
            isStuck = false;
        }
  
        // Update font sizes when the circle shrinks, and ensure they don't exceed the original size
        if (newSize < initialSize) {
            const shrinkFactor = newSize / initialSize;
            mainTitle.style.fontSize = `${Math.max(originalFontSizeMainTitle * shrinkFactor, 14)}px`;
            subtitle.style.fontSize = `${Math.max(originalFontSizeSubtitle * shrinkFactor, 10)}px`;
            locationText.style.fontSize = `${Math.max(originalFontSizeLocation * shrinkFactor, 12)}px`;
        } else {
            // Restore original sizes when the circle is at max size or larger
            mainTitle.style.fontSize = `${originalFontSizeMainTitle}px`;
            subtitle.style.fontSize = `${originalFontSizeSubtitle}px`;
            locationText.style.fontSize = `${originalFontSizeLocation}px`;
        }
    }
  
    function repositionCircle() {
        updateSizes();
        const newSize = Math.max(maxSize, minSize);
        circle.style.width = `${newSize}px`;
        circle.style.height = `${newSize}px`;
  
        if (newSize < initialSize) {
            const shrinkFactor = newSize / initialSize;
            mainTitle.style.fontSize = `${Math.max(originalFontSizeMainTitle * shrinkFactor, 14)}px`;
            subtitle.style.fontSize = `${Math.max(originalFontSizeSubtitle * shrinkFactor, 10)}px`;
            locationText.style.fontSize = `${Math.max(originalFontSizeLocation * shrinkFactor, 12)}px`;
        } else {
            mainTitle.style.fontSize = `${originalFontSizeMainTitle}px`;
            subtitle.style.fontSize = `${originalFontSizeSubtitle}px`;
            locationText.style.fontSize = `${originalFontSizeLocation}px`;
        }
  
        if (!isStuck) {
            circle.style.top = `${initialTop}px`;
            circle.style.left = `${Math.max(0, Math.min(window.innerWidth - newSize, initialLeft))}px`;
        }
    }
  
    // Initial setup and event listeners
    updateSizes();
    window.addEventListener('resize', repositionCircle);
    window.addEventListener('scroll', handleScroll);
  
    function setInitialGradient() {
        const gradientColors = colors.join(', ');
        circle.style.background = `linear-gradient(45deg, ${gradientColors})`;
    }
  
    setInitialGradient();
    handleScroll();
  });
  
  

  //Adding background gradient

  document.addEventListener('DOMContentLoaded', function () {
    const intro = document.querySelector('.gradient-bg');
    const colors2 = ['#562648','#a99047','#a8a8a8'];
    const colorCount2 = colors2.length;

    window.addEventListener('scroll', function () {
      const scrollPosition2 = window.scrollY;

      // Change colors based on scroll position
      const index2 = Math.floor(scrollPosition2 / (window.innerHeight / colorCount2)) % colorCount2;
      const color1 = colors2[index2];
      const color2 = colors2[(index2 + 1) % colorCount2];
      const color3 = colors2[(index2 + 2) % colorCount2];

      // Apply the new colors
      intro.style.background = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
      
    });
  });

 
  // Function to filter by specific card data-id
var filterById = (id) => {
    const cards = document.getElementsByClassName("choice"); // Get all cards
    
    for (let i = 0; i < cards.length; i++) {
      let cardId = cards[i].getAttribute("data-id"); // Get data-id
      
      if (cardId == id) { // Check if the id matches
        cards[i].classList.remove("d-none"); // Show card
      } else {
        cards[i].classList.add("d-none"); // Hide other cards
      }
    }
  }
  
  // Function to show all cards
  var showAll = () => {
    const cards = document.getElementsByClassName("choice"); // Get all cards
  
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("d-none"); // Remove d-none class to show all cards
    }
  }
  