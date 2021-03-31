class CornerWorklet {
    static get inputProperties() {
        return [
            '--kode-labs-corner-width',
            '--kode-labs-corner-length',
            '--kode-labs-corner-color'
        ]
    }

    paint(ctx, size, props) {
        const [widthProp, lengthProp, color] = CornerWorklet.inputProperties.map(prop => props.get(prop));
        const width = widthProp.value;
        const length = lengthProp.value;

        ctx.beginPath();
        ctx.moveTo(0, length);
        ctx.lineTo(0, 0);
        ctx.lineTo(length, 0);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(size.width - length, 0);
        ctx.lineTo(size.width, 0);
        ctx.lineTo(size.width, length);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(size.width, size.height - length);
        ctx.lineTo(size.width, size.height);
        ctx.lineTo(size.width - length, size.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, size.height - length);
        ctx.lineTo(0, size.height);
        ctx.lineTo(length, size.height);
        ctx.stroke();
    }
}

registerPaint('kode-labs-corner', CornerWorklet)
