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

function LottoPage14() {
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
								<div className="h-5 w-5 rounded flex justify-center items-center bg-[#FCE9E9]">
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4.50537 11.4953L8.0007 7.99997L11.496 11.4953M11.496 4.50464L8.00004 7.99997L4.50537 4.50464"
											stroke="#D11500"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>

				<Link to="/lotto15">
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

				<div className="border border-[#68C749] rounded py-5 text-lg font-semibold text-[#FE1A01] flex items-center justify-center gap-3 bg-white">
					ส่งโพยสำเร็จแล้ว
					<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12.5" cy="12" r="11" fill="white" stroke="#FE1A01" stroke-width="2" />
						<path
							d="M15.6992 8.56055C15.8633 8.56055 16.0156 8.58984 16.1562 8.64844C16.2969 8.70703 16.4219 8.79102 16.5312 8.90039C16.6406 9.00977 16.7227 9.13281 16.7773 9.26953C16.832 9.40625 16.8633 9.56055 16.8711 9.73242C16.8711 9.88867 16.8418 10.0391 16.7832 10.1836C16.7246 10.3281 16.6406 10.4551 16.5312 10.5645L11.8789 15.2227C11.7695 15.332 11.6426 15.416 11.498 15.4746C11.3535 15.5332 11.2031 15.5645 11.0469 15.5684C10.8906 15.5684 10.7402 15.5391 10.5957 15.4805C10.4512 15.4219 10.3242 15.3359 10.2148 15.2227L8.09375 13.1016C7.98438 12.9922 7.90039 12.8652 7.8418 12.7207C7.7832 12.5762 7.75195 12.4258 7.74805 12.2695C7.74805 12.1055 7.7793 11.9531 7.8418 11.8125C7.9043 11.6719 7.98828 11.5469 8.09375 11.4375C8.19922 11.3281 8.32227 11.2461 8.46289 11.1914C8.60352 11.1367 8.75781 11.1055 8.92578 11.0977C9.08203 11.0977 9.23242 11.127 9.37695 11.1855C9.52148 11.2441 9.64844 11.3281 9.75781 11.4375L11.0469 12.7266L14.8672 8.90039C14.9766 8.79102 15.1035 8.70703 15.248 8.64844C15.3926 8.58984 15.543 8.56055 15.6992 8.56055Z"
							fill="#68C749"
						/>
					</svg>
				</div>
			</section>
		</main>
	);
}

export default LottoPage14;
