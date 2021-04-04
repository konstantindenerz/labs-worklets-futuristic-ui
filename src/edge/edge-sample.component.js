import './edge-sample.component.css';

export const edgeSampleComponentFactory = ({label, direction, marker, lengthAndSliceX}) => {
    import('./edge.registration');
    const prefix = '--kode-labs-edge-';
    const component = document.createElement('edge-sample');
    component.innerText = label;
    component.style.setProperty(`${prefix}direction`, direction);
    component.style.setProperty(`${prefix}marker`, marker);
    component.style.setProperty('border-image-slice', `0 ${lengthAndSliceX}`);
    if (direction === 'to left') {
        component.setAttribute('labs-invert-direction', '');
        component.style.setProperty('border-left-width', `${lengthAndSliceX}px`)
    } else {
        component.removeAttribute('labs-invert-direction');
        component.style.setProperty('border-right-width', `${lengthAndSliceX}px`)
    }
    return component;
}
