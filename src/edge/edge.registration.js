const {origin, path} = window.location;
CSS.paintWorklet.addModule(`${origin}${path || '/'}edge/edge.worklet.js`)
