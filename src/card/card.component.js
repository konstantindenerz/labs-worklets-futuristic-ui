import './card.component.css';

export const cardComponentFactory = ({text, large, primary}) => {
    import('../lines/bg-lines.registration');
    import('../dots/bg-dots.registration');
    const component = document.createElement('card');
    component.innerText = text;
    if (large) {
        component.setAttribute('labs-xl', '');
    } else {
        component.removeAttribute('labs-xl');
    }
    if (primary) {
        component.setAttribute('labs-primary', '');
    } else {
        component.removeAttribute('labs-primary');
    }
    return component;
}
