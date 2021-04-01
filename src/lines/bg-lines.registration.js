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

const {origin, pathname} = window.location;
CSS.paintWorklet.addModule(`${origin}${pathname}lines/bg-lines.worklet.js`)
