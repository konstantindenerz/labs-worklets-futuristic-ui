import './dots-sample.component.css';

import('./bg-dots.registration');

export const dotsSampleComponent = ({
                                        label,
                                        radius,
                                        distance,
                                        color,
                                    }) => {
    const div = document.createElement('bg-dots');
    div.innerText = label;
    div.style['--kode-labs-bg-dots-distance'] = '20px';
    div.style.setProperty('--kode-labs-bg-dots-radius', radius, 'important')
    div.style.setProperty('--kode-labs-bg-dots-distance', distance)
    div.style.setProperty('--kode-labs-bg-dots-color', color)
    return div;
};
