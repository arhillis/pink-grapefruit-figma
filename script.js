window.onload = () => {
    const steps = document.querySelectorAll('.step');

    let btnIndex = 0;

    const rotateSlides = () => {
        steps[btnIndex].classList.remove('current');

        btnIndex = btnIndex === steps.length - 1 ? 0 : btnIndex + 1;

        steps[btnIndex].classList.add('current');

    };

    const rotation = setInterval(rotateSlides, 3000);

    document.querySelector('#about').onclick = () => clearInterval(rotation);
};