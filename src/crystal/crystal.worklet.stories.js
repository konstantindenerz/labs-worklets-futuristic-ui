import './crystal.component.css';

export default {
    title: 'Paint Worklet / Background / Crystal',
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        spireSize: {
            control: 'range'
        },
        progress: {
            control: 'range'
        },
        color: {
            control: 'color'
        }
    }
}

const Template = ({color, spireSize, progress}) => {
    import('./crystal.registration');
    const component = document.createElement('crystal');
    const prefix = '--kode-labs-crystal-';
    component.innerHTML= `<span>${progress}%</span>`;
    component.style.setProperty(`${prefix}color`, color);
    component.style.setProperty(`${prefix}spire-size`, `${spireSize}px`);
    component.style.setProperty(`${prefix}progress`, `${progress}`);
    return component;
};

export const Default = Template.bind({});
Default.args = {
    color: 'rgba(255,255,255,0.6)',
    spireSize: 30,
    progress: 42
}

