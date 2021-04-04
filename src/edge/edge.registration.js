CSS.registerProperty({
    name: '--kode-labs-edge-marker-size',
    syntax: '<length>',
    initialValue: '12px',
    inherits: false
});

CSS.paintWorklet.addModule(`edge/edge.worklet.js`)
