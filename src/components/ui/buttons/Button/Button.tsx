import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import './Button.scss'

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode | string
	variant?: 'yellow'
}

const Button: FC<PropsType> = ({ variant = 'yellow', children, ...props }) => {
	return (
		<button className={`button button_${variant}`} {...props}>
			{children}
		</button>
	)
}

export default Button
