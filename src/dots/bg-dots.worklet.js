class BgDotsWorklet {
    static get inputProperties() {
        return [
            '--kode-labs-bg-dots-radius',
            '--kode-labs-bg-dots-distance',
            '--kode-labs-bg-dots-color'
        ];
    }

    paint(ctx, {width, height}, props) {
        const [radius, distanceProp, color] = BgDotsWorklet.inputProperties.map(prop => props.get(prop));
        const distance = distanceProp.value || 10;
        for (let x = 0; x < Math.round(width / distance); x++) {
            for (let y = 0; y < Math.round(height / distance); y++) {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arc(distance * x, distance * y, radius.value || 0, 0, 2 * Math.PI, true);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

    }
}

registerPaint('kode-labs-bg-dots', BgDotsWorklet);
