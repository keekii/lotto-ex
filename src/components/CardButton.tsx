import React, { Component } from "react";

type Props = {
	className?: string;
	color?: string;
	children?: string | JSX.Element | JSX.Element[];
};

export class CardButton extends Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const { className = "", children, color = "#FF5E92" } = this.props;

		return (
			<button className={`rounded flex justify-center items-center ${className}`}>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6 4L10 8L6 12"
						stroke={color}
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				{children}
			</button>
		);
	}
}

export default CardButton;
