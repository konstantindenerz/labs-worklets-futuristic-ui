registerPaint('crystal', class CrystalWorklet {
    static get inputProperties() {
        return ['--kode-labs-crystal-color', '--kode-labs-crystal-progress']
    }

    paint(ctx, size, props) {
        const [color, progress] = CrystalWorklet.inputProperties.map(prop => props.get(prop));

        const outerCrystal = {width: size.width, height: size.height, x: 0, y: 0, spireLength: size.height / 2};
        this.drawCrystal(ctx, outerCrystal, color);

        const nestedSpace = 8;
        const innerCrystal = {
            width: outerCrystal.width - nestedSpace * 2 - nestedSpace,
            height: outerCrystal.height - nestedSpace * 2,
            x: outerCrystal.x + nestedSpace + nestedSpace / 2,
            y: outerCrystal.y + nestedSpace,
            spireLength: outerCrystal.spireLength - nestedSpace
        };
        this.drawCrystal(ctx, innerCrystal, 'transparent', true);

        if (progress.value) {
            const fillCrystal = Object.assign({}, innerCrystal, {width: innerCrystal.width * progress.value / 100});
            this.drawCrystal(ctx, fillCrystal, color, true, true);
        }
    }

    drawCrystal(ctx, {width, height, x, y, spireLength}, color, clip, fill) {
        ctx.beginPath();
        const x1 = x + spireLength;
        const x3 = x + width;
        const x2 = x3 - spireLength;

        const y1 = y + height / 2;
        const y2 = y + height;

        ctx.moveTo(x, y1);
        ctx.lineTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.lineTo(x3, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x1, y2);
        if (clip) {
            ctx.clip();
        }
        ctx.closePath();
        if (fill) {
            ctx.fillStyle = color;
            ctx.fill();
        } else {
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
})
