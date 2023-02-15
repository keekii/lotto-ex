import { Component } from "react";
import { Outlet } from "react-router-dom";

export class MainLayout extends Component<any> {
	render() {
		return (
			<div className="max-w-3xl mx-auto">
				<Outlet />
			</div>
		);
	}
}

export default MainLayout;
