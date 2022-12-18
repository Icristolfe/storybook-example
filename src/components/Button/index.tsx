import { Container, variantToColors } from './style'
export type ButtonProps = {
    children: string,
    variant?: 'primary' | 'secondary' | 'outline'
}

export type ContainerProps = {
    bgColor: string,
    color: string,
    borderColor: string,
    hoverBgColor: string,
    hoverColor: string
}

function Button({ children, variant = 'primary' }: ButtonProps) {
    const { bgColor, borderColor, color, hover } = variantToColors[variant]

    return (
        <Container
            bgColor={bgColor}
            color={color}
            borderColor={borderColor}
            hoverBgColor={hover.bgColor}
            hoverColor={hover.color}>
            {children}
        </Container>
    )
}

export default Button