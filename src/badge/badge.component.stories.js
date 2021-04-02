import {badgeComponentFactory} from "./badge.component";

export default {
    title: 'Components / Badge',
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        value: {
            control: 'range'
        }
    }
}

const Template = (args) => {
    return badgeComponentFactory(args);
}

export const Default = Template.bind({});
Default.args = {
    value: 42,
}
