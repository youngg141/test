import React from 'react'
import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<ul className={styles.navList}>
			<li className={styles.navItem}>
				<NavLink className={({ isActive }) => (isActive ? styles.navItemLinkActive : styles.navItemLink)} to='/'>
					aplication
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink className={({ isActive }) => (isActive ? styles.navItemLinkActive : styles.navItemLink)} to='/aboutus'>
					about us
				</NavLink>
			</li>
		</ul>
	)
}

export default Navigation
