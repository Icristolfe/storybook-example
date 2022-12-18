import Button, { ButtonProps } from '.'
import { Story } from '@storybook/react'

export default {
    title: 'Buttons/Button',
    component: Button,
    argTypes: {
        variant: {
            // defaultValue: 'primary',
            control: {
                type : 'select',
                values: ['primary', 'secondary', 'outline']
            }
        }
    }
}

export const Primary: Story<ButtonProps> = (args) => (
    <Button {...args}>Primary button</Button>
)

export const Secondary: Story<ButtonProps> = (args) => (
    <Button {...args}>Secondary button</Button>
)

export const Outline: Story<ButtonProps> = (args) => (
    <Button {...args}>Outline button</Button>
)


Secondary.args ={
    variant: 'secondary'
}

Outline.args ={
    variant: 'outline'
}