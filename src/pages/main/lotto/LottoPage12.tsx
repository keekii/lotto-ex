import { Link } from "react-router-dom";
import Button from "../../../components/Button";

import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

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

function LottoPage12() {
	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<div className="flex flex-col space-y-[10px] mb-6">
					{generateNumberArr(10).map((i) => (
						<Link to="/lotto13">
							<div className="rounded-md bg-white shadow-md flex items-stretch h-[52px]">
								<div className="flex-1 text-base text-[#1E1E1E] font-medium flex items-center px-4">
									สามตัวหน้า
								</div>
								<div className="shrink-0 basis-20 border-l border-l-[#F4F4F4] flex items-center justify-end px-4 text-[#1E1E1E] font-bold">
									{Math.floor(Math.random() * 999)
										.toString()
										.padStart(3, "0")}
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}

export default LottoPage12;
