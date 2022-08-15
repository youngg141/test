import React from 'react'
import styles from './List.module.scss'

import Title from '../../Title/Title'
import ListItem from './ListItem/ListItem'

const List = ({ items }) => (
	<>
		{items.length ? (
			<div className={styles.wrapper}>
				<Title>your notes</Title>
				{items.map(item => (
					<ListItem key={item.id} {...item} />
				))}
			</div>
		) : (
			<div className={styles.wrapper}>
				<Title>your notes</Title>
				<p>Add at least two notes to see the full appearance of the app 😍</p>
			</div>
		)}
	</>
)

export default List
