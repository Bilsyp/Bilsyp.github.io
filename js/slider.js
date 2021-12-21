const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const backward = document.querySelector(".backward")
const forward = document.querySelector(".forward")
let arr = [box1, box2, box3];
let num = 0;

function reset() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  arr[0].style.display = "inline-block"
  const Time = setInterval(() => {
    if (num == arr.length - 1) {
      num = -1;

    }
    slideRight()
  }, 5000)
}

function slideLeft() {
  reset()
  arr[num - 1].style.display = "inline-block"
  num--;
}

function slideRight() {
  reset()
  arr[num + 1].style.display = "inline-block";
  num++;
}
backward.addEventListener("click", () => {
  if (num == 0) {
    num = arr.length;
  }
  slideLeft()
})
forward.addEventListener("click", () => {
  if (num == arr.length - 1) {
    num = -1;

  }
  slideRight();
})
startSlide();