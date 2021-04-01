import './button.component.css';

export const buttonComponentFactory = ({label, primary}) => {
    import('../lines/bg-lines.registration');
    import('../corner/corner.registration');
    const component = document.createElement('button');
    component.innerText = label;
    if (primary) {
        component.setAttribute('labs-primary', '');
    } else {
        component.removeAttribute('labs-primary');
    }

    return component;
}
