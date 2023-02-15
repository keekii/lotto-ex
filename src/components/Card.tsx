import React, { Component } from "react";

type Props = {
	className?: string;
	children?: string | JSX.Element | JSX.Element[] | JSX.Element[][];
};

export class Card extends Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const { className = "", children } = this.props;

		return <div className={`bg-white drop-shadow-md rounded-md ${className}`}>{children}</div>;
	}
}

export default Card;
