import { FC } from 'react'
import './Header.scss'

interface PropsType {}

const Header: FC<PropsType> = ({ ...props }) => {
	return <header className='header'></header>
}

export default Header
