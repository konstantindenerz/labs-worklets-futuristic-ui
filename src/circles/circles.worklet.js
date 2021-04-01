class CirclesWorklet {
    static get inputProperties() {
        return ['--kode-labs-circles-width', '--kode-labs-circles-opacity', '--kode-labs-circles-space']
    }

    paint(ctx, size, props) {
        const [widths, opacities, [space]] = CirclesWorklet.inputProperties.map(prop => props.getAll(prop))
        const numberOfLines = widths.length;
        const diameter = Math.min(size.height, size.width);
console.log(space)
        for (let i = 0; i < numberOfLines; i++) {
            if(!widths[i] || !opacities[i]){
                continue;
            }
            const lineWidth = widths[i].value;
            const alpha = opacities[i].value || '1';
            const radius = Math.max(1, diameter / 2 - lineWidth - i * space.value);
            ctx.beginPath();
            ctx.arc(size.width / 2, size.height / 2, radius, 0, 2 * Math.PI, false);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = `rgba(255,255,255, ${alpha})`;
            ctx.stroke();
        }

    }
}

registerPaint('kode-labs-circles', CirclesWorklet)
