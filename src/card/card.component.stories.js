import {cardComponentFactory} from "./card.component";

export default {
    title: 'Components / Card',
    parameters: {
        layout: 'centered'
    }
}

const Template = (args) => {
    return cardComponentFactory(args);
}

export const Large = Template.bind({})
Large.args = {
    text: 'primary, large',
    large: true,
    primary: true,
}

export const Default = Template.bind({})
Default.args = {
    text: 'Default',
    large: false,
    primary: false,
}
