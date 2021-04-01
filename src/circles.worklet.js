class CirclesWorklet {
    static get inputProperties() {
        return ['--kode-labs-circles-width', '--kode-labs-circles-opacity']
    }

    paint(ctx, size, props) {
        const [widthProp, opacityProp] = CirclesWorklet.inputProperties.map(prop => props.get(prop))
        const opacities = opacityProp.toString().trim().split(' ');
        const widths = widthProp.toString().trim().replace(/px/g, '').split(' ');
        const numberOfLines = widths.length;
        const space = 5;
        const diamter = Math.min(size.height, size.width);
        for (let i = 0; i < numberOfLines; i++) {
            const lineWidth =  widths[i];
            const alpha = opacities[i] || '1';
            const radius = diamter / 2 - lineWidth - i * space;
            ctx.beginPath();
            ctx.arc(size.width / 2, size.height / 2, radius, 0, 2 * Math.PI, false);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = `rgba(255,255,255, ${alpha})`;
            ctx.stroke();
        }

    }
}

registerPaint('kode-labs-circles', CirclesWorklet)
