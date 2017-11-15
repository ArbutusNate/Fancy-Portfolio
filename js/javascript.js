// DECLARE VARIABLES
let winOffset = window.pageYOffset;

//Set Up Animationss
  let choreographer = new Choreographer({
    //Imported from calculateAnimations.js
    animations: calculateAnimations()
  })
  $(document).ready(function(){
    window.addEventListener('scroll', function() {
      choreographer.runAnimationsAt(window.pageYOffset);
    });
  });