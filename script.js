window.onload = () => {
    const steps = document.querySelectorAll('.step');
    const imgs = document.querySelectorAll('.overlay img');

    let btnIndex = 0;

    const rotateSlides = () => {
        imgs.forEach(img => img.classList.add('jump'))
        steps[btnIndex].classList.remove('current');
        btnIndex = btnIndex === steps.length - 1 ? 0 : btnIndex + 1;
        steps[btnIndex].classList.add('current');

    };

    const rotation = setInterval(rotateSlides, 5000);

    steps.forEach((step, index) => {
        step.onclick = () =>{
            clearInterval(rotation);
            steps.forEach(stp => stp.classList.remove('current'));
            imgs.forEach(img => img.classList.remove('jump', 'jump-once'));
            steps[index].classList.add('current');
            setTimeout(() => imgs.forEach(img => img.classList.add('jump-once')), 10);
        }
    })
};