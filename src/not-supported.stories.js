import './support.css';

export default {
    title: '🧙‍♂️Houdini / CSS Paint',
}

const Template = () => {
    const div = document.createElement('div');
    div.classList.add('support')
    return div;
}

export const Support = Template.bind({})
