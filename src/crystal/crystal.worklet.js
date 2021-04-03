registerPaint('crystal', class CrystalWorklet {
    static get inputProperties() {
        return ['--kode-labs-crystal-spire-size', '--kode-labs-crystal-color', '--kode-labs-crystal-progress']
    }

    paint(ctx, size, props) {
        const [spireSize, color, progress] = CrystalWorklet.inputProperties.map(prop => props.get(prop));
        const length = spireSize.value;
        const space = 8;

        ctx.beginPath();
        ctx.moveTo(0, size.height / 2);
        ctx.lineTo(length, 0);
        ctx.lineTo(size.width - length, 0);
        ctx.lineTo(size.width, size.height / 2);
        ctx.lineTo(size.width - length, size.height);
        ctx.lineTo(length, size.height);
        ctx.lineTo(0, size.height / 2);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.clip();



        if (progress.value) {

            size = {
                width: (size.width - space) * progress.value / 100,
                height: size.height - space
            };

            ctx.beginPath();
            ctx.moveTo(space, size.height / 2 + space / 2);
            ctx.lineTo(length, space);
            ctx.lineTo(size.width - length + space / 2, space);
            ctx.lineTo(size.width - 2, size.height / 2 + space / 2);
            ctx.lineTo(size.width - length + space / 2, size.height);
            ctx.lineTo(length, size.height);
            ctx.lineTo(space, size.height / 2 + space / 2);
            ctx.fillStyle = color;
            ctx.stroke();

            ctx.fill();

        }
    }
})
