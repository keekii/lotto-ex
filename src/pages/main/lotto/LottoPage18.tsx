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

function LottoPage18() {
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
				<Card className="h-24 flex justify-center items-center font-medium text-[#1E1E1E]">ไม่มีข้อมูล</Card>
			</section>
		</main>
	);
}

export default LottoPage18;
