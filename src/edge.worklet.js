class EdgeWorklet {
    static get inputProperties() {
        return ['--kode-labs-edge-direction']
    }

    paint(ctx, size, props) {
        const direction = props.get('--kode-labs-edge-direction').toString().trim().toLowerCase();
        ctx.beginPath();
        if (direction === 'to right') {
            ctx.moveTo(size.width / 2, size.height / 2);
            ctx.lineTo(size.width, size.height / 2);
        }else if(direction === 'to left') {
            ctx.moveTo(0, size.height / 2);
            ctx.lineTo(size.width / 2, size.height / 2);
        }
        ctx.strokeStyle = 'rgba(255,255,255,.20)';
        ctx.strokeWidth = 1;
        ctx.stroke();
    }
}

registerPaint('kode-labs-edge', EdgeWorklet);
