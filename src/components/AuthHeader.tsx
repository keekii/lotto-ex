import { Component } from "react";
import { withRouter } from "../utils/ComponentWithProps";
import Image from "./Image";

type Props = {
	className?: String;
	label?: String;
	router: any;
};

export class AuthHeader extends Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	componentDidMount(): void {}

	render() {
		const { className, label = "" } = this.props;
		const { router } = this.props;

		let location = router.location;
		let navigate = router.navigate;
		let params = router.params;
		return (
			<header className={`${className}`}>
				<svg
					role="button"
					onClick={() => navigate(-1)}
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 8L2 16L10 24"
						stroke="#F8AA02"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<Image name="logo-4x" className="w-[106px]" alt="logo" />
				<div className={`text-sm mt-1.5 ${className || "text-[#888888]"}`}>{label}</div>
				<div className="w-[30px] rounded-full bg-[#F8AA02] h-[1px] my-5"></div>
			</header>
		);
	}
}

export default withRouter(AuthHeader);
