import { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomBar from "./BottomBar";

export class HomeLayout extends Component<any> {
	render() {
		return (
			<div className="flex flex-col h-screen overflow-auto scrollbar-hide">
				<Header className="z-50" />
				<Outlet />
				<BottomBar />
			</div>
		);
	}
}

export default HomeLayout;
