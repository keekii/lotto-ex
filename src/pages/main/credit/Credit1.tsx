import { useState } from "react";
import { Link } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";

const generateNumberArr = (number: number) => Array.from(Array(number).keys());

const plans = [
	{
		name: "ธนาคารกสิกรไทย (KBANK)",
		icon: "kbank",
		acc_no: "112344****79",
		acc_name: "นายทัศนี มารวย",
	},
	{
		name: "ธนาคารไทยพานิชย์ (SCB)",
		icon: "scb",
		acc_no: "736344****79",
		acc_name: "นายทัศนี มารวย",
	},
	{
		name: "ธนาคารกรุงเทพ (BBL)",
		icon: "bbl",
		acc_no: "112344****79",
		acc_name: "นายทัศนี มารวย",
	},
];

function Credit1() {
	const [selected, setSelected] = useState(plans[0]);
	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<div className="flex items-center bg-[#F8EAE1] px-[18px] py-4 rounded-md mb-3 space-x-3">
					<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.77082 17.5C2.45138 17.5 2.21527 17.3611 2.06249 17.0833C1.90971 16.8056 1.90971 16.5278 2.06249 16.25L9.77082 2.91667C9.9236 2.63889 10.1667 2.5 10.5 2.5C10.8333 2.5 11.0764 2.63889 11.2292 2.91667L18.9375 16.25C19.0903 16.5278 19.0903 16.8056 18.9375 17.0833C18.7847 17.3611 18.5486 17.5 18.2292 17.5H2.77082ZM10.5 8.33333C10.2639 8.33333 10.0661 8.41305 9.90666 8.5725C9.74666 8.7325 9.66666 8.93056 9.66666 9.16667V11.6667C9.66666 11.9028 9.74666 12.1006 9.90666 12.26C10.0661 12.42 10.2639 12.5 10.5 12.5C10.7361 12.5 10.9342 12.42 11.0942 12.26C11.2536 12.1006 11.3333 11.9028 11.3333 11.6667V9.16667C11.3333 8.93056 11.2536 8.7325 11.0942 8.5725C10.9342 8.41305 10.7361 8.33333 10.5 8.33333ZM10.5 15C10.7361 15 10.9342 14.92 11.0942 14.76C11.2536 14.6006 11.3333 14.4028 11.3333 14.1667C11.3333 13.9306 11.2536 13.7328 11.0942 13.5733C10.9342 13.4133 10.7361 13.3333 10.5 13.3333C10.2639 13.3333 10.0661 13.4133 9.90666 13.5733C9.74666 13.7328 9.66666 13.9306 9.66666 14.1667C9.66666 14.4028 9.74666 14.6006 9.90666 14.76C10.0661 14.92 10.2639 15 10.5 15Z"
							fill="#F24E1E"
						/>
					</svg>

					<span className="text-[#F24E1E] text-sm font-medium">
						คุณสามารถใช้สิทธิในการถอนได้ 100 ครั้งต่อวัน คุณใช้สิทธิไปแล้ว 0 ครั้ง
					</span>
				</div>

				<div>
					<RadioGroup value={selected} onChange={setSelected}>
						<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
						<div className="space-y-2">
							{plans.map((plan) => (
								<RadioGroup.Option
									key={plan.name}
									value={plan}
									className="relative flex cursor-pointer rounded-md p-4 shadow-md focus:outline-none bg-white">
									{({ active, checked }) => (
										<>
											<div className="flex w-full items-center justify-between">
												<div className="flex-1 flex items-center">
													{checked ? (
														<div className="shrink-0 text-white">
															<div className="h-5 w-5 rounded-full bg-[#F8AA02] flex justify-center items-center">
																<svg
																	width="17"
																	height="16"
																	viewBox="0 0 17 16"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		d="M3.83331 8.6665L6.49998 11.3332L13.1666 4.6665"
																		stroke="white"
																		stroke-linecap="round"
																		stroke-linejoin="round"
																	/>
																</svg>
															</div>
														</div>
													) : (
														<div className="shrink-0 h-5 w-5 rounded-full border border-[#E9E9E9]"></div>
													)}
													<div className="shrink-0 text-white">
														<Image
															className="h-9 w-9 ml-2.5 mr-3"
															name={plan.icon}
															alt="kbank"
														/>
													</div>
													<div className="flex items-center space-y-2">
														<div className="text-sm">
															<RadioGroup.Label as="p" className="font-medium text-sm">
																<div className="flex flex-col">
																	<div className="text-[#1E1E1E]">{plan.name}</div>
																	<div className="text-[#888888]">{plan.acc_no}</div>
																</div>
															</RadioGroup.Label>
														</div>
													</div>
												</div>

												<div className="shrink-0 text-[#1E1E1E] text-sm font-medium">
													{plan.acc_name}
												</div>
											</div>
										</>
									)}
								</RadioGroup.Option>
							))}
						</div>
					</RadioGroup>
				</div>
			</section>

			<section className="mb-6">
				<label className="flex text-base font-medium text-[#1E1E1E] mb-3">ระบุจำนวนเงินที่ต้องการถอน</label>
				<div className="relative rounded-md mb-2">
					<input
						type="text"
						name="amount"
						id="amount"
						className="block w-full rounded-md border-gray-300 focus:outline-none pl-4 pr-14 py-3 placeholder:text-[#888888] placeholder:font-medium text-[#1E1E1E]"
						placeholder="ระบุจำนวนเงินที่ต้องการถอน"
					/>
					<div className="absolute inset-y-0 right-3 flex items-center">
						<label htmlFor="currency" className="sr-only">
							Currency
						</label>
						<div className="text-[#1E1E1E] font-semibold">THB</div>
					</div>
				</div>

				<textarea
					name="remark"
					id="remark"
					className="block w-full rounded-md border-gray-300 focus:outline-none pl-4 pr-14 py-3 placeholder:text-[#888888] placeholder:font-medium text-[#1E1E1E]"
					placeholder="หมายเหตุ"
					rows={3}
				/>
			</section>

			<section className="mb-5">
				<div className="flex flex-col gap-2">
					<Link to="/credit2">
						<button className="button_1 w-full rounded font-semibold py-3.5">แจ้งถอน</button>
					</Link>
					<button className="bg-transparent border border-[#888888] rounded py-3.5 w-full font-semibold text-[#888888]">
						ยกเลิกรายการ
					</button>
				</div>
			</section>
		</main>
	);
}

// const page2 = (
// 	<div>
// 		<RadioGroup value={selected} onChange={setSelected}>
// 			<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
// 			<div className="space-y-2">
// 				{plans.map((plan) => (
// 					<RadioGroup.Option
// 						key={plan.name}
// 						value={plan}
// 						className="relative flex cursor-pointer rounded-md p-4 shadow-md focus:outline-none bg-white">
// 						{({ active, checked }) => (
// 							<>
// 								<div className="flex w-full items-center">
// 									{checked ? (
// 										<div className="shrink-0 text-white">
// 											<div className="h-5 w-5 rounded-full bg-[#F8AA02] flex justify-center items-center">
// 												<svg
// 													width="17"
// 													height="16"
// 													viewBox="0 0 17 16"
// 													fill="none"
// 													xmlns="http://www.w3.org/2000/svg">
// 													<path
// 														d="M3.83331 8.6665L6.49998 11.3332L13.1666 4.6665"
// 														stroke="white"
// 														stroke-linecap="round"
// 														stroke-linejoin="round"
// 													/>
// 												</svg>
// 											</div>
// 										</div>
// 									) : (
// 										<div className="shrink-0 h-5 w-5 rounded-full border border-[#E9E9E9]"></div>
// 									)}
// 									<div className="shrink-0 text-white">
// 										<Image className="h-9 w-9 ml-2.5 mr-3" name={plan.icon} alt="kbank" />
// 									</div>
// 									<div className="flex items-center">
// 										<div className="text-sm">
// 											<RadioGroup.Label as="p" className="font-medium text-[#1E1E1E] text-sm">
// 												{plan.name}
// 											</RadioGroup.Label>
// 										</div>
// 									</div>
// 								</div>
// 							</>
// 						)}
// 					</RadioGroup.Option>
// 				))}
// 			</div>
// 		</RadioGroup>
// 	</div>
// );

export default Credit1;
