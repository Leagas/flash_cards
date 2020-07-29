import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Admin } from "./views/admin/view"
import { Practice } from "./views/practice/view"
import { Main } from "./views/main"

export class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/practice" component={Practice} />
					<Route exact path="/admin" component={Admin} />
				</Switch>
			</Router>
		)
	}
}
