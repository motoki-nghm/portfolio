// about 固定表示
// ScrollTrigger.create({
//   trigger: '.js-pin--about',
//   pin: '.p-about__img',
//   start: 'top top',
//   end: 'bottom center+=30%',
// });
// ScrollTrigger.create({
//   trigger: '.js-pin--future',
//   pin: '.p-future',
//   start: 'top top',
//   end: 'bottom bottom',
// });

// ScrollTrigger.create({
//   trigger: '.js-pin--lastly',
//   pin: '.p-lastly',
//   start: 'top top',
//   end: 'bottom bottom',
// });

// フェードイン
// let fadeItems = gsap.utils.toArray('.js-fade');
// fadeItems.forEach((fadeItem) => {
//   gsap.fromTo(fadeItem,
//     {
//       y: 10,
//       autoAlpha: 0
//     },
//     {
//       y: 0,
//       autoAlpha: 1,
//       duration: 0.8,
//       ease: 'power2.out',
//       scrollTrigger: {
//         trigger: fadeItem,
//         start: 'top center+=30%',
//         markers: true,
//       }
//     }
//     );
//   });


// blur
// const blurTexts = document.querySelectorAll('.js-blur');
// blurTexts.forEach((blurText) => {
//   gsap.to(blurText, {
//     scrollTrigger: {
//       trigger: blurText,
//       start: 'top center+=35%',
//       once: true,
//       toggleClass: {
//         targets: blurText,
//         className: 'is-inview',
//       }
//     }
//   });
// });

// motive アイコン拡大
// const iconAnimations = document.querySelectorAll('.js-icon-animation');
// iconAnimations.forEach((iconAnimation) => {
//   gsap.to(iconAnimation, {
//     scrollTrigger: {
//       trigger: iconAnimation,
//       start: 'top center',
//       markers: true,
//       once: true,
//       toggleClass: {
//         targets: iconAnimation,
//         className: 'is-inview'
//       }
//     }
//   })
// });

// achievement 横スクロール
const scrollWrapper = document.querySelector('.p-achievement__scroll-wrapper');
const scrollList = document.querySelector('.p-achievement__list');
gsap.to(scrollList, {
  x: () => -(scrollList.clientWidth - scrollWrapper.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.js-slide-scroll',
    start: 'top top',
    end: () => `+=${scrollList.clientWidth - scrollWrapper.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

// swiper
// const slider = new Swiper('.p-achievement__slider', {
//   loop: true,
//   slidesperView: 1,
//   autoplay: {
//     delay: 2000
//   },
//   autoHight: true,
//   spaceBetween: 0,
//   allowTouchMove: false,
//   paginationClickable: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigtion: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
