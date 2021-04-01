import './edge-sample.component.css';

export const edgeSampleComponentFactory = ({label, length, direction}) => {
    import('./edge.registration');
    const prefix = '--kode-labs-edge-';
    const component = document.createElement('edge-sample');
    component.innerText = label;
    component.style.setProperty(`${prefix}direction`, `${direction}`);
    if (direction === 'to left') {
        component.setAttribute('labs-invert-direction', '');
        component.style.setProperty('border-left-width', `${length}px`)
    } else {
        component.removeAttribute('labs-invert-direction');
        component.style.setProperty('border-right-width', `${length}px`)
    }
    return component;
}
