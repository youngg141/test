import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({ tag: Tag, name, labelName, maxLength, ...props }) => (
	<div className={styles.formItem}>
		<label className={styles.label} htmlFor={name}>
			{labelName}
		</label>
		<Tag
			className={Tag === 'textarea' ? styles.textarea : styles.input}
			type='text'
			name={name}
			maxLength={maxLength}
			placeholder=' '
			required
			{...props}
		/>
	</div>
)

Input.propTypes = {
	name: PropTypes.string.isRequired,
	labelName: PropTypes.string.isRequired,
	maxLength: PropTypes.number,
}

Input.defaultProps = {
	maxLength: 3000,
	tag: 'input',
}

export default Input
