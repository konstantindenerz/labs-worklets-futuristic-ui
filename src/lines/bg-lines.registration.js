CSS.registerProperty({
    name: '--kode-labs-bg-lines-gap',
    syntax: '<length>',
    initialValue: '3px',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-bg-lines-color',
    syntax: '<color>',
    initialValue: 'rgba(0,0,0,.20)',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-bg-lines-width',
    syntax: '<length>',
    initialValue: '1px',
    inherits: false
});

const {origin, path} = window.location;
CSS.paintWorklet.addModule(`${origin}${path || '/'}lines/bg-lines.worklet.js`)
