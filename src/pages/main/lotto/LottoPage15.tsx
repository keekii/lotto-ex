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

function LottoPage15() {
	return (
		<main role="main" className="home_container">
			<section className="mb-8">
				<div className="bg-[#F8F7F7] rounded shadow-md h-72 flex flex-col justify-center items-center">
					<div className="h-[86px] w-[86px] rounded-full border-2 border-[#F8AA02] bg-white flex justify-center items-center mb-8">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.33301 28C8.59967 28 7.97212 27.7391 7.45034 27.2173C6.92767 26.6947 6.66634 26.0667 6.66634 25.3333V8C6.28856 8 5.97167 7.87244 5.71567 7.61733C5.46056 7.36133 5.33301 7.04444 5.33301 6.66667C5.33301 6.28889 5.46056 5.972 5.71567 5.716C5.97167 5.46089 6.28856 5.33333 6.66634 5.33333H11.9997C11.9997 4.95556 12.1277 4.63867 12.3837 4.38267C12.6388 4.12756 12.9552 4 13.333 4H18.6663C19.0441 4 19.361 4.12756 19.617 4.38267C19.8721 4.63867 19.9997 4.95556 19.9997 5.33333H25.333C25.7108 5.33333 26.0272 5.46089 26.2823 5.716C26.5383 5.972 26.6663 6.28889 26.6663 6.66667C26.6663 7.04444 26.5383 7.36133 26.2823 7.61733C26.0272 7.87244 25.7108 8 25.333 8V25.3333C25.333 26.0667 25.0721 26.6947 24.5503 27.2173C24.0277 27.7391 23.3997 28 22.6663 28H9.33301ZM11.9997 21.3333C11.9997 21.7111 12.1277 22.0276 12.3837 22.2827C12.6388 22.5387 12.9552 22.6667 13.333 22.6667C13.7108 22.6667 14.0277 22.5387 14.2837 22.2827C14.5388 22.0276 14.6663 21.7111 14.6663 21.3333V12C14.6663 11.6222 14.5388 11.3053 14.2837 11.0493C14.0277 10.7942 13.7108 10.6667 13.333 10.6667C12.9552 10.6667 12.6388 10.7942 12.3837 11.0493C12.1277 11.3053 11.9997 11.6222 11.9997 12V21.3333ZM17.333 21.3333C17.333 21.7111 17.461 22.0276 17.717 22.2827C17.9721 22.5387 18.2886 22.6667 18.6663 22.6667C19.0441 22.6667 19.361 22.5387 19.617 22.2827C19.8721 22.0276 19.9997 21.7111 19.9997 21.3333V12C19.9997 11.6222 19.8721 11.3053 19.617 11.0493C19.361 10.7942 19.0441 10.6667 18.6663 10.6667C18.2886 10.6667 17.9721 10.7942 17.717 11.0493C17.461 11.3053 17.333 11.6222 17.333 12V21.3333Z"
								fill="#D11500"
							/>
						</svg>
					</div>
					<div className="text-semibold text-[#1E1E1E] font-semibold mb-3">ต้องการลบรายการ?</div>
					<div className="text-sm text-[#888888]">หากยืนยันลบรายการเลขชุดนี้จะหายไป</div>
				</div>
			</section>

			<section className="mb-5">
				<div className="flex flex-col gap-2">
					<Link to="/lotto16">
						<button className="button_1 w-full rounded font-semibold py-3.5">บันทึก</button>
					</Link>
					<button className="bg-transparent border border-[#888888] rounded py-3.5 w-full font-semibold text-[#888888]">
						ยกเลิกรายการ
					</button>
				</div>
			</section>
		</main>
	);
}

export default LottoPage15;
