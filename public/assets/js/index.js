"use strict";ScrollTrigger.create({trigger:".js-pin--about",pin:".p-about__img",start:"top top",end:"bottom center+=30%"});var fadeItems=gsap.utils.toArray(".js-fade");fadeItems.forEach((function(t){gsap.fromTo(t,{y:10,autoAlpha:0},{y:0,autoAlpha:1,duration:.8,ease:"power2.out",scrollTrigger:{trigger:t,start:"top center+=30%"}})}));var blurTexts=document.querySelectorAll(".js-blur");blurTexts.forEach((function(t){gsap.to(t,{scrollTrigger:{trigger:t,start:"top center+=35%",once:!0,toggleClass:{targets:t,className:"is-clear"}}})})),ScrollTrigger.create({trigger:".js-pin--motive",pin:".p-motive",start:"top top",end:"bottom bottom",markers:!0});