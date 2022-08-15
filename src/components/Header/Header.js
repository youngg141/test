import React from 'react'
import styles from './Header.module.scss'

import Navigation from '../../components/Header/Navigation/Navigation'
import Button from '../Button/Button'

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.logo}>logo</h1>
			<Navigation />
			<Button navigation>buy premium version</Button>
		</div>
	)
}

export default Header
