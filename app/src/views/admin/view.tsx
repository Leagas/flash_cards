import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

import { useStore } from "../../container"
import { TField } from "./model"

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const Form = styled.form`
	max-width: 100%;
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
	opacity: 0;

	&.default {
		color: grey;
	}

	&.show {
		opacity: 1
	}
`

const Status = styled.p`
	font-size: 16px;
	color: ${p => p.color};
	text-align: center;
	min-height: 20px;
`

const Button = styled.button`
	width: 100%;
`

const ImageContainer = styled.div`
	max-width: 250px;
`

const Image = styled.img`
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
					onChange={(e) => admin.handleChange<HTMLInputElement>(e, TField.question)}
					value={form.question.value}
					type="text"
					id="question"
					name="question"
					placeholder="Question"
				/>
				<Input
					onChange={(e) => admin.handleChange<HTMLInputElement>(e, TField.answer)}
					value={form.answer.value}
					type="text"
					id="answer"
					name="answer"
					placeholder="Answer"
				/>
				<Select
					onChange={(e) => admin.handleChange<HTMLSelectElement>(e, TField.subject)}
					value={form.subject.value}
					id="subject"
					name="subject"
					placeholder="Select Subject"
					className={`show ${form.subject.value == '' && `default`}`}
					defaultValue={undefined}
				>
					<option value={undefined}>Select Subject</option>
					{admin.subjects.map((subject) => (
						<option key={`subject-${subject}`} value={subject}>
							{subject}
						</option>
					))}
				</Select>
				<Select
					onChange={(e) => admin.handleChange<HTMLSelectElement>(e, TField.topic)}
					value={form.topic.value}
					id="topic"
					name="topic"
					placeholder="Select Topic"
					className={`${form.subject.value && `show`} ${form.topic.value == '' && `default`}`}
					defaultValue={undefined}
				>
					<option value={undefined}>Select Topic</option>
					{admin.topics.reduce((topics, topic) => {
						if (topic.subject === form.subject.value) {
							topics.push(
								<option key={`topic-${topic.id}-${topic.topic}`} value={topic.id}>
									{topic.topic}
								</option>
							)
						}
						return topics
					}, [] as JSX.Element[])}
				</Select>
				<Label htmlFor="image">Choose a reference image:</Label>
				<Input
					onChange={(e) => admin.handleChange<HTMLInputElement>(e, TField.image)}
					value={form.image.value}
					type="file"
					id="image"
					name="image"
					accept="image/png, image/jpeg"
				/>
				<ImageContainer>
					<Image src={admin.image} />
				</ImageContainer>
				<Button onClick={(e) => handleSubmit(e)}>Submit</Button>
				<Status color={admin.error ? "red" : "green"}>{admin.error || admin.status}</Status>
			</Form>
		</Container>
	)
})
