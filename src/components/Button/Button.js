import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children, navigation }) => {
	const ButtonClass = navigation ? styles.navigation : styles.button
	return (
		<>
			<button className={ButtonClass}>{children}</button>
		</>
	)
}

export default Button
