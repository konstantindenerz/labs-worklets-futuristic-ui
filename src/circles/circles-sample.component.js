import './circles.registration';
import './circles-sample.component.css';

export const circlesSampleComponentFactory = ({value, size, widths, opacities, space}) => {
    const prefix = '--kode-labs-circles-';
    const component = document.createElement('circles-sample');
    component.innerText = value;
    component.style.setProperty('padding', `${size}em`)
    component.style.setProperty(`${prefix}width`, `${widths}`)
    component.style.setProperty(`${prefix}opacity`, `${opacities}`)
    component.style.setProperty(`${prefix}space`, `${space}px`)
    return component;
};
