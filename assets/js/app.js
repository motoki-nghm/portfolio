// ローディング
const loadingEl = document.querySelector('.c-loading');
const loadingFvEl = document.querySelector(".p-fv__dice");
const tl = gsap.timeline();
imagesLoaded("always", function () {
  const loadingDisplay = function () {
    loadingEl.classList.add("is-loaded");
  };
  const fvAnimation = function () {
    tl.to(loadingFvEl, {
      duration: 4,
      ease: CustomEase.create(
        "custom",
        "M0,1 C0.14,1 0.23,0.68 0.272,0.561 0.314,0.44 0.392,-0.037 0.4,0 0.408,-0.015 0.439,0.036 0.47,0.104 0.512,0.198 0.562,0.2 0.578,0.2 0.662,0.2 0.729,-0.017 0.736,0 0.806,0.082 0.79,0.078 0.83,0.078 0.866,0.078 0.876,0 0.9,0 0.9,0 0.926,0.034 0.952,0.034 0.967,0.034 1,0 1,0 "
      ),
      y: -500,
    });
    tl.to(
      loadingFvEl,
      {
        ease: Power0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
      },
      "<"
    );
    tl.to(
      loadingFvEl,
      {
        rotationX: 360,
        rotationY: 360,
        rotationZ: 360,
        duration: 15,
        ease: Linear.easeNone,
        repeat: -1,
      },
      "<"
    );
  };
  setTimeout(fvAnimation, 3000);
  setTimeout(loadingDisplay, 3000);
});


// ハンバーガーメニュー　モーダル展開
const modal = document.querySelector('.l-header__modal');
const modalLinks = document.querySelectorAll('.l-header__link');
const humburgerLine = document.querySelector('.l-header__hamburger-line');
document.querySelector('.js-hamburger').addEventListener('click',() => {
  humburgerLine.classList.toggle('is-active');
  modal.classList.toggle('is-active');
});
modalLinks.forEach((modalLink) => {
  modalLink.addEventListener('click', () => {
    modal.classList.remove('is-active');
    humburgerLine.classList.remove('is-active');
  });
});
document.addEventListener('click', (event) => {
  if (modal.classList.contains('is-active')) {
    if (!event.target.closest('.l-header')) {
      modal.classList.remove('is-active');
      humburgerLine.classList.remove('is-active');
    }
  };
});


// fv 文字分割
class Split {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span aria-hidden="true">${curr}</span>`;
    }, "");
  }
}
const fvSplitText = new Split('.js-splitText');

// fv spanに分割したテキストにクラス付与
let char = document.querySelectorAll(".js-splitText span");
char.forEach((element, index) => {
  element.classList.add('p-fv__char', `p-fv__char--0${index + 1}`);
});

// about iconアニメーション
const tlInfinite = gsap.timeline({ repeat: -1 });
tlInfinite.set(".js-slideIn", {
  alpha: 0,
  y: -3
}).to(".js-slideIn", {
  alpha: 1,
  y: 0,
  duration: 1.5
}).to(".js-slideIn", {
  alpha: 0,
  duration: 0.5,
  delay: 3
});

// about テキスト変更
const strs = document.querySelectorAll('.c-introduce__icon-text ');
const futureStrs = document.querySelectorAll('.p-future__caption ');
const mediaQueryList = window.matchMedia('(min-width: 768px)');
const changeStr = (event) => {
  if (event.matches) {
    for (let str in strs) {
      if (strs.hasOwnProperty(str)) {
          (strs[str]).innerHTML = '<p class="c-introduce__icon-text js-slideIn" lang="en">scroll</p>'
        };
      }
    } else {
    for (let str in strs) {
      if (strs.hasOwnProperty(str)) {
        (strs[str]).innerHTML = '<p class="c-introduce__icon-text js-slideIn" lang="en">swipe</p>'
      };
    }
  }
};
const changeFutureStr = (event) => {
  if (event.matches) {
    for (let futureStr in futureStrs) {
      if (futureStrs.hasOwnProperty(futureStr)) {
        futureStrs[futureStr].innerHTML =
          '<p class="p-future__caption"><small>※ドラッグで回転、スクロールでズームイン・アウトができますので、ぜひ遊んでみてください。</small></p>';
      }
    }
    } else {
    for (let futureStr in futureStrs) {
      if (futureStrs.hasOwnProperty(futureStr)) {
        futureStrs[futureStr].innerHTML =
          '<p class="p-future__caption"><small>※ドラッグで回転、ピンチでズームイン・アウトができますので、ぜひ遊んでみてください。</small></p>';
      };
    }
  }
};
mediaQueryList.addEventListener("change", changeStr);
mediaQueryList.addEventListener("change", changeFutureStr);
changeStr(mediaQueryList);
changeFutureStr(mediaQueryList);

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
        start: 'top 80%',
      }
    }
    );
  });


// blur
const blurEls = document.querySelectorAll('.js-blur');
blurEls.forEach((blurEl) => {
  gsap.fromTo(blurEl, {
    autoAlpha: 0,
  }, {
    keyframes: [
      {
        duration: 0.1,
        autoAlpha: 0,
        filter: 'brightness(1)blur(20px)'
      },
      {
        duration: 0.1,
        autoAlpha: 0.6,
        filter: 'brightness(2)blur(10px)'
      },
      {
        duration: 0.1,
        autoAlpha: 0.8,
        filter: 'brightness(2)blur(5px)'
      },
      {
        duration: 0.2,
        autoAlpha: 1,
        filter: 'brightness(1)blur(0)'
      }

    ],
    scrollTrigger: {
      trigger: blurEl,
      start: 'top 90%',
      once: true,
    }
  });
});

// swiper
const slider = new Swiper(".p-achievement__slider", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  slidesperView: 1,
  autoHight: true,
  spaceBetween: 0,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // allowTouchMove: false,
});

// ページトップへ戻るアイコン
window.onload = function() {
  let ShowElement = function () {
    const scrollEl = document.querySelector('.js-scrollTop');
    let rect = scrollEl.getBoundingClientRect();
    let elHeight = rect.top + window.pageYOffset;
    if (elHeight > 800) {
      scrollEl.classList.add('is-show');
    } else {
      scrollEl.classList.remove('is-show');
    }
  }
  window.addEventListener('scroll',ShowElement)
};

// ====================================================
// three.js
// ====================================================
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("DOMContentLoaded", init02);

function init() {
  //シーン
  const scene = new THREE.Scene();
  //レンダラー
  const particlesEl = document.querySelector("#particles");
  const particlesRenderer = new THREE.WebGLRenderer({
    canvas: particlesEl,
    alpha: true,
  });
  //サイズ
  width = particlesEl.clientWidth;
  height = particlesEl.clientHeight;
  particlesRenderer.setSize(width, height);
  //カメラ
  const camera = new THREE.PerspectiveCamera(
    75,
    width / height,
    0.1,
    100
  );
  camera.position.set(1, 1, 2);

  /**
   * テクスチャ設定
   */

  const textureLoader = new THREE.TextureLoader();
  const particlesTexture = textureLoader.load('./assets/img/lantern-bk.png')
  const particlesTexture02 = textureLoader.load('./assets/img/kamaboko-bk.png')
  const particlesTexture03 = textureLoader.load("./assets/img/motorcycle-bk.png");
  const particlesTexture04 = textureLoader.load('./assets/img/bonfire-bk.png')
  const particlesTexture05 = textureLoader.load('./assets/img/chair-bk.png')

  // ジオメトリ
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesGeometry02 = new THREE.BufferGeometry();
  const particlesGeometry03 = new THREE.BufferGeometry();
  const particlesGeometry04 = new THREE.BufferGeometry();
  const particlesGeometry05 = new THREE.BufferGeometry();
  const count = 1000;
  // 座標の設定
  const positionArray = new Float32Array(count * 3);
  const colorArray = new Float32Array(count * 3);
  const positionArray02 = new Float32Array(count * 3);
  const colorArray02 = new Float32Array(count * 3);
  const positionArray03 = new Float32Array(count * 3);
  const colorArray03 = new Float32Array(count * 3);
  const positionArray04 = new Float32Array(count * 3);
  const colorArray04 = new Float32Array(count * 3);
  const positionArray05 = new Float32Array(count * 3);
  const colorArray05 = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10;
    colorArray[i] = Math.random();
    positionArray02[i] = (Math.random() - 0.5) * 10;
    colorArray02[i] = Math.random();
    positionArray03[i] = (Math.random() - 0.5) * 10;
    colorArray03[i] = Math.random();
    positionArray04[i] = (Math.random() - 0.5) * 10;
    colorArray04[i] = Math.random();
    positionArray05[i] = (Math.random() - 0.5) * 10;
    colorArray05[i] = Math.random();
  }
  particlesGeometry.setAttribute("position",
    new THREE.BufferAttribute(positionArray, 3)
  );
  particlesGeometry.setAttribute("color",
    new THREE.BufferAttribute(colorArray, 3)
  );
  particlesGeometry02.setAttribute("position",
    new THREE.BufferAttribute(positionArray02, 3)
  );
  particlesGeometry02.setAttribute("color",
    new THREE.BufferAttribute(colorArray02, 3)
  );
  particlesGeometry03.setAttribute("position",
    new THREE.BufferAttribute(positionArray03, 3)
  );
  particlesGeometry03.setAttribute("color",
    new THREE.BufferAttribute(colorArray03, 3)
  );
  particlesGeometry04.setAttribute("position",
    new THREE.BufferAttribute(positionArray04, 3)
  );
  particlesGeometry04.setAttribute("color",
    new THREE.BufferAttribute(colorArray04, 3)
  );
  particlesGeometry05.setAttribute("position",
    new THREE.BufferAttribute(positionArray05, 3)
  );
  particlesGeometry05.setAttribute("color",
    new THREE.BufferAttribute(colorArray05, 3)
  );

  //マテリアル
  const pointMaterial = new THREE.PointsMaterial({
    size: 0.06,
    sizeAttenuation: true,
    transparent: true,
    alphaMap: particlesTexture,
    depthWrite: false,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
  });
  const pointMaterial02 = new THREE.PointsMaterial({
    size: 0.06,
    transparent: true,
    alphaMap: particlesTexture02,
    depthWrite: false,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
  });
  const pointMaterial03 = new THREE.PointsMaterial({
    size: 0.06,
    transparent: true,
    alphaMap: particlesTexture03,
    depthWrite: false,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
  });
  const pointMaterial04 = new THREE.PointsMaterial({
    size: 0.06,
    transparent: true,
    alphaMap: particlesTexture04,
    depthWrite: false,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
  });
  const pointMaterial05 = new THREE.PointsMaterial({
    size: 0.06,
    transparent: true,
    alphaMap: particlesTexture05,
    depthWrite: false,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
  });


  // メッシュ化
  const particles = new THREE.Points(particlesGeometry, pointMaterial);
  scene.add(particles);
  const particles02 = new THREE.Points(particlesGeometry02, pointMaterial02);
  scene.add(particles02);
  const particles03 = new THREE.Points(particlesGeometry03, pointMaterial03);
  scene.add(particles03);
  const particles04 = new THREE.Points(particlesGeometry04, pointMaterial04);
  scene.add(particles04);
  const particles05 = new THREE.Points(particlesGeometry05, pointMaterial05);
  scene.add(particles05);

  let particlesGroup = new THREE.Group();
  particlesGroup.add(particles, particles02, particles03, particles04, particles05);
  scene.add(particlesGroup)


  const clock = new THREE.Clock();

  function animate() {
    let getDeltaTime = clock.getDelta();
    particlesGroup.rotation.y += 0.2 * getDeltaTime;
    particlesRenderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  //ブラウザのリサイズに対応
  let particlesBgParent = document.querySelector(".p-motive__background");
  function onWindowResize() {
    width = particlesBgParent.clientWidth;
    height = particlesBgParent.clientHeight;
    particlesRenderer.setPixelRatio(window.devicePixelRatio);
    particlesRenderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  animate();
  window.addEventListener("resize", onWindowResize);

}

// Future Blender + デモ
function init02() {
  // レンダラーを作成
  const canvasEl = document.querySelector("#canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl,
    alpha: true,
  });
  // ウィンドウサイズ設定
  width = canvasEl.clientWidth;
  height = canvasEl.clientHeight;

  // シーンを作成
  const scene = new THREE.Scene();

  // 環境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
  directionalLight.position.set(1000, 500, 100);
  scene.add(directionalLight);

  // animation
  let mixer;
  let clock = new THREE.Clock();
  const actions = [];

  // カメラを作成
  let camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
  camera.position.set(800, 400, -800);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;
  controls.update();

  // 3Dモデルを読み込み
  const loader = new THREE.GLTFLoader();

  loader.load(
    "./assets/model/portfolio.gltf",
    function (gltf) {
      model = gltf.scene;
      model.scale.set(100, 100, 100);
      model.position.set(0, -100, 0);
      scene.add(model);

    });

    // animation
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
    }
    animate();

  // 画面のリサイズに対応
  let canvasParent = document.querySelector(".p-future__model");
    function onWindowResize() {
      width = canvasParent.clientWidth;
      height = canvasParent.clientHeight;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onWindowResize);
}
