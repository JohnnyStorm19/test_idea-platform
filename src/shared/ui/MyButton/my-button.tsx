import clsx from 'clsx'

interface IButton {
    /** Button text. */
    readonly children: string
    /** Icon before text. */
    readonly Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    /** Button disable modifier. */
    readonly disabled?: boolean
    /** Additional styles. */
    readonly className?: string
    /** The function is executed when the button is pressed. */
    readonly onClick?: () => void
}

export const Button = (props: IButton) => {
    const {
        children,
        Icon,
        disabled = false,
        className,
        onClick,
    } = props

    return (
        <button
            type='button'
            onClick={onClick}
            className={clsx(
                'btn-primary',
                disabled && 'btn-disabled',
                className
            )}>
            {Icon && <Icon />}
            {children}
        </button>
    )
}
