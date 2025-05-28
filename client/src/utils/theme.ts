
// Initialize theme based on user preference or system setting
export function initializeTheme() {
  // Check if a theme is stored in localStorage
  const storedTheme = localStorage.getItem('theme');
  
  // If a theme is stored, use it
  if (storedTheme) {
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return;
  }
  
  // Otherwise, check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
