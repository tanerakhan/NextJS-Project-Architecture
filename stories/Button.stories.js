import React from 'react'

import Button from '../components/FormElements/Button'

export default {
    title: 'Butonlar',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    type: 'default',
    text: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
    text: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    type: 'secondary',
    text: 'Second',
}

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true,
    text: 'Disable',
}
