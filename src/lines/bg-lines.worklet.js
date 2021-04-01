class BackgroundLinesWorklet {
    static get inputProperties() {
        return [
            '--kode-labs-bg-lines-gap',
            '--kode-labs-bg-lines-color',
            '--kode-labs-bg-lines-width'
        ]
    }

    paint(ctx, size, props) {
        const [gap, color, width] = BackgroundLinesWorklet.inputProperties.map(prop => props.get(prop));
        const strokeWidth = width.value;
        const count = Math.round(size.height / strokeWidth + gap.value);
        let y = gap.value;
        for (let i = 0; i < count; i++) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(size.width, y);
            ctx.strokeStyle = color;
            ctx.lineWidth = strokeWidth;
            ctx.stroke();
            y += gap.value + strokeWidth;
        }
    }
}

registerPaint('kode-labs-bg-lines', BackgroundLinesWorklet)
