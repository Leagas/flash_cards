import React from "react"
import styled from "styled-components"
import { Link, LinkProps } from "react-router-dom"

const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

const LinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 125px;
	height: 35px;
	border: 1px solid black;
	border-radius: 2px;
	margin: 2px;
	cursor: pointer;

	&:hover {
		background: black;
		color: white
	}
`

const Nav = (props: LinkProps) => {
	return (
		<Link to={props.to}>
			<LinkContainer>
				{props.children}
			</LinkContainer>
		</Link>
	)
}

export const Main = () => (
	<Menu>
		<Nav to="/admin">Admin</Nav>
		<Nav to="/practice">Practice</Nav>
	</Menu>
)
