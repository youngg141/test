import React from 'react'
import styles from './Form.module.scss'

import Input from './Input'
import Button from '../../Button/Button'
import Title from '../../Title/Title'

const Form = ({ submitFn }) => (
	<form className={styles.wrapper} onSubmit={submitFn}>
		<Title>add your note</Title>
		<Input name='title' labelName='title' maxLength={20} />
		<Input name='category' labelName='category' maxLength={20} />
		<Input tag='textarea' name='description' labelName='description' />
		<Button>add to list</Button>
	</form>
)

export default Form