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

