import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";

const generateNumberArr = (number: number) => Array.from(Array(number).keys());

const people = [
	{ name: "Wade Cooper" },
	{ name: "Arlene Mccoy" },
	{ name: "Devon Webb" },
	{ name: "Tom Cook" },
	{ name: "Tanya Fox" },
	{ name: "Hellen Schmidt" },
	{ name: "Tom Cook" },
	{ name: "Tanya Fox" },
	{ name: "Hellen Schmidt" },
	{ name: "Tom Cook" },
	{ name: "Tanya Fox" },
	{ name: "Hellen Schmidt" },
];

const getHourSpans = (currentTime: any, target: string) => {
	const [hour, minute] = currentTime.split(":").map(Number);
	const result = [];

	switch (target) {
		case "hour":
			for (let i = hour + 1; i < 24; i++) {
				result.push(<span key={i}>{i.toString().padStart(2, "0")}</span>);
			}
			break;
		case "minute":
			for (let i = 0; i < 60; i++) {
				result.push(<span key={i}>{i.toString().padStart(2, "0")}</span>);
			}
			break;
	}

	return result;
};

function Credit3() {
	const [selected, setSelected] = useState("16");
	const [selected2, setSelected2] = useState("00");
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
					<span className="text-[#F24E1E] text-sm font-medium">โปรดระบุเศษเงินให้ถูกต้อง</span>
				</div>

				<Card className="p-4 flex items-center">
					<div className="flex-1 space-y-2">
						<div className="text-[#1E1E1E] font-semibold">กรุณาโอนเงิน</div>
						<div className="text-sm text-[#888888] font-medium">จำนวน:</div>
					</div>
					<div className="shrink-0 space-x-1.5">
						<span className="text-[#D11500] text-xl font-bold">50.60</span>
						<span className="text-sm text-[#888888] font-medium">THB</span>
					</div>
				</Card>
			</section>

			<section className="mb-5">
				<div className="text-base text-[#1E1E1E] font-semibold mb-4">จับยี่กีทันใจ</div>
				<Card className="flex flex-col">
					<div className="flex items-center space-x-3 border-b border-b-[#F2F2F2]">
						<div className="py-4 pl-4">
							<Image className="h-9 w-9" name="kbank" alt="kbank" />
						</div>
						<div className="text-sm text-[#1E1E1E] font-medium">ธนาคารกสิกรไทย (KBANK)</div>
					</div>
					<div className="p-4">
						<div className="flex flex-col space-y-2">
							<div className="flex justify-between">
								<div className="text-sm text-[#888888] font-medium">ชื่อบัญชี:</div>
								<div className="text-sm text-[#1E1E1E] font-medium">นางสาวมโนรา มานา</div>
							</div>
							<div className="flex justify-between">
								<div className="text-sm text-[#888888] font-medium">เลขที่บัญชี:</div>
								<div className="text-sm text-[#1E1E1E] font-medium">8906475843</div>
							</div>
							<div className="flex justify-between">
								<div className="text-sm text-[#888888] font-medium">จำนวนเงินที่ฝาก:</div>
								<div className="text-sm text-[#D11500] font-bold">50.60 THB</div>
							</div>
						</div>
					</div>
				</Card>
			</section>

			<section className="mb-5">
				<div className="bg-[#4BAF2A] rounded-md py-5 flex flex-col items-center text-white space-y-3">
					<div className="text-sm font-medium">คุณมีเวลาโอนเงินภายใน 10 นาที</div>
					<div className="text-xl font-semibold">คุณมีเวลาโอนเงินภายใน 10 นาที</div>
				</div>
			</section>

			<section className="mb-6">
				<label className="flex text-base font-medium text-[#1E1E1E] mb-3">ระบุเวลาโอนเงิน</label>
				<div className="flex space-x-2 mb-3">
					<div className="flex-1">
						<Listbox value={selected} onChange={setSelected}>
							<div className="relative mt-1">
								<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-4 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
									<span className="block truncate">{selected}</span>
									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
										<svg
											width="21"
											height="20"
											viewBox="0 0 21 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M5.25 7.5L10.25 12.5L15.25 7.5"
												stroke="#888888"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</Listbox.Button>
								<Transition
									as={Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0">
									<Listbox.Options className="absolute mt-1 max-h-48 w-full overflow-auto scrollbar-hide z-50 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
										{getHourSpans("15:20", "hour").map((item, itemIdx) => (
											<Listbox.Option
												key={itemIdx}
												className={({ active }) =>
													`relative cursor-default select-none py-2 px-4 ${
														active ? "bg-amber-100 text-amber-900" : "text-gray-900"
													}`
												}
												value={item}>
												{({ selected }) => (
													<span
														className={`block truncate ${
															selected ? "font-medium" : "font-normal"
														}`}>
														{item}
													</span>
												)}
											</Listbox.Option>
										))}
									</Listbox.Options>
								</Transition>
							</div>
						</Listbox>
					</div>
					<div className="flex-1">
						<Listbox value={selected2} onChange={setSelected2}>
							<div className="relative mt-1">
								<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-4 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
									<span className="block truncate">{selected2}</span>
									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
										<svg
											width="21"
											height="20"
											viewBox="0 0 21 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M5.25 7.5L10.25 12.5L15.25 7.5"
												stroke="#888888"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</Listbox.Button>
								<Transition
									as={Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0">
									<Listbox.Options className="absolute mt-1 max-h-48 w-full overflow-auto scrollbar-hide z-50 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
										{getHourSpans("15:20", "minute").map((item, itemIdx) => (
											<Listbox.Option
												key={itemIdx}
												className={({ active }) =>
													`relative cursor-default select-none py-2 px-4 ${
														active ? "bg-amber-100 text-amber-900" : "text-gray-900"
													}`
												}
												value={item}>
												{({ selected }) => (
													<span
														className={`block truncate ${
															selected ? "font-medium" : "font-normal"
														}`}>
														{item}
													</span>
												)}
											</Listbox.Option>
										))}
									</Listbox.Options>
								</Transition>
							</div>
						</Listbox>
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
					<Link to="/credit4">
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

export default Credit3;
