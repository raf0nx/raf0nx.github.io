// Mobile animation disable
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

if (vw <= 576) {
    document.querySelector('#aos-div').removeAttribute('data-aos');
}