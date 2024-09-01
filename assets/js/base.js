document.addEventListener('DOMContentLoaded', function () {
  const circle = document.querySelector('.gradient-circle');
  const colors = [
    'rgba(171, 169, 191, 1)', 
    'rgba(190, 183, 223, 1)', 
    'rgba(212, 242, 210, 1)', 
    'rgba(134, 135, 132, 1)', 
    'rgba(171, 169, 191, 1)', 
    'rgba(190, 183, 223, 1)', 
    'rgba(212, 242, 210, 1)', 
    'rgba(171, 169, 191, 1)', 
    'rgba(190, 183, 223, 1)', 
    'rgba(212, 242, 210, 1)'
  ];
  const colorCount = colors.length;

  let maxSize, minSize;
  let initialTop = 100; // CSS value for top
  let initialLeft = 600; // Updated initial left value
  let isStuck = false;

  // Function to update sizes
  function updateSizes() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      maxSize = 200;
      minSize = 150;
    } else if (windowWidth < 900) {
      maxSize = 250;
      minSize = 150;
    } else {
      maxSize = 350;
      minSize = 150;
    }
  }

  // Function to handle scrolling and resizing
  function handleScroll() {
    const windowHeight = window.innerHeight;
    let scrollPosition = Math.min(window.scrollY, document.documentElement.scrollHeight - windowHeight);

    // Update sizes
    updateSizes();

    // Change colors based on scroll position
    const index = Math.floor(scrollPosition / (windowHeight / colorCount)) % colorCount;
    const color1 = colors[index];
    const color2 = colors[(index + 1) % colorCount];
    const color3 = colors[(index + 2) % colorCount];
    circle.style.background = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;

    let newSize = maxSize - (scrollPosition / 300) * (maxSize - minSize);
    if (newSize <= minSize) {
      newSize = minSize;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Ensure the circle is centered vertically when stuck
      circle.style.position = 'fixed';
      circle.style.width = `${newSize}px`;
      circle.style.height = `${newSize}px`;

      // Center vertically based on viewport height
      circle.style.top = `${Math.max((viewportHeight - newSize) / 2, 0)}px`;
      // Center horizontally
      circle.style.left = `${Math.max(viewportWidth - newSize, 0)}px`;
      isStuck = true;
    } else {
      circle.style.position = 'absolute';
      circle.style.width = `${newSize}px`;
      circle.style.height = `${newSize}px`;

      // Calculate new position
      const newTop = Math.min(initialTop + (scrollPosition / 300) * (200 - 50), windowHeight - newSize);
      const centerYOffset = (windowHeight - newSize) / 2;
      circle.style.top = `${Math.max(Math.min(newTop, centerYOffset), 50)}px`;

      circle.style.left = `${Math.max(0, Math.min(window.innerWidth - newSize, initialLeft))}px`;
      isStuck = false;
    }
  }

  // Initial setup and event listeners
  updateSizes();
  window.addEventListener('resize', updateSizes);
  window.addEventListener('scroll', handleScroll);

  // Call handleScroll initially to set up the correct position and size
  handleScroll();
});





  //Adding background gradient

  document.addEventListener('DOMContentLoaded', function () {
    const intro = document.querySelector('.gradient-bg');
    const colors2 = ['rgba(171, 169, 191, 1)', 'rgba(190, 183, 223, 1)', 'rgba(212, 242, 210, 1)',  'rgba(134, 135, 132, 1)', 'rgba(171, 169, 191, 1)', 'rgba(190, 183, 223, 1)', 'rgba(212, 242, 210, 1)','rgba(171, 169, 191, 1)', 'rgba(190, 183, 223, 1);', 'rgba(212, 242, 210, 1)'];
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