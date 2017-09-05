function calculateAnimations() {
  return [
  // animate rings //
    { range: [-1, window.innerHeight * 6],
      selectors: ['#namebox-outer-ring'],
      type: 'scale',
      style: 'transform:rotateZ',
      from: 0, to: -360,
      unit: 'deg'
    },
    { range: [-1, window.innerHeight * 6],
      selectors: ['#namebox'],
      type: 'scale',
      style: 'transform:rotateZ',
      from: 0, to: 980,
      unit: 'deg'
    },
    { range: [-1, window.innerHeight * 6],
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
    { range: [-1, window.innerHeight * 6],
      selectors: ['.carousel'],
      type: 'scale',
      style: 'transform:rotateZ',
      from: 0, to: -360,
      unit: 'deg'
    },
    // Counter-rotates the Content
    { range: [-1, window.innerHeight * 6],
      selectors: ['.car-cont'],
      type: 'scale',
      style: 'transform:rotateZ',
      from: 0, to: 360,
      unit: 'deg'
    },
  ]
}

