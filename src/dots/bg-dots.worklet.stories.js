import {dotsSampleComponentFactory} from "./dots-sample.component";

export default {
    title: 'Paint Worklet / Background / Dots',
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        color: {control: 'color'},
        radius: {
            control: 'range',
            min: 1,
            step: 1,
            max: 100,
        },
        distance: {
            control: 'range',
            min: 10,
            step: 1,
            max: 100,
        },
    }
}

const Template = ((args) => {
    return dotsSampleComponentFactory(args)
});

export const Default = Template.bind({});
Default.args = {
    label: 'Dots',
    radius: 2,
    distance: 40,
    color: 'rgba(255,255,255,.1)'
}

