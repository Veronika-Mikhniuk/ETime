import { IButtonProps } from './IButtonProps'
import { BaseButton } from '@/components/styled/buttons'
import { SecondaryButton } from '@/components/styled/buttons'

export const Button = ({
    variant = 'primary',
    className,
    children,
    ...props
}: IButtonProps) => {
    if (variant === 'secondary') {
        return (
            <SecondaryButton
                variant='contained'
                className={className}
                {...props}
            >
                {children}
            </SecondaryButton>
        )
    }

    return (
        <BaseButton
            className={className}
            {...props}
        >
            {children}
        </BaseButton>
    )
}