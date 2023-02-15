import { Link } from "react-router-dom";

import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const generateNumberArr = (number: number) => Array.from(Array(number).keys());

function LottoPage6() {
	return (
		<main role="main" className="home_container">
			<section className="mb-4">
				<div className="flex justify-between mb-4">
					<div className="text-base font-semibold">สามตัวบน</div>
					<div className="text-base text-[#888888] font-medium">ราคาแทง</div>
				</div>

				<div className="flex flex-col gap-2">
					{generateNumberArr(4).map((i) => (
						<Link to="/lotto7">
							<div className="bg-white rounded-md shadow-lg">
								<div className="grid grid-cols-2 divide-x divide-[#F2F2F2]">
									<div className="px-4 py-3 text-[#D11500] text-sm font-semibold">
										แทงเลข{" "}
										{Math.floor(Math.random() * 998 + 1)
											.toString()
											.padStart(3, "0")}
									</div>
									<div className="px-4 py-3 text-sm font-bold text-[#1E1E1E] place-self-end w-14 text-center">
										{Math.floor(Math.random() * 10 + 1)}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className="mb-4">
				<div className="text-base font-semibold mb-4">สองตัวล่าง</div>

				<div className="flex flex-col gap-2">
					{generateNumberArr(4).map((i) => (
						<Link to="/lotto7">
							<div className="bg-white rounded-md shadow-lg">
								<div className="grid grid-cols-2 divide-x divide-[#F2F2F2]">
									<div className="px-4 py-3 text-[#D11500] text-sm font-semibold">
										แทงเลข{" "}
										{Math.floor(Math.random() * 98 + 1)
											.toString()
											.padStart(2, "0")}
									</div>
									<div className="px-4 py-3 text-sm font-bold text-[#1E1E1E] place-self-end w-14 text-center">
										{Math.floor(Math.random() * 10 + 1)}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className="mb-5">
				<div className="text-base font-semibold mb-4">วิ่งล่าง</div>

				<div className="flex flex-col gap-2">
					{generateNumberArr(4).map((i) => (
						<Link to="/lotto7">
							<div className="bg-white rounded-md shadow-lg">
								<div className="grid grid-cols-2 divide-x divide-[#F2F2F2]">
									<div className="px-4 py-3 text-[#D11500] text-sm font-semibold">
										แทงเลข{" "}
										{Math.floor(Math.random() * 98 + 1)
											.toString()
											.padStart(2, "0")}
									</div>
									<div className="px-4 py-3 text-sm font-bold text-[#1E1E1E] place-self-end w-14 text-center">
										{Math.floor(Math.random() * 10 + 1)}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}

export default LottoPage6;
