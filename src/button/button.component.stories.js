import {buttonComponentFactory} from "./button.component";

export default {
    title: 'Components / Button',
    parameters: {
        layout: 'centered'
    }
}

const Template = (args) => {
    return buttonComponentFactory(args);
}

export const Default = Template.bind({});
Default.args = {
    label: 'Button',
    primary: true
}
