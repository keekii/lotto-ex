import React, { Component } from "react";

type Props = {
	className?: string;
	label?: string;
	placeholder?: string;
	type?: string;
	value?: any;
	onChange?: any;
	icon?: boolean;
};

export class TextInput extends Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const {
			className = "",
			type = "text",
			label,
			placeholder = "",
			value = undefined,
			onChange,
			icon,
		} = this.props;

		return (
			<div className={`flex-1 flex-col ${className}`}>
				{label && <label className="flex text-base font-medium text-[#1E1E1E] mb-3">{label}</label>}
				<div className="bg-[#f2f2f2] flex items-center rounded h-10 px-4">
					<input
						placeholder={placeholder}
						type={type}
						className="flex-1 bg-transparent focus:outline-none placeholder:text-[#888888] text-gray-1000 text-sm"
						value={value}
						onChange={onChange}
					/>
					{icon && (
						<svg
							className="justify-self-center self-center ml-4"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.5885 11.0265L10.5 11.625C8.41349 10.578 7.12499 9.375 6.37499 7.5L6.95249 4.4025L5.86124 1.5H3.04799C2.20199 1.5 1.53599 2.199 1.66274 3.03525C1.97774 5.1225 2.90774 8.90775 5.62499 11.625C8.47874 14.4788 12.5895 15.717 14.8515 16.2098C15.7252 16.3995 16.5 15.7185 16.5 14.8237V12.1357L13.5885 11.0265Z"
								stroke="#888888"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					)}
				</div>
			</div>
		);
	}
}

export default TextInput;
