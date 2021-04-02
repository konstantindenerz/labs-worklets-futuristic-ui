import {linesSampleComponentFactory} from "./lines-sample.component";

export default {
    title: 'Paint Worklet / Background / Lines',
    parameters:{
        layout: 'fullscreen'
    },
    argTypes: {
        color: {control: 'color'},
        width: {
            control: 'range',
            min: 1,
            step: 1,
            max: 100,
        },
        gap: {
            control: 'range',
            min: 1,
            step: 1,
            max: 100,
        }
    }
}


const Template = (args) => {
    return linesSampleComponentFactory(args);
}

export const Default = Template.bind({});
Default.args = {
    label: 'Lines',
    color: 'rgba(0,0,0,.20)',
    width: 1,
    gap: 3
}
