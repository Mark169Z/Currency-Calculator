document.addEventListener('DOMContentLoaded', function() {
    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const element = document.getElementById('OnlyImg');
  
    // Function to set the theme
    function setTheme(theme) {
      htmlElement.setAttribute('data-theme', theme);
      if(theme=='dark'){
        element.style.filter = 'invert(100%)';
      }
      else{
        element.style.filter = 'invert(0)';
      }
      localStorage.setItem('theme', theme);
    }
  
    // Function to toggle the theme
    function toggleTheme() {
      if (themeToggle.checked) {
        setTheme('dark');
        element.style.filter = 'invert(100%)';
      } else {
        setTheme('light');
        element.style.filter = 'invert(0)';
      }
    }
    
    // Check if a theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      themeToggle.checked = savedTheme === 'dark';
    }
  
    // Listen for theme toggle change
    themeToggle.addEventListener('change', toggleTheme);
  });
  