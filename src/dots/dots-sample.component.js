import './dots-sample.component.css';


export const dotsSampleComponentFactory = ({
                                        label,
                                        radius,
                                        distance,
                                        color,
                                    }) => {
    import('./bg-dots.registration');
    const div = document.createElement('bg-dots');
    div.innerText = label;
    div.style.setProperty('--kode-labs-bg-dots-radius', radius, 'important')
    div.style.setProperty('--kode-labs-bg-dots-distance', distance)
    div.style.setProperty('--kode-labs-bg-dots-color', color)
    return div;
};
