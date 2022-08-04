"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var loadingEl=document.querySelector(".c-loading"),loadingFvEl=document.querySelector(".p-fv__dice");imagesLoaded("always",(function(){setTimeout((function(){loadingEl.classList.add("is-loaded")}),3e3),setTimeout((function(){loadingFvEl.classList.add("is-loaded")}),3e3)}));var modal=document.querySelector(".l-header__modal"),modalLinks=document.querySelectorAll(".l-header__link"),humburgerLine=document.querySelector(".l-header__hamburger-line");document.querySelector(".js-hamburger").addEventListener("click",(function(){humburgerLine.classList.toggle("is-active"),modal.classList.toggle("is-active")})),modalLinks.forEach((function(e){e.addEventListener("click",(function(){modal.classList.remove("is-active"),humburgerLine.classList.remove("is-active")}))})),document.addEventListener("click",(function(e){modal.classList.contains("is-active")&&(e.target.closest(".l-header")||(modal.classList.remove("is-active"),humburgerLine.classList.remove("is-active")))}));var Split=function(){function e(t){_classCallCheck(this,e),this.el=document.querySelector(t),this.chars=this.el.innerHTML.trim().split(""),this.el.innerHTML=this._splitText()}return _createClass(e,[{key:"_splitText",value:function(){return this.chars.reduce((function(e,t){return t=t.replace(/\s+/,"&nbsp;"),"".concat(e,'<span aria-hidden="true">').concat(t,"</span>")}),"")}}]),e}(),fvSplitText=new Split(".js-splitText"),_char=document.querySelectorAll(".js-splitText span");_char.forEach((function(e,t){e.classList.add("p-fv__char","p-fv__char--0".concat(t+1))}));var tl=gsap.timeline({repeat:-1});tl.set(".js-slideIn",{alpha:0,y:-3}).to(".js-slideIn",{alpha:1,y:0,duration:1.5}).to(".js-slideIn",{alpha:0,duration:.5,delay:3});var strs=document.querySelectorAll(".c-introduce__icon-text "),mediaQueryList=window.matchMedia("(min-width: 768px)"),changeStr=function(e){if(e.matches)for(var t in strs)strs.hasOwnProperty(t)&&(strs[t].innerHTML='<p class="c-introduce__icon-text js-slideIn" lang="en">scroll</p>');else for(var r in strs)strs.hasOwnProperty(r)&&(strs[r].innerHTML='<p class="c-introduce__icon-text js-slideIn" lang="en">swipe</p>')};mediaQueryList.addEventListener("change",changeStr),changeStr(mediaQueryList);var fadeItems=gsap.utils.toArray(".js-fade");fadeItems.forEach((function(e){gsap.fromTo(e,{y:10,autoAlpha:0},{y:0,autoAlpha:1,duration:.8,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 80%"}})}));var blurEls=document.querySelectorAll(".js-blur");blurEls.forEach((function(e){gsap.fromTo(e,{autoAlpha:0},{keyframes:[{duration:.1,autoAlpha:0,filter:"brightness(1)blur(20px)"},{duration:.1,autoAlpha:.6,filter:"brightness(2)blur(10px)"},{duration:.1,autoAlpha:.8,filter:"brightness(2)blur(5px)"},{duration:.2,autoAlpha:1,filter:"brightness(1)blur(0)"}],scrollTrigger:{trigger:e,start:"top 90%",once:!0}})}));var scaleAnimations=document.querySelectorAll(".js-scale");scaleAnimations.forEach((function(e){gsap.fromTo(e,{scale:0},{scale:1,scrollTrigger:{trigger:e,start:"top 80%",once:!0}})}));var slider=new Swiper(".swiper",{loop:!0,effect:"fade",fadeEffect:{crossFade:!0},slidesperView:1,autoHight:!0,spaceBetween:0,loopAdditionalSlides:1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});window.onload=function(){window.addEventListener("scroll",(function(){var e=document.querySelector(".js-scrollTop");e.getBoundingClientRect().top+window.pageYOffset>800?e.classList.add("is-show"):e.classList.remove("is-show")}))};