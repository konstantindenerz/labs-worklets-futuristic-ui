CSS.registerProperty({
    name: '--kode-labs-bg-lines-gap',
    syntax: '<length>',
    initialValue: '3px',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-bg-lines-color',
    syntax: '<color>',
    initialValue: 'rgba(0,0,0,.12)',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-bg-lines-width',
    syntax: '<length>',
    initialValue: '1px',
    inherits: false
});


CSS.paintWorklet.addModule('src/bg-lines.worklet.js')
