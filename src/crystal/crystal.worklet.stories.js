import './crystal.component.css';

export default {
    title: 'Paint Worklet / Background / Crystal',
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        progress: {
            control: 'range'
        },
        color: {
            control: 'color'
        }
    }
}

const Template = ({color, progress}) => {
    import('./crystal.registration');
    const component = document.createElement('crystal');
    const prefix = '--kode-labs-crystal-';
    component.innerHTML= `<span>${progress}%</span>`;
    component.style.setProperty(`${prefix}color`, color);
    component.style.setProperty(`${prefix}progress`, `${progress}`);
    return component;
};

export const Default = Template.bind({});
Default.args = {
    color: 'rgba(255,255,255,0.8)',
    progress: 42
}

