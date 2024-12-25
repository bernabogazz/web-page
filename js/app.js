document.addEventListener('DOMContentLoaded', () => {
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const slider = document.querySelector('.slider');
    const img = document.querySelector('.img');

    if (!img || !slider) {
        console.error('Slider or images are not found in the DOM');
        return;
    }

    const imgLength = document.querySelectorAll('.img').length;
    const sliderMax = (imgLength - 1) * img.offsetWidth;

    next.addEventListener('click', () => {
        if (slider.scrollLeft < sliderMax) {
            slider.scrollLeft += img.offsetWidth;
        } else if (slider.scrollLeft === sliderMax) {
            slider.scrollLeft = 0;
        }
    });

    prev.addEventListener('click', () => {
        if (slider.scrollLeft > 0) {
            slider.scrollLeft -= img.offsetWidth;
        } else if (slider.scrollLeft === 0) {
            slider.scrollLeft = sliderMax;
        }
    });

    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});