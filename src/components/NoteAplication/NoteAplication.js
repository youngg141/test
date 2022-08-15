import React from 'react'
import styles from './NoteAplication.module.scss'

import Form from './Form/Form'
import List from './List/List'

const firstStateArray = []

class NoteAplication extends React.Component {
	state = {
		items: [...firstStateArray],
	}
	addItem = e => {
		e.preventDefault()
		const month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]
		const today = new Date()
		const date = today.getDate() + ' ' + month[today.getMonth() + 1] + ' ' + today.getFullYear()

		const minutes = today.getMinutes()
		const time = today.getHours() + ':' + (minutes < 10 ? '0' + minutes : minutes)

		const currentData = `${date} / ${time}`

		const id = Math.floor(1000 + Math.random() * 9000)

		const newItem = {
			title: e.target[0].value,
			category: e.target[1].value,
			description: e.target[2].value,
			date: currentData,
			id: id,
		}

		this.setState(prevState => ({
			items: [...prevState.items, newItem],
		}))

		e.target.reset()
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<Form submitFn={this.addItem} />
				<div className={styles.break}></div>
				<List items={this.state.items} />
			</div>
		)
	}
}

export default NoteAplication
