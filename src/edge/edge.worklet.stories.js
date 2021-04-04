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
            control: 'range',
        },
        markerSize: {
            control: 'range'
        },
    }
}

const Template = (args) => {
    return edgeSampleComponentFactory(args);
};

export const Default = Template.bind({});

Default.args = {
    marker: 'circle',
    markerSize: 12,
    label: 'Edge',
    direction: 'to right',
    lengthAndSliceX: 40,
}

