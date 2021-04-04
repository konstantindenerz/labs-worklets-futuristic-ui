class EdgeWorklet {
    static get inputProperties() {
        return ['--kode-labs-edge-direction', '--kode-labs-edge-width', '--kode-labs-edge-marker']
    }

    paint(ctx, size, props) {
        const [directionProp, width, marker] = EdgeWorklet.inputProperties.map(prop => props.get(prop));
        const color = 'rgba(255,255,255,.20)';
        const defaultMarkerSize = 10;
        const markerType = marker.toString().trim().toLowerCase();
        ctx.strokeStyle = color;
        ctx.strokeWidth = width.value;
        const markerTypes = new Map(Object.entries({
            circle: () => {
                const r = defaultMarkerSize / 2;
                ctx.beginPath();
                if (direction === 'to right') {
                    ctx.arc(size.width - r, size.height / 2, r, 0, 2 * Math.PI, true);
                } else if (direction === 'to left') {
                    ctx.arc(r, size.height / 2, r, 0, 2 * Math.PI, true);
                }
                ctx.stroke();
            },
            square: () => {
                ctx.beginPath();
                const yCenter = size.height / 2 - defaultMarkerSize / 2;
                if (direction === 'to right') {
                    ctx.strokeRect(size.width - defaultMarkerSize, yCenter, defaultMarkerSize, defaultMarkerSize);
                } else if (direction === 'to left') {
                    ctx.strokeRect(0, yCenter, defaultMarkerSize, defaultMarkerSize);
                }
                ctx.stroke();
            }
        }));
        const direction = directionProp.toString().trim().toLowerCase();
        const hasMarker = markerTypes.has(markerType);
        if (hasMarker) {
            markerTypes.get(markerType)();
        }
        const markerSize = hasMarker ? 10 : 0;
        ctx.beginPath();
        if (direction === 'to right') {
            ctx.moveTo(0, size.height / 2);
            ctx.lineTo(size.width - 10, size.height / 2);
        } else if (direction === 'to left') {
            ctx.moveTo(markerSize, size.height / 2);
            ctx.lineTo(size.width, size.height / 2);
        }

        ctx.stroke();

    }
}

registerPaint('kode-labs-edge', EdgeWorklet);
