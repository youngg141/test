import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss'
import './important.css'

const ListItem = ({ title, category, description, date, id }) => {
	const removeItem = e => {
		e.target.parentElement.parentElement.remove()
	}

	const importantItem = e => {
		const importantButton = e.target.parentElement.children[0]
		importantButton.classList.toggle('weight')
		const importantItem = e.target.parentElement.parentElement
		importantItem.classList.toggle('background')
	}
	return (
		<div className={styles.item}>
			<div className={styles.titleWrapper}>
				<p className={styles.title}>
					<span className={styles.title}>{title}</span> - <span className={styles.category}>{category}</span>
					<span className={styles.date}>{date}</span>
				</p>
			</div>
			<div className={styles.descriptionWrapper}>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.options}>
				<button onClick={importantItem}>important</button>
				<button onClick={removeItem}>delete</button>
				<p className={styles.id}>id: {id}</p>
			</div>
		</div>
	)
}

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default ListItem
