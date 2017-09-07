// DECLARE VARIABLES
let pIndex = 0;
let isScrolling = false;
let clicked = false;
let winOffset = window.pageYOffset;
let pageIndex = [0, 450, 795, 1930];

//Set Up Animationss
let choreographer = new Choreographer({
  //Imported from calculateAnimations.js
  animations: calculateAnimations()
})


let animateScrolling = (destPage, optTimer) => {
  console.log('scrolling to ' + destPage);
  $('body').animate({ scrollTop: destPage }, optTimer || 2000, myCallback);
};

function myCallback() {
  isScrolling = false;
  console.log("isScrolling now set to False")
  return
}

let scrollDecider = () => {
  winOffset = window.pageYOffset;
      if(pIndex === 0 && winOffset > 3 && winOffset < 431) {
        pIndex = 1;
        isScrolling = true;
        return animateScrolling(pageIndex[pIndex]);
      }
      if(pIndex === 1 && winOffset < pageIndex[pIndex]) {
        pIndex = 0;
        isScrolling = true;
        return animateScrolling(pageIndex[pIndex]);
      }
      if(pIndex === 1 && winOffset > pageIndex[pIndex]) {
        pIndex = 2;
        isScrolling = true;
        return animateScrolling(pageIndex[pIndex]);
      }
      if(pIndex === 2 && winOffset < pageIndex[pIndex]) {
        pIndex = 1;
        isScrolling = true;
        return animateScrolling(pageIndex[pIndex]);
      }
      if(pIndex === 2 && winOffset > pageIndex[pIndex]) {
        pIndex = 3;
        isScrolling = true;
        return animateScrolling(pageIndex[pIndex]);
      }
      if(pIndex === 3 && winOffset < pageIndex[pIndex]) {
        pIndex = 2;
        isScrolling = true;
        return animateScrolling(pageIndex[pIndex]);
      }
    // } else {
    //   console.log("still scrolling...")
    // }
}

// function throttle(fn, wait) {
//   var time = Date.now();
//   return function() {
//     if ((time + wait - Date.now()) < 0) {
//       fn();
//       time = Date.now();
//     }
//   }
// }

// window.addEventListener('scroll', throttle(scrollDecider, 2100));
$(document).ready(function(){
  isScrolling = true;
  clicked = true;
  $('body').animate({ scrollTop: 0 }, function(){
    isScrolling = false;
    clicked = false;
  });
  window.addEventListener('scroll', function() {
    choreographer.runAnimationsAt(window.pageYOffset);
    if(!isScrolling && !clicked){
      console.log("scrollDecider running, isScrolling set to true. pIndex = " + pIndex);
      return scrollDecider();
    }
  });
});




// $('.brand-text').on("click", () => {
//   console.log("clicked");
//   pIndex = 0;
//   setTimeout(isScrolling = true, 2100)
//   return animateScrolling(pageIndex[pIndex], 2100);
// })

$('#nav-info').on("click", () => {
  pIndex = 0;
  clicked = true;
  isScrolling = true;
  // console.log("clicked")
  setTimeout(afterTimeout, 2200)
  return animateScrolling(pageIndex[pIndex], 3000);
})

$('#nav-port').on("click", () => {
  pIndex = 1;
  clicked = true;
  isScrolling = true;
  // console.log("clicked")
  setTimeout(afterTimeout, 2200)
  return animateScrolling(450, 3000);
})

$('#nav-cont').on("click", () => {
  pIndex = 2;
  clicked = true;
  isScrolling = true;
  // console.log("clicked")
  setTimeout(afterTimeout, 2200)
  return animateScrolling(pageIndex[pIndex], 3000);
})

function afterTimeout(){
  return clicked = false;
}
