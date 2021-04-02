CSS.registerProperty({
    name: '--kode-labs-circles-width',
    syntax: '<length>+',
    initialValue: '1px 1px 2px 4px',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-circles-opacity',
    syntax: '<number>+',
    initialValue: '.1 .2 .5 .6',
    inherits: false
});

CSS.registerProperty({
    name: '--kode-labs-circles-space',
    syntax: '<length>',
    initialValue: '5px',
    inherits: false
});

CSS.paintWorklet.addModule(`circles/circles.worklet.js`)
