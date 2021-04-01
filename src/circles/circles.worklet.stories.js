import {circlesSampleComponentFactory} from "./circles-sample.component";

export default {
    title: 'Border / Circles',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        value: {
            control: 'range', min: 0, max: 100
        },
        size:{
            control: 'range', min: 1, max: 50
        },
        space:{
            control: 'range', min: 1, max: 50
        }
    }
}


const Template = (args) => {
    return circlesSampleComponentFactory(args);
}

export const Default = Template.bind({})

Default.args = {
    value: 42,
    size: 1.5,
    widths: '1px 1px 2px 4px',
    opacities: '0.1 0.2 0.5 0.6',
    space: 5
}
