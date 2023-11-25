let bars = document.getElementById("bars") as HTMLElement;
let ul = document.getElementById("header-ul") as HTMLElement;
bars.addEventListener("click", () => {
  ul.classList.toggle("d-none");
});
// Change the img of Landing

let introImg = <HTMLElement>document.getElementById("inrto-img");

if (window.innerWidth < 767) {
  introImg.removeAttribute("src");
  introImg.setAttribute("src", "./images/image-intro-mobile.jpg");
} else if (window.innerWidth > 767) {
  introImg.removeAttribute("src");
  introImg.setAttribute("src", "./images/image-intro-desktop.jpg");
}
window.addEventListener("resize", () => {
  let introImg = <HTMLElement>document.getElementById("inrto-img");

  if (window.innerWidth < 767) {
    introImg.removeAttribute("src");
    introImg.setAttribute("src", "./images/image-intro-mobile.jpg");
  } else if (window.innerWidth > 767) {
    introImg.removeAttribute("src");
    introImg.setAttribute("src", "./images/image-intro-desktop.jpg");
  }
});
// Change the img of How We Work
let img = <HTMLElement>document.getElementById("find-out-img");
if (window.innerWidth < 767) {
  img.removeAttribute("src");
  img.setAttribute("src", "./images/bg-pattern-how-we-work-mobile.svg");
} else if (window.innerWidth > 767) {
  img.removeAttribute("src");
  img.setAttribute("src", "./images/bg-pattern-how-we-work-desktop.svg");
}
window.addEventListener("resize", () => {
  let img = <HTMLElement>document.getElementById("find-out-img");
  if (window.innerWidth < 767) {
    img.removeAttribute("src");
    img.setAttribute("src", "./images/bg-pattern-how-we-work-mobile.svg");
  } else if (window.innerWidth > 767) {
    img.removeAttribute("src");
    img.setAttribute("src", "./images/bg-pattern-how-we-work-desktop.svg");
  }
});
let footerImg = <HTMLElement>document.getElementById("footer-img");
if (window.innerWidth < 767) {
  footerImg.removeAttribute("src");
  footerImg.setAttribute("src", "./images/bg-pattern-footer-mobile.svg");
} else if (window.innerHeight > 767) {
  footerImg.removeAttribute("src");
  footerImg.setAttribute("src", "./images/bg-pattern-footer-desktop.svg");
}
window.addEventListener("resize", () => {
  if (window.innerWidth < 767) {
    footerImg.removeAttribute("src");
    footerImg.setAttribute("src", "./images/bg-pattern-footer-mobile.svg");
  } else if (window.innerHeight > 767) {
    footerImg.removeAttribute("src");
    footerImg.setAttribute("src", "./images/bg-pattern-footer-desktop.svg");
  }
});

//
