// Toda la documentación de gsap en -> https://gsap.com/docs/v3/
// Cualquier duda o comentario, se puede acercar a mí por mensaje!

document.addEventListener("DOMContentLoaded", () => {
    // Esto es un TWEEN .Con esto podemos lograr una animación en su mínima expresión.
    
    gsap.to(".circulo1", { x: 500, duration: 2 })


    //Este sigue siendo un TWEEN pero pero con más propiedades y opciones, repeat o yoyo, podemos haccer cosas poderosas con uno solo.Con el plugin motionPath, podemos animar un elemento a lo largo de un path definido en el SVG.


    gsap.to("#circuloPath", {
        duration: 5,
        repeat: 12,
        repeatDelay: 2,
        yoyo: true,
        ease: "power1.inOut",
        motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 0.5]
        }
    });



    // Esto es un TIMELINE, con esto podemos encadenar animaciones, y controlar su tiempo de ejecución, con labels o con posiciones relativas.

    const lineaDeTiempo = gsap.timeline({
        repeat: -1, repeatDelay: 3, defaults:{ ease:"power3.out", duration: 2 }
    });

    lineaDeTiempo
        .to("#circulo3", { xPercent: 150 })
        .to("#circulo3", { yPercent: 300 })
        .to("#circulo3", { xPercent: -150 })
        .to("#circulo3", { yPercent: 0 })
        .to("#circulo3", { xPercent: 0 })



    //Scrolltrigger, con esto podemos animar elementos que, a medida que el usuario hace scroll, la animación se va ejecutando. 
    // -> Es útil para crear efectos de parallax o animaciones que se activan al llegar a cierta sección de la página.
    const animacionScroll = gsap.timeline({
        defaults: {
            duration: 3, ease: "back.out"
        },
        scrollTrigger: {
            trigger: ".seccionScroll",
            start: "top center",
            scrub: 1,
            pin: true,
            pinSpacing: true
        }
    })

    // Aquí establecí la rotación aparezca por default y no sea resultado del scrollTrigger
    gsap.set("#card1", { rotate: -3 })

    // Línea de tiempo que se verá afectada por el ScrollTrigger. Los cards se rotarán e irán apareciendo en pantalla a medida que vaya haciendo Scroll.
    animacionScroll
        .to("#card2", { rotate: 4, yPercent: -140 })
        .to("#card3", { rotate: 1.5, yPercent: -230 })

    //




});
