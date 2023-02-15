import { Link } from "react-router-dom";
import Button from "../../../components/Button";

import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import TextInput from "../../../components/TextInput";

const generateNumberArr = (number: number) => Array.from(Array(number).keys());

const isNegative = (num: number) => {
	if (num < 0) {
		return <div className="text-[#D11500]">{num.toString().padStart(4, "0")}</div>;
	} else {
		return <div className="text-[#F8AA02]">{num.toString().padStart(4, "0")}</div>;
	}
};

const getRandomNumber = () => {
	return isNegative(Math.floor(Math.random() * (9999 - -9999 + 1)) + -9999);
};

function LottoPage17() {
	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<div className="flex justify-around mb-4">
					{generateNumberArr(3).map((i) => (
						<button className="first:rounded-tl-md first:border-r first:border-r-white last:rounded-tr-md last:border-l last:border-l-white bg-[#F8AA02] flex-1 text-center py-2.5 hover:bg-orange-600">
							<div className="font-semibold text-base text-[#1E1E1E]">ระบุเลข</div>
						</button>
					))}
				</div>
			</section>

			<section className="mb-5">
				<div className="flex flex-col space-y-[10px] mb-8">
					{generateNumberArr(3).map((i) => (
						<div className="p-4 rounded-md bg-white shadow-md flex items-center">
							<div className="flex-1">
								<div className="text-base text-[#1E1E1E] font-semibold">เลขเด็ด</div>
								<div className="text-sm text-[#888888] font-medium">19/01/2566 11:25:18</div>
							</div>
							<div className="flex-none">
								<div className="h-5 w-5 rounded flex justify-center items-center bg-[#E2FBDB]">
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4 8H8M8 8H12M8 8V4M8 8V12"
											stroke="#4BAF2A"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>

				<Link to="/lotto18">
					<button className="button_2 py-3.5 w-full rounded font-semibold flex justify-center items-center space-x-2 mb-6">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M5 10H10M10 10H15M10 10V5M10 10V15"
								stroke="white"
								stroke-width="1.25"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<span>สร้างเลขชุด</span>
					</button>
				</Link>
			</section>
		</main>
	);
}

export default LottoPage17;
