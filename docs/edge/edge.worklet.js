class EdgeWorklet {
    static get inputProperties() {
        return ['--kode-labs-edge-direction', '--kode-labs-edge-width']
    }

    paint(ctx, size, props) {
        const [directionProp, width] = EdgeWorklet.inputProperties.map(prop => props.get(prop));
        const direction = directionProp.toString().trim().toLowerCase();
        console.log(width);
        ctx.beginPath();
        if (direction === 'to right') {
            ctx.moveTo(size.width / 2, size.height / 2);
            ctx.lineTo(size.width, size.height / 2);
        }else if(direction === 'to left') {
            ctx.moveTo(0, size.height / 2);
            ctx.lineTo(size.width / 2, size.height / 2);
        }
        ctx.strokeStyle = 'rgba(255,255,255,.20)';
        ctx.strokeWidth = width.value;
        ctx.stroke();
    }
}

registerPaint('kode-labs-edge', EdgeWorklet);
