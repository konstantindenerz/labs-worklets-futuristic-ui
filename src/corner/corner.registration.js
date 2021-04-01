CSS.registerProperty({
    name: '--kode-labs-corner-width',
    syntax: '<length>',
    initialValue: '10px',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-corner-length',
    syntax: '<length>',
    initialValue: '40px',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-corner-color',
    syntax: '<color>',
    initialValue: 'rgba(255,255,255,.9)',
    inherits: false
});

const {origin, path} = window.location;
CSS.paintWorklet.addModule(`${origin}${path || '/'}corner/corner.worklet.js`)
