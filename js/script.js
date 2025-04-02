const nav = document.getElementById('menu');
const search = document.getElementById('search');
const original = document.getElementById('og');

// Listen to scroll events on the window
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll position value as needed
        nav.classList.remove('lg:hidden');
        nav.classList.add('lg:flex');
        search.classList.remove('lg:hidden');
        search.classList.add('lg:block');
        original.classList.remove('lg:flex');
        original.classList.add('lg:hidden');
    } else {
        nav.classList.remove('lg:flex');
        nav.classList.add('lg:hidden');
        search.classList.remove('lg:block');
        search.classList.add('lg:hidden');
        original.classList.remove('lg:hidden');
        original.classList.add('lg:flex');
    }
});


const btn = document.getElementById('menu-btn')
const menu = document.getElementById('mobile-menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})

document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function () {
        // Toggle the active class on the clicked menu item
        item.classList.toggle('active');
    });
});


function toggleDropdown() {
    const content = document.getElementById('dropdown-content');
    content.classList.toggle('hidden');
}

function toggleFAQ(faqItem) {
    // Get the elements inside the clicked faq item
    const content = faqItem.querySelector('.FAQ-content');
    const plusIcon = faqItem.querySelector('.plus-icon');
    const minusIcon = faqItem.querySelector('.minus-icon');
    const title = faqItem.querySelector('.toggle-title');

    // Toggle visibility of the content
    content.classList.toggle('hidden');

    // Toggle icons
    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');

    // Change text color of the title when clicked
    title.classList.toggle('text-blueLink');
    title.classList.toggle('text-customBlue');
  }

  const cardsContainer = document.querySelector('.lg:hidden'); // Select the container for the mobile slider
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  cardsContainer.addEventListener('mousedown', (e) => { // Mouse down event to start dragging
    isMouseDown = true;
    startX = e.pageX - cardsContainer.offsetLeft; // Get the initial mouse position
    scrollLeft = cardsContainer.scrollLeft; // Get the current scroll position
  });

  cardsContainer.addEventListener('mouseleave', () => { // When mouse leaves, stop dragging
    isMouseDown = false;
  });

  cardsContainer.addEventListener('mouseup', () => { // When mouse is released, stop dragging
    isMouseDown = false;
  });

  cardsContainer.addEventListener('mousemove', (e) => { // When mouse moves, scroll horizontally
    if (!isMouseDown) return;
    e.preventDefault(); // Prevent default dragging behavior
    const x = e.pageX - cardsContainer.offsetLeft; // Get the current mouse position
    const walk = (x - startX) * 3; // Scroll speed, increase this for faster scrolling
    cardsContainer.scrollLeft = scrollLeft - walk; // Move the scroll position
  });

