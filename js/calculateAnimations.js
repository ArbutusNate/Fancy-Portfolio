const calculateAnimations = () => {
  let winH = window.innerHeight;
  let fullH = winH * 4;
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
      unit: 'deg'
    },
  ]
}

