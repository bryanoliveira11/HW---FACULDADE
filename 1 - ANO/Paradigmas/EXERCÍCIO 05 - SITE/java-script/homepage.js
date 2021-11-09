// configuração da animação parallax ínicio

document.getElementById('home_img').onmousemove = (e) => {

    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 110;
        let y = (window.innerHeight - e.pageY * speed) / 110;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
};

document.querySelector('.home').onmouseleave = () => {

    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });
};

// configuração da animação parallax fim.