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

function LottoPage16() {
	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<div className="flex items-center bg-[#F8EAE1] px-[18px] py-4 rounded-md mb-3 space-x-3">
					<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9.25009 1C8.52075 1 7.82127 1.28973 7.30555 1.80546C6.78982 2.32118 6.50009 3.02065 6.50009 3.75V4.193C5.70903 4.2693 4.92036 4.36867 4.13509 4.491C4.03634 4.50445 3.94126 4.53745 3.85541 4.58807C3.76956 4.63869 3.69465 4.70591 3.63508 4.78581C3.5755 4.86571 3.53245 4.95668 3.50843 5.0534C3.48441 5.15013 3.47992 5.25067 3.4952 5.34916C3.51048 5.44764 3.54524 5.54209 3.59745 5.62699C3.64965 5.71189 3.71825 5.78553 3.79924 5.84361C3.88023 5.90169 3.97199 5.94305 4.06914 5.96526C4.1663 5.98748 4.26691 5.99011 4.36509 5.973L4.51409 5.951L5.35509 16.469C5.41015 17.1582 5.72279 17.8014 6.23075 18.2704C6.73871 18.7394 7.4047 18.9999 8.09609 19H12.9031C13.5945 19.0002 14.2606 18.74 14.7687 18.2711C15.2769 17.8022 15.5898 17.1592 15.6451 16.47L16.4861 5.95L16.6351 5.973C16.8298 5.99952 17.0271 5.94858 17.1847 5.83111C17.3422 5.71365 17.4473 5.53906 17.4775 5.34488C17.5076 5.15071 17.4603 4.95246 17.3458 4.79278C17.2313 4.6331 17.0587 4.52474 16.8651 4.491C16.0798 4.36878 15.2911 4.26941 14.5001 4.193V3.75C14.5001 3.02065 14.2104 2.32118 13.6946 1.80546C13.1789 1.28973 12.4794 1 11.7501 1H9.25009ZM10.5001 4C11.3401 4 12.1731 4.025 13.0001 4.075V3.75C13.0001 3.06 12.4401 2.5 11.7501 2.5H9.25009C8.56009 2.5 8.00009 3.06 8.00009 3.75V4.075C8.82709 4.025 9.66009 4 10.5001 4ZM9.08009 7.72C9.07213 7.52109 8.98549 7.33348 8.83921 7.19846C8.69293 7.06343 8.499 6.99204 8.30009 7C8.10118 7.00796 7.91357 7.0946 7.77855 7.24088C7.64352 7.38716 7.57213 7.58109 7.58009 7.78L7.88009 15.28C7.88403 15.3785 7.90733 15.4752 7.94866 15.5647C7.98999 15.6542 8.04854 15.7347 8.12097 15.8015C8.1934 15.8684 8.27829 15.9203 8.3708 15.9544C8.4633 15.9884 8.5616 16.0039 8.66009 16C8.75858 15.9961 8.85533 15.9728 8.94482 15.9314C9.03431 15.8901 9.11478 15.8315 9.18163 15.7591C9.24849 15.6867 9.30043 15.6018 9.33448 15.5093C9.36853 15.4168 9.38403 15.3185 9.38009 15.22L9.08009 7.72ZM13.4201 7.78C13.424 7.68151 13.4085 7.58321 13.3745 7.4907C13.3404 7.3982 13.2885 7.31331 13.2216 7.24088C13.1548 7.16845 13.0743 7.1099 12.9848 7.06857C12.8953 7.02724 12.7986 7.00394 12.7001 7C12.5012 6.99204 12.3073 7.06343 12.161 7.19846C12.0147 7.33348 11.928 7.52109 11.9201 7.72L11.6201 15.22C11.6162 15.3185 11.6317 15.4168 11.6657 15.5093C11.6998 15.6018 11.7517 15.6867 11.8185 15.7591C11.8854 15.8315 11.9659 15.8901 12.0554 15.9314C12.1448 15.9728 12.2416 15.9961 12.3401 16C12.4386 16.0039 12.5369 15.9884 12.6294 15.9544C12.7219 15.9203 12.8068 15.8684 12.8792 15.8015C12.9516 15.7347 13.0102 15.6542 13.0515 15.5647C13.0929 15.4752 13.1162 15.3785 13.1201 15.28L13.4201 7.78Z"
							fill="#F24E1E"
						/>
					</svg>

					<span className="text-[#F24E1E] text-sm font-semibold">เลขชุดถูกลบออกจากระบบ</span>
				</div>

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
					{generateNumberArr(2).map((i) => (
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

				<Link to="/lotto17">
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

export default LottoPage16;
