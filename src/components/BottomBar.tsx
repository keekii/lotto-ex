import { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

type Props = {
	className?: String;
};

export class BottomBar extends Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	isEmpty = (data: any) => {
		return (
			(typeof data === "string" && data.trim()) === "" ||
			data === undefined ||
			data === null ||
			Number.isNaN(data) ||
			data.toString().includes("undefined")
		);
	};

	render() {
		const { className } = this.props;
		return (
			<div className="px-2 bg-orange-500 sticky bottom-0 z-50">
				<div className="flex flex-row h-[4.25rem]">
					<button className="basis-1/5 flex justify-center items-center">
						<div className="flex flex-col justify-center items-center">
							<Icon className="h-4 w-4" name="gift" alt="รางวัลพิเศษ" />
							<div className="text-white text-xxs font-medium mt-1 h-5 flex items-center">
								รางวัลพิเศษ
							</div>
						</div>
					</button>
					<button className="basis-1/5 flex justify-center items-center">
						<div className="flex flex-col justify-center items-center">
							<Icon className="h-4 w-4" name="clipboard" alt="รายการโพย" />
							<div className="text-white text-xxs font-medium mt-1 h-5 flex items-center">รายการโพย</div>
						</div>
					</button>
					<Link to="/lotto" className="basis-1/5 flex justify-center items-center relative">
						<div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#D11500] absolute top-[-50%] drop-shadow-2xl">
							<Icon className="h-9" name="lion" alt="แทงหวย" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<div className="h-5 w-5"></div>
							<div className="text-xxs font-medium mt-1 h-5 flex items-center bg-white text-red-500 px-2 rounded-3xl">
								แทงหวย
							</div>
						</div>
					</Link>
					<button className="basis-1/5 flex justify-center items-center">
						<div className="flex flex-col justify-center items-center">
							<Icon className="h-4 w-4" name="radio" alt="ผลรางวัล" />
							<div className="text-white text-xxs font-medium mt-1 h-5 flex items-center">ผลรางวัล</div>
						</div>
					</button>
					<Link to="/menu" className="basis-1/5 flex justify-center items-center">
						<div className="flex flex-col justify-center items-center">
							<Icon className="h-4 w-4" name="user" alt="เมนู" />
							<div className="text-white text-xxs font-medium mt-1 h-5 flex items-center">เมนู</div>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default BottomBar;
