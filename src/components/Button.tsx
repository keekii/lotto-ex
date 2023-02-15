import { Component } from "react";

type Props = {
	className?: string;
	label?: string;
	onClick?: any;
};

class Button extends Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const { className = "", label = "", onClick } = this.props;

		return (
			<button className={`font-semibold py-3 px-4 rounded w-full ${className}`} onClick={onClick}>
				{label}
			</button>
		);
	}
}

export default Button;
