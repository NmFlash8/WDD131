// Select the dropdown and body element
const themeSelector = document.querySelector('#theme-select');
const body = document.body;

// Function to change the theme
function changeTheme() {
    const logo = document.querySelector('.logo');

    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_dark.png'; // Dark mode logo
        console.log('Switched to dark theme. Logo updated to dark version.');
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_light.webp'; // Light mode logo
        console.log('Switched to light theme. Logo updated to light version.');
    }
}

// Add event listener to the dropdown
themeSelector.addEventListener('change', changeTheme);
