CSS.registerProperty({
    name: '--kode-labs-bg-dots-radius',
    syntax: '<length>',
    initialValue: '2px',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-bg-dots-color',
    syntax: '<color>',
    initialValue: 'rgba(255,255,255,.1)',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-bg-dots-distance',
    syntax: '<length>',
    initialValue: '40px',
    inherits: false
});


CSS.paintWorklet.addModule('src/bg-dots.worklet.js')
