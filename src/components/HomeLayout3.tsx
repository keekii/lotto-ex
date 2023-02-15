import { Component } from "react";
import { Outlet } from "react-router-dom";
import BottomBar from "./BottomBar";
import Header2 from "./Header2";
import Header3 from "./Header3";

export class HomeLayout3 extends Component<any> {
	render() {
		return (
			<div className="flex flex-col h-screen overflow-auto scrollbar-hide">
				<Header3 className="z-50" />
				<Outlet />
				<BottomBar />
			</div>
		);
	}
}

export default HomeLayout3;
