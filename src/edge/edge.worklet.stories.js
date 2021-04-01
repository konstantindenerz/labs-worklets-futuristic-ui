import {edgeSampleComponentFactory} from "./edge-sample.component";

export default {
    title: 'Border / Edge',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        direction: {
            control: 'radio',
            options: ['to right', 'to left']
        },
        length: {
            control: 'range', min: 0, max: 100
        }
    }
}

const Template = (args) => {
    return edgeSampleComponentFactory(args);
};

export const Default = Template.bind({});

Default.args = {
    label: 'Edge',
    direction: 'to right',
    length: 40,
}

