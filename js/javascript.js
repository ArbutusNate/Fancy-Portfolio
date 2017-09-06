function calculateAnimations() {
  var winH = window.innerHeight;
  var fullH = winH * 4;
  return [
  // animate rings //
    { range: [-1, fullH],
      selectors: ['#namebox-outer-ring'],
      type: 'scale',
      style: 'transform:rotateZ',
      from: 0, to: -360,
      unit: 'deg'
    },
    { range: [-1, fullH],
      selectors: ['#namebox'],
      type: 'scale',
      style: 'transform:rotateZ',
      from: 0, to: 980,
      unit: 'deg'
    },
    { range: [-1, fullH],
      selectors: ['.brand'],
      type: 'scale',
      style: 'transform:rotateZ',
      //stationary name
      from: 0, to: -620,
      //for slow, downward rotation
      // from: 0, to: -510,
      unit: 'deg'
    },
    // Rotates the main Carousel
    { range: [-1, fullH],
      selectors: ['.carousel'],
      type: 'scale',
      style: 'transform:rotateZ',
      from: 0, to: -360,
      unit: 'deg'
    },
    // Counter-rotates the Content
    { range: [-1, fullH],
      selectors: ['.car-cont'],
      type: 'scale',
      style: 'transform:rotateZ',
      from: 0, to: 360,
      unit: 'deg'
    },
    // info-box
    { range: [winH * .1, winH * .6],
      selectors: ['#info-box'],
      type: 'scale',
      style: 'opacity',
      from: 1, to: 0
    },
    // port-box
    { range: [-1, winH * .7],
      selectors: ['#port-box'],
      type: 'scale',
      style: 'opacity',
      from: 0, to: 1
    },
    { range: [winH * .9, winH * 1.3],
      selectors: ['#port-box'],
      type: 'scale',
      style: 'opacity',
      from: 1, to: 0
    },
    // social-box
    { range: [-1, winH * .8],
      selectors: ['#social-box'],
      type: 'scale',
      style: 'opacity',
      from: 0, to: 0
    },
    { range: [winH * .81, winH * 1.2],
      selectors: ['#social-box'],
      type: 'scale',
      style: 'opacity',
      from: 0, to: 1
    },
    { range: [winH * 1.4, winH * 1.9],
      selectors: ['#social-box'],
      type: 'scale',
      style: 'opacity',
      from: 1, to: 0
    }
  ]
}

