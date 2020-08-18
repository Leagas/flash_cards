import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

import { useStore } from "../../container"

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const Form = styled.form`
	max-width: 1000%;
	padding: 10px;
`

const Label = styled.label`
	display: block;
	width: 250px;
	margin: 0 0 10px 0;
`

const Input = styled.input`
	display: block;
	width: 250px;
	margin: 0 0 10px 0;
`

const Select = styled.select`
	display: block;
	width: 100%;
	margin: 0 0 10px 0;
`

const Button = styled.button`
	width: 100%;
`

export const Admin = observer(() => {
	const { admin } = useStore()

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault()
		admin.submit()
	}

	const form = admin.form.$

	return (
		<Container>
			<Form>
				<Input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => form.question.onChange(e.target.value)}
					value={form.question.value}
					type="text"
					id="question"
					name="question"
					placeholder="Question"
				/>
				<Input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => form.answer.onChange(e.target.value)}
					value={form.answer.value}
					type="text"
					id="answer"
					name="answer"
					placeholder="Answer"
				/>
				<Select
					onChange={(e: React.ChangeEvent<HTMLSelectElement>) => form.topic.onChange(e.target.value)}
					value={form.topic.value}
					id="topic"
					name="topic"
					placeholder="Select Topic"
				></Select>
				<Label htmlFor="image">Choose a reference image:</Label>
				<Input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => form.image.onChange(e.target.value)}
					value={form.image.value}
					type="file"
					id="image"
					name="image"
					accept="image/png, image/jpeg"
				/>
				<Button onClick={(e) => handleSubmit(e)}>Submit</Button>
			</Form>
		</Container>
	)
})
