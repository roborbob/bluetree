/** @format */

if (typeof window) {
  const scrollOne = document.querySelector(".mask");
  const scrollTwo = document.querySelector(".reveal");
  const scrollThree = document.querySelector(".third");
  const scrollFour = document.querySelector(".fourth");
  const Ball = document.getElementById("ball");

  //   console.log(scrollOne.getBoundingClientRect(), scrollTwo.offsetTop);
  window.addEventListener("scroll", () => {
    let height = scrollOne.getBoundingClientRect().height;
    let top = scrollOne.getBoundingClientRect().top * -1;
    if (height < top) {
      console.log("working");
      scrollTwo.style.top = "100vh";
      scrollTwo.style.position = "absolute";
    }
  });
  const Observer = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting) {
      //   entry[0].target.style.position = "absolute";
    } else {
      //   entry[0].target.style.position = "relative";
    }
  });
  //   ScrollEls.forEach((e) => Observer.observe(e));
  Observer.observe(scrollTwo);
}
