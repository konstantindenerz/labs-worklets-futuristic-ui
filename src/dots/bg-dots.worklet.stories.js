import {dotsSampleComponent} from "./dots-sample.component";

export default {
    title: 'Background / Dots',
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        color: {control: 'color'}
    }
}

const Template = ((args) => {
    return dotsSampleComponent(args)
});

export const Default = Template.bind({});
Default.args = {
    label: 'Content',
    radius: 2,
    distance: 40,
    color: 'rgba(255,255,255,.1)'
}

