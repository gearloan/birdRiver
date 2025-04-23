gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollSmoother);

const stage = document.querySelector('.stage');
const slides = document.querySelectorAll(".slide");


function initSlides() {
    
    // Animation of each slide scrolling into view
    
    slides.forEach((slide, i) => {   
        
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: "40% 50%", // position of trigger meets the scroller position
            }
        });
 /*
        tl.from(slide.querySelectorAll('.col__content-title'), {
            ease: "power4",
            y: "+=5vh",
            duration: 2.5,
        })
        .from(slide.querySelectorAll('.line__inner'), {
            y: 200,
            duration: 2,
            ease: "power4",
            stagger: 0.1
        }, 0)
        .from(slide.querySelectorAll('.col__content-txt'), {
            x: 100,
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power4"
        }, 0.4)
        .from(slide.querySelectorAll('.slide-link'), {
            x: -100,
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power4"
        }, 0.3)
        .from(slide.querySelectorAll('.slide__scroll-link'), {
            y: 200,
            duration: 3,
            ease: "power4"
        }, 0.4)
        .to(slide.querySelectorAll('.slide__scroll-line'), {
            scaleY: 0.6,
            transformOrigin: "bottom left",
            duration: 2.5, 
            ease: "elastic(1,0.5)"
        }, 1.4)
        */
	});
    
    // External footer link scroll animation
    /*
    gsap.from('.footer__link', {
        scrollTrigger: {
            trigger: '.footer',
            scrub: 2,
            start: "50% 100%", // position of trigger meets the scroller position
            end: "0% 0%",
        },
        y: "20vh",
        ease: 'sine'
    })
        */
}

function initParallax() {
    
    slides.forEach((slide, i) => {
        let imageWrappers = slide.querySelectorAll('.col__image-wrap');
        
        gsap.fromTo(imageWrappers, {
            y: "-30vh"
        },{
            y: "30vh",
            scrollTrigger: {
                trigger: slide,
                scrub: true,
                start: "top bottom", // position of trigger meets the scroller position
                snap: {
                    snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
                    duration: 1,
                    ease: 'power4.inOut'
                }
            },
            ease: 'none'
        })
    });
}

function init() {
    gsap.set(stage, { autoAlpha: 1 });
    //initHeader();
    //initIntro();
	//initLinks();
	//initSlides();
	initParallax();
    //initKeys();
}

window.onload = () => {
	init();
};