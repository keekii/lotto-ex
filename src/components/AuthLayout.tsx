import { Component } from "react";
import { Outlet } from "react-router-dom";

export class AuthLayout extends Component<any> {
	render() {
		return (
			<div className="flex flex-col h-screen">
				<Outlet />
			</div>
		);
	}
}

export default AuthLayout;
