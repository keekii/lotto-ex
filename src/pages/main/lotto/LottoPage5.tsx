import { Link } from "react-router-dom";

import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const generateNumberArr = (number: number) => Array.from(Array(number).keys());

function LottoPage5() {
	return (
		<main role="main" className="home_container">
			<section className="mb-4">
				<div className="text-base font-semibold mb-4">สามตัวบน</div>

				<div className="flex flex-col gap-2">
					{generateNumberArr(4).map((i) => (
						<Link to="/lotto6">
							<div className="bg-white rounded-md shadow-lg">
								<div className="grid grid-cols-4 divide-x divide-[#F2F2F2]">
									<div className="px-4 py-3 text-[#D11500] text-sm font-semibold place-self-start">
										แทงเลข{" "}
										{Math.floor(Math.random() * 998 + 1)
											.toString()
											.padStart(3, "0")}
									</div>
									<div className="px-4 py-3 text-sm font-bold text-[#1E1E1E] place-self-start">
										{Math.floor(Math.random() * 10 + 1)
											.toString()
											.padStart(2, "0")}
									</div>
									<div className="px-4 py-3 text-[#1E1E1E] font-medium text-sm">
										ชนะ:{" "}
										{Math.floor(Math.random() * 9998 + 1)
											.toString()
											.padStart(4, "0")}
									</div>
									<div className="px-4 py-3 place-self-end">
										<div className=" h-5 w-5 rounded flex justify-center items-center bg-[#FCE9E9]">
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
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className="mb-4">
				<div className="text-base font-semibold mb-4">สองตัวล่าง</div>

				<div className="flex flex-col gap-2">
					{generateNumberArr(2).map((i) => (
						<div className="bg-white rounded-md shadow-lg">
							<div className="grid grid-cols-4 divide-x divide-[#F2F2F2]">
								<div className="px-4 py-3 text-[#D11500] text-sm font-semibold place-self-start">
									แทงเลข{" "}
									{Math.floor(Math.random() * 98 + 1)
										.toString()
										.padStart(2, "0")}
								</div>
								<div className="px-4 py-3 text-sm font-bold text-[#1E1E1E] place-self-start">
									{Math.floor(Math.random() * 10 + 1)
										.toString()
										.padStart(2, "0")}
								</div>
								<div className="px-4 py-3 text-[#1E1E1E] font-medium text-sm">
									ชนะ:{" "}
									{Math.floor(Math.random() * 9998 + 1)
										.toString()
										.padStart(4, "0")}
								</div>
								<div className="px-4 py-3 place-self-end">
									<div className=" h-5 w-5 rounded flex justify-center items-center bg-[#FCE9E9]">
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
						</div>
					))}
				</div>
			</section>

			<section className="mb-5">
				<div className="text-base font-semibold mb-4">วิ่งล่าง</div>

				<div className="flex flex-col gap-2">
					{generateNumberArr(2).map((i) => (
						<div className="bg-white rounded-md shadow-lg">
							<div className="grid grid-cols-4 divide-x divide-[#F2F2F2]">
								<div className="px-4 py-3 text-[#D11500] text-sm font-semibold place-self-start">
									แทงเลข{" "}
									{Math.floor(Math.random() * 98 + 1)
										.toString()
										.padStart(2, "0")}
								</div>
								<div className="px-4 py-3 text-sm font-bold text-[#1E1E1E] place-self-start">
									{Math.floor(Math.random() * 10 + 1)
										.toString()
										.padStart(2, "0")}
								</div>
								<div className="px-4 py-3 text-[#1E1E1E] font-medium text-sm">
									ชนะ:{" "}
									{Math.floor(Math.random() * 9998 + 1)
										.toString()
										.padStart(4, "0")}
								</div>
								<div className="px-4 py-3 place-self-end">
									<div className=" h-5 w-5 rounded flex justify-center items-center bg-[#FCE9E9]">
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
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

export default LottoPage5;
