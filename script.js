window.onload = () => {
    const steps = document.querySelectorAll('.step');

    let btnIndex = 0;

    const rotateSlides = () => {
        document.querySelectorAll('.overlay img').forEach(img => img.classList.add('jump'))
        steps[btnIndex].classList.remove('current');
        btnIndex = btnIndex === steps.length - 1 ? 0 : btnIndex + 1;
        steps[btnIndex].classList.add('current');

    };

    const rotation = setInterval(rotateSlides, 5000);

    steps.forEach((step, index) => {
        step.onclick = () =>{
            clearInterval(rotation);
            steps.forEach(stp => stp.classList.remove('current'));
            document.querySelectorAll('.overlay img').forEach(img => img.classList.remove('jump'))
            steps[index].classList.add('current');
        }
    })
};