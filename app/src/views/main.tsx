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

const NavContainer = styled.div`
	display: block;
	width: 125px;
	margin: 2px;
`

const LinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 35px;
	border: 1px solid black;
	margin-bottom: 2px;
	border-radius: 2px;
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
		<NavContainer>
			<Nav to="/admin">Admin</Nav>
			<Nav to="/practice">Practice</Nav>
		</NavContainer>
	</Menu>
)
