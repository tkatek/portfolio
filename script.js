let hand = document.getElementById('hand');
let nav = document.getElementById('nav')
let logo = document.getElementById('logo');

window.onload = function(){
    
hand.style.height=('30px');
nav.style.width=('100%');
nav.style.height=('10vh')
logo.style.rotate=('0deg');
upButton.style.display=('none')
}

up.onclick = function(){

scroll({
   top:0,
   behavior:'smooth',
})

}
up.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});


// Get the button element by its ID
const upButton = document.getElementById('up');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down at least 200px
    if (window.scrollY > 200) {
        // Make the button visible
        upButton.style.display = 'block';
    } else {
        // Hide the button
        upButton.style.display = 'none';
    }
});

// Add a click event listener to the button
upButton.addEventListener('click', () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

