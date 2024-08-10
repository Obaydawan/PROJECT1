// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Animation for the first page elements
function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut"
    })
    .to(".boundingelem", {
        y: 0,
        ease: "expo.inOut",
        duration: 2,
        stagger: 0.2,
        delay: -1
    })
    .from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: "expo.inOut"
    });
}

// Function to create a small circle that follows the mouse
function circleMouseFollower() {
    const minicircle = document.querySelector("#minicircle");
    window.addEventListener("mousemove", function(event) {
        console.log(`Mouse moved to: (${event.clientX}, ${event.clientY})`);
        minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
}

// Call the function to enable the mouse follower
circleMouseFollower();
firstPageAnim();

// Animation on hover for elements with class 'elem'
document.querySelectorAll(".elem").forEach(function(elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power3",
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power3",
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
        });
    });
});
