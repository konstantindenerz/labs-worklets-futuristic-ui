import './corner.registration'
import './corner-sample.component.css';

export const cornerSampleComponentFactory = ({label, color, width, length}) => {
    const prefix = '--kode-labs-corner-'
    const component = document.createElement('corner-sample');
    component.innerText = label;
    component.style.setProperty(`${prefix}width`, `${width}px`)
    component.style.setProperty(`${prefix}length`, `${length}px`)
    component.style.setProperty(`${prefix}color`, color)
    return component;
}
