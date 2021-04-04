import {edgeSampleComponentFactory} from "./edge-sample.component";

export default {
    title: 'Paint Worklet / Border / Edge',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        direction: {
            control: 'radio',
            options: ['to right', 'to left']
        },
        marker: {
            control: 'radio',
            options: ['circle', 'square', 'no marker']
        },
        lengthAndSliceX: {
            control: 'range', min: 0, max: 400, step: 350
        },
    }
}

const Template = (args) => {
    return edgeSampleComponentFactory(args);
};

export const Default = Template.bind({});

Default.args = {
    marker: 'circle',
    label: 'Edge',
    direction: 'to right',
    lengthAndSliceX: 40,
}

