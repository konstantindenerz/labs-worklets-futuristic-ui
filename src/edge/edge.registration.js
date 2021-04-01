const {origin, pathname} = window.location;
CSS.paintWorklet.addModule(`${origin}${pathname}edge/edge.worklet.js`)
