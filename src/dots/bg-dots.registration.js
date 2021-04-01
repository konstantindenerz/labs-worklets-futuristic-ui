CSS.registerProperty({
    name: '--kode-labs-bg-dots-radius',
    syntax: '<number>',
    initialValue: '2',
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
    syntax: '<number>',
    initialValue: '40',
    inherits: false
});

const {origin, path} = window.location;
CSS.paintWorklet.addModule(`${origin}${path || '/'}dots/bg-dots.worklet.js`)
