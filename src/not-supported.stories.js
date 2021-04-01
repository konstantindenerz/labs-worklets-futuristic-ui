export default {
    title: '🧙‍♂️Houdini / CSS Paint',
}

const Template = () => {
    return !!window.chrome ? '✨🧙‍♂️🎉' : 'This is not the browser you are looking for 🤷‍♂';
}

export const Support = Template.bind({})
