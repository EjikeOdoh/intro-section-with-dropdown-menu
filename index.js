const primaryNav = document.querySelector('.primary-navigation');
const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        toggler.setAttribute('aria-expanded', 'true')
    } else{
        primaryNav.setAttribute('data-visible', 'false');
        toggler.setAttribute('aria-expanded', 'false')
    }
})