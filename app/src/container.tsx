import React from "react"
import { Admin } from "./views/admin/store"
import { Routes } from './routes'

const storeContext = React.createContext({
	admin: new Admin(),
})

export const Container = () => (
	<div>
		<Routes />
	</div>
)

export const useStore = () => React.useContext(storeContext)
