import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Menu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const Main = () => (
	<Menu>
		<Link to="/admin">Admin</Link>
		<Link to="/practice">Practice</Link>
	</Menu>
)
