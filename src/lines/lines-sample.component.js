import './lines-sample.component.css';

export const linesSampleComponentFactory = ({label, gap, width, color}) => {
    import('./bg-lines.registration');
    const component = document.createElement('bg-lines')
    const prefix = '--kode-labs-bg-lines-';
    component.innerText = label;
    const {style} = component;
    style.setProperty(`${prefix}gap`, `${gap}px`)
    style.setProperty(`${prefix}width`, `${width}px`)
    style.setProperty(`${prefix}color`, color)
    return component;
}
