CSS.registerProperty({
    name: '--kode-labs-crystal-color',
    syntax: '<color>',
    initialValue: 'rgba(255,255,255,.9)',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-crystal-progress',
    syntax: '<number>',
    initialValue: '0',
    inherits: false
});

CSS.paintWorklet.addModule('crystal/crystal.worklet.js')
