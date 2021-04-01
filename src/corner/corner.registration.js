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

CSS.paintWorklet.addModule(`https://konstantin.denerz.com/labs-worklets-futuristic-ui/corner/corner.worklet.js`)
