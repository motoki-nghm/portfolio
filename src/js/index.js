// about 固定表示
ScrollTrigger.create({
  trigger: ".js-pin--about",
  pin: ".p-about__img",
  start: "top top",
  end: "bottom center+=30%",
});

// フェードイン
let fadeItems = gsap.utils.toArray('.js-fade');
fadeItems.forEach((fadeItem) => {
  gsap.fromTo(fadeItem,
    {
      y: 10,
      autoAlpha: 0
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: fadeItem,
        start: 'top center+=30%',
      }
    }
    );
  });


  // blur
const blurTexts = document.querySelectorAll('.js-blur');
blurTexts.forEach((blurText) => {
  gsap.to(blurText, {
    scrollTrigger: {
      trigger: blurText,
      start: 'top center+=35%',
      once: true,
      toggleClass: {
        targets: blurText,
        className: 'is-clear',
      }
    }
  });
});

// motive 固定表示
ScrollTrigger.create({
  trigger: ".js-pin--motive",
  pin: ".p-motive",
  start: "top top",
  end: "bottom bottom",
  markers: true,
});
