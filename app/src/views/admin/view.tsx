import React from "react"
import { useStore } from '../../container';

export const Admin = () => {
	const { admin } = useStore();

	return (
		<div>
			{admin.name}
		</div>
	)
}
