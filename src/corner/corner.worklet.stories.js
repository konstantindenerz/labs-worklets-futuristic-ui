import {cornerSampleComponentFactory} from './corner-sample.component';

export default {
    title: 'Paint Worklet / Border / Corner',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        width: {
            control: 'range',
        },
        length: {
            control: 'range',
        },
        color: {
            control: 'color'
        }
    }
}

const Template = (args) => {
    return cornerSampleComponentFactory(args);
}

export const Default = Template.bind({});
Default.args = {
    label: 'Corner',
    width: 10,
    length: 40,
    color: 'rgba(255,255,255,.9)',
}
