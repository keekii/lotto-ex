import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Transition } from "@headlessui/react";

import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

const generateRandomName = () => {
	const name = "abcdefghijklmnopqrstuvwxyz"
		.split("")
		.sort(() => 0.5 - Math.random())
		.join("")
		.substr(0, 6);
	return name.substr(0, 3) + "***" + name.substr(3);
};

const generateRandomDate = () => {
	const day = String(Math.floor(Math.random() * 31 + 1)).padStart(2, "0");
	const month = String(Math.floor(Math.random() * 12 + 1)).padStart(2, "0");
	const year = "2023";
	const hour = String(Math.floor(Math.random() * 24)).padStart(2, "0");
	const minute = String(Math.floor(Math.random() * 60)).padStart(2, "0");
	const second = String(Math.floor(Math.random() * 60)).padStart(2, "0");

	return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
};

const Table = () => {
	const rows = Array.from(Array(16).keys());
	return (
		<Link to={"/lotto5"}>
			<div className="flex flex-col shadow-lg mb-5">
				{rows.map((i) => (
					<div
						className={`px-4 py-3 border-b border-b-[#E9E9E9] last:border-b-0 hover:bg-gray-50 ${
							i === 3 ? "bg-[#FFF7DA]" : "bg-white"
						}`}>
						<div className="flex gap-5 items-center justify-between">
							<div className="flex basis-1/3 items-center">
								<div className="font-medium text-sm text-black w-6">{i + 1}</div>
								<div className="font-medium text-sm text-[#D11500]">
									{Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)}
								</div>
							</div>
							<div
								className={`flex-1 font-medium text-sm ${
									i === 3 ? "text-[#0702FF]" : "text-[#1E1E1E]"
								}`}>
								{generateRandomName()}
							</div>
							<div className="shrink-0 text-end font-medium text-sm text-[#888888]">
								{generateRandomDate()}
							</div>
						</div>
					</div>
				))}
			</div>
		</Link>
	);
};

const Section1 = () => {
	const list = [
		{
			id: 1,
			label: "????????????????????????",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-check",
			iconClassName: "h-5 w-5 rounded bg-[#FF5E92] flex justify-center items-center",
		},
		{
			id: 2,
			label: "??????????????????????????????",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-1",
			iconClassName: "h-5 w-5 rounded bg-[#FEE4EC] flex justify-center items-center",
		},
		{
			id: 3,
			label: "??????????????????????????????",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-1",
			iconClassName: "h-5 w-5 rounded bg-[#FEE4EC] flex justify-center items-center",
		},
		{
			id: 4,
			label: "????????????????????????",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-2",
			iconClassName: "h-5 w-5 rounded bg-[#E2FBDB] flex justify-center items-center",
		},
		{
			id: 5,
			label: "??????????????????????????????",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-check",
			iconClassName: "h-5 w-5 rounded bg-[#68C749] flex justify-center items-center",
		},
		{
			id: 6,
			label: "??????????????????????????????",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-2",
			iconClassName: "h-5 w-5 rounded bg-[#E2FBDB] flex justify-center items-center",
		},
		{
			id: 7,
			label: "??????????????????",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-3",
			iconClassName: "h-5 w-5 rounded bg-[#E8F2F9] flex justify-center items-center",
		},
		{
			id: 8,
			label: "????????????????????????",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-3",
			iconClassName: "h-5 w-5 rounded bg-[#E8F2F9] flex justify-center items-center",
		},
	];
	return (
		<section className="mb-5">
			<div>
				<div className="text-base font-semibold mb-4">??????????????????????????????????????????????????????</div>
				<div className="grid grid-cols-3 gap-2 mb-4">
					{list.map((i) => (
						<div className={i.className}>
							<div className={i.iconClassName}>
								<Icon name={i.icon} />
							</div>
							<div className="font-medium text-xs text-[#1E1E1E]">{i.label}</div>
						</div>
					))}
				</div>
			</div>

			<Card className="px-5 py-4">
				<div className="flex justify-center gap-2 mb-3">
					<div className="flex justify-center items-center h-10 w-10 rounded-md border border-[#EF769D] text-base text-[#1E1E1E] font-bold">
						1
					</div>
					<div className="flex justify-center items-center h-10 w-10 rounded-md border border-[#F8AA02] text-base text-[#1E1E1E] font-bold">
						2
					</div>
					<div className="flex justify-center items-center h-10 w-10 rounded-md border border-[#F8AA02] text-base text-[#1E1E1E] font-bold">
						3
					</div>
				</div>

				<div className="flex items-center justify-center gap-2 mb-4">
					<div className="bg-[#EF769D] px-2 py-1.5 rounded">
						<div className="text-[8px] text-white">3???????????????, 2?????????????????????</div>
					</div>
					<div className="text-[#EB5757] text-xs font-medium">+</div>
					<div className="bg-[#68C749] px-2 py-1.5 rounded">
						<div className="text-[8px] text-white">???????????????????????????????????????</div>
					</div>
				</div>

				<div className="grid grid-rows-4 grid-flow-col gap-3.5">
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">1</div>
					</div>
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">4</div>
					</div>
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">7</div>
					</div>
					<div className=" col-span-2 bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">0</div>
					</div>
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">2</div>
					</div>
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">5</div>
					</div>
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">8</div>
					</div>
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">3</div>
					</div>
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">6</div>
					</div>
					<div className="relative bg-[#FFF7DA] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-2xl text-[#F8AA02] shadow-lg">
						<div className="absolute">9</div>
					</div>
					<div className="relative col-span-2 bg-[#EF769D] h-[52.63px] rounded-[10px] flex items-center justify-center font-semibold text-lg text-white shadow-lg">
						<div className="absolute">??????????????????????????????</div>
					</div>
					<div className="relative row-span-2 bg-[#F8AA02] rounded-[10px] flex items-center justify-center shadow-lg">
						<div className="absolute">
							<Icon name="numpad-delete" />
						</div>
					</div>
					<div className="relative bg-[#C9C7C7] h-[52.63px] rounded-[10px] flex items-center justify-center shadow-lg">
						<div className="absolute">
							<Icon name="numpad-back" />
						</div>
					</div>
				</div>
			</Card>
		</section>
	);
};

const Section2 = () => (
	<section className="mb-5">
		<div className="text-base font-semibold mb-4">??????????????????????????????????????????</div>

		<div className="flex flex-col gap-3">
			<Card>
				<div className="grid grid-cols-2">
					<div className="text-sm font-semibold px-4 py-3 border-[#F2F2F2] border-b border-r">????????????????????????</div>
					<div className="text-sm font-semibold px-4 py-3 border-[#F2F2F2] border-b">??????????????????????????????</div>
					<div className="px-4 py-3 border-[#F2F2F2] border-r">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">800</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">??????????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">1</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">???????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">?????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
						</div>
					</div>
					<div className="px-4 py-3">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">120</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">??????????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">1</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">???????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">?????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
						</div>
					</div>
				</div>
			</Card>

			<Card>
				<div className="grid grid-cols-2">
					<div className="text-sm font-semibold px-4 py-3 border-[#F2F2F2] border-b border-r">????????????????????????</div>
					<div className="text-sm font-semibold px-4 py-3 border-[#F2F2F2] border-b">??????????????????????????????</div>
					<div className="px-4 py-3 border-[#F2F2F2] border-r">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">800</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">??????????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">1</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">???????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">?????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
						</div>
					</div>
					<div className="px-4 py-3">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">120</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">??????????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">1</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">???????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">?????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
						</div>
					</div>
				</div>
			</Card>

			<Card>
				<div className="grid grid-cols-2">
					<div className="text-sm font-semibold px-4 py-3 border-[#F2F2F2] border-b border-r">??????????????????</div>
					<div className="text-sm font-semibold px-4 py-3 border-[#F2F2F2] border-b">????????????????????????</div>
					<div className="px-4 py-3 border-[#F2F2F2] border-r">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">800</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">??????????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">1</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">???????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">?????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
						</div>
					</div>
					<div className="px-4 py-3">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">120</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">??????????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">1</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">???????????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
							<div className="flex justify-between">
								<div className="text-xs font-medium text-[#888888]">?????????????????????????????????????????????</div>
								<div className="text-xs font-medium text-[#D11500]">500</div>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</div>
	</section>
);

const Section3 = () => {
	const grids = Array.from(Array(10).keys());
	const grid2 = Array.from(Array(100).keys());
	return (
		<section className="mb-5">
			<Card className="pt-3.5 pb-[18px]">
				<div className="px-5 flex flex-col items-center">
					<div className="py-1 px-3 bg-[#EF769D] rounded max-w-fit mb-2.5">
						<div className="text-xs font-medium text-black">????????????????????????</div>
					</div>

					<div className="grid grid-cols-5 gap-2">
						{grids.map((i) => (
							<div
								className={`px-2.5 py-1 rounded-md text-center ${
									i === 0 ? "bg-[#EF769D]" : "bg-white border border-[#EF769D]"
								}`}>
								<div className="text-xs font-medium text-black">{i * 100}</div>
							</div>
						))}
					</div>
				</div>

				<hr className="w-full border-1 border-[#E9E9E9] mt-5 mb-[17px]" />

				<div className="px-5">
					<div className="grid grid-cols-5 gap-2 w-full">
						{grid2.map((i) => (
							<div className="px-4 py-3 bg-white border border-[#E9E9E9] rounded hover:bg-[#EF769D] hover:border-[#EF769D] text-[#EF769D] hover:text-black">
								<div className="text-sm font-semibold text-center">{i}</div>
							</div>
						))}
					</div>
				</div>
			</Card>
		</section>
	);
};

const Section4 = () => {
	const grids = Array.from(Array(10).keys());
	return (
		<section className="mb-5">
			<Card className="px-5 py-4">
				<div className="px-5 flex flex-col items-center">
					<div className="py-1 px-3 bg-[#A4DAEC] rounded max-w-fit mb-3">
						<div className="text-xs font-medium text-black">????????????????????????, ??????????????????</div>
					</div>
				</div>

				<div className="grid grid-cols-5 gap-2">
					{grids.map((i) => (
						<div className="rounded border border-[#E9E9E9] py-3 text-center hover:bg-[#A4DAEC] hover:border-[#A4DAEC]">
							<div className="text-sm text-[#1E1E1E] font-semibold">{i}</div>
						</div>
					))}
				</div>
			</Card>
		</section>
	);
};

const Section5 = () => (
	<section className="mb-5">
		<div className="flex flex-col justify-center items-center bg-white rounded-md py-4 mb-4">
			<div className="text-[#1E1E1E] font-semibold">???????????????</div>
			<div className="text-[#F8AA02] text-[32px] font-semibold">0</div>
		</div>

		<label className="flex text-base font-medium text-[#1E1E1E] mb-3">?????????????????????????????? 5 ????????????</label>
		<input
			placeholder="?????????????????????????????? 5 ????????????"
			className="w-full bg-white px-4 py-3 rounded-md focus:outline-none placeholder:text-[#888888] placeholder:font-medium text-[#1E1E1E] mb-5"
		/>

		<div className="flex gap-2">
			<button className=" bg-transparent border border-[#888888] rounded py-[14px] w-full font-semibold text-[#888888]">
				?????????????????????
			</button>
			<button className="button_1 w-full rounded font-semibold">????????????????????????</button>
		</div>
	</section>
);

const Section6 = () => (
	<section>
		<div className="flex justify-between mb-4">
			<div className="text-[#1E1E1E] text-base font-semibold">??????????????????????????????????????????????????????</div>
			<div className="text-[#E0A821] font-semibold">(20)</div>
		</div>
		<Table />
	</section>
);

const Section7 = () => {
	const grids = Array.from(Array(10).keys());
	const grid2 = Array.from(Array(100).keys());
	return (
		<section className="mb-5">
			<Card className="pt-3.5 pb-[18px]">
				<div className="px-5 flex flex-col items-center">
					<div className="py-1 px-3 bg-[#68C749] rounded max-w-fit mb-2.5">
						<div className="text-xs font-medium text-black">????????????????????????</div>
					</div>

					<div className="text-black text-sm font-semibold mb-3">19 ???????????????</div>

					<div className="grid grid-cols-10 divide-x divide-[#F2F2F2] border border-[#F2F2F2] rounded-sm mb-3">
						{grids.map((i) => (
							<div
								className={`h-[30px] w-[30px] first:rounded-l-sm last:rounded-r-sm flex justify-center items-center`}>
								<div className="text-xs font-medium text-black">{i}</div>
							</div>
						))}
					</div>

					<div className="text-black text-sm font-semibold mb-3">?????????????????????</div>

					<div className="grid grid-cols-10 divide-x divide-[#F2F2F2] border border-[#F2F2F2] rounded-sm mb-3">
						{grids.map((i) => (
							<div
								className={`h-[30px] w-[30px] first:rounded-l-sm last:rounded-r-sm flex justify-center items-center`}>
								<div className="text-xs font-medium text-black">{i}</div>
							</div>
						))}
					</div>

					<div className="text-black text-sm font-semibold mb-3">?????????????????????</div>

					<div className="grid grid-cols-10 divide-x divide-[#F2F2F2] border border-[#F2F2F2] rounded-sm mb-3">
						{grids.map((i) => (
							<div
								className={`h-[30px] w-[30px] first:rounded-l-sm last:rounded-r-sm flex justify-center items-center`}>
								<div className="text-xs font-medium text-black">{i}</div>
							</div>
						))}
					</div>
				</div>

				<hr className="w-full border-1 border-[#E9E9E9] mb-4" />

				<div className="px-5">
					<div className="grid grid-cols-6 gap-2 mb-4">
						<Card className="border border-[#E2E2E2] rounded-md py-3 text-center col-span-3">
							<div className="text-[#FE1A01] text-sm font-medium">????????????????????????</div>
						</Card>
						<Card className="border border-[#E2E2E2] rounded-md py-3 text-center col-span-3">
							<div className="text-[#FE1A01] text-sm font-medium">???????????????????????????</div>
						</Card>
						<Card className="border border-[#E2E2E2] rounded-md py-3 text-center col-span-2">
							<div className="text-[#FE1A01] text-sm font-medium">???????????????????????????</div>
						</Card>
						<Card className="border border-[#E2E2E2] rounded-md py-3 text-center col-span-2">
							<div className="text-[#FE1A01] text-sm font-medium">???????????????????????????</div>
						</Card>
						<Card className="border border-[#E2E2E2] rounded-md py-3 text-center col-span-2">
							<div className="text-[#FE1A01] text-sm font-medium">???????????????????????????</div>
						</Card>
					</div>

					<div className="grid grid-cols-5 gap-2 w-full">
						{grid2.map((i) => (
							<div className="px-4 py-3 bg-white border border-[#E9E9E9] rounded hover:bg-[#F8AA02] hover:border-[#F8AA02] text-[#F8AA02] hover:text-black">
								<div className="text-sm font-semibold text-center">{i}</div>
							</div>
						))}
					</div>
				</div>
			</Card>
		</section>
	);
};

const renderTabContents = (target: number) => {
	switch (target) {
		case 0:
			return (
				<>
					<Section1 />
					<Section2 />
				</>
			);
		case 1:
			return (
				<>
					<Section1 />
					<Section3 />
					<Section7 />
					<Section4 />
					<Section2 />
				</>
			);
		case 2:
			return (
				<>
					<Section5 />
					<Section6 />
				</>
			);
	}
};

function LottoPage4() {
	const [tabIndex, setTabIndex] = useState(0);

	const list = {
		?????????????????????: [
			{
				id: 1,
				title: "Does drinking coffee make you smarter?",
				date: "5h ago",
				commentCount: 5,
				shareCount: 2,
			},
			{
				id: 2,
				title: "So you've bought coffee... now what?",
				date: "2h ago",
				commentCount: 3,
				shareCount: 2,
			},
		],
		????????????????????????: [
			{
				id: 1,
				title: "Is tech making coffee better or worse?",
				date: "Jan 7",
				commentCount: 29,
				shareCount: 16,
			},
			{
				id: 2,
				title: "The most innovative things happening in coffee",
				date: "Mar 19",
				commentCount: 24,
				shareCount: 12,
			},
		],
		??????????????????: [
			{
				id: 1,
				title: "Ask Me Anything: 10 answers to your questions about coffee",
				date: "2d ago",
				commentCount: 9,
				shareCount: 5,
			},
			{
				id: 2,
				title: "The worst advice we've ever heard about coffee",
				date: "4d ago",
				commentCount: 1,
				shareCount: 2,
			},
		],
	};

	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<div className="text-base font-semibold mb-4">???????????????????????????????????????</div>
				<div className="text-center text-[#D11500] font-bold text-xl">00 : 05 : 54</div>
				<div className="text-sm font-medium text-[#888888] text-center mt-2">?????????????????? 19/01/2566 12:30</div>
			</section>

			<section className="mb-5"></section>

			<section className="mb-5">
				<Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
					<Tab.List className="flex mb-4">
						{Object.keys(list).map((category) => (
							<Tab
								key={category}
								className={({ selected }) =>
									`first:rounded-tl-md first:border-r first:border-r-white last:rounded-tr-md last:border-l last:border-l-white flex-1 text-center py-2.5 focus:outline-none ${
										selected
											? "bg-[#F8AA02] text-[#1E1E1E] hover:bg-orange-600"
											: "bg-[#E9E9E9] text-[#888888] hover:bg-gray-200"
									}`
								}>
								<div className="font-semibold text-base">{category}</div>
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="mt-2">
						{Object.values(list).map((posts, idx) => (
							<Tab.Panel key={idx}>
								<Transition
									appear
									show={tabIndex == idx}
									enter="transition-opacity duration-700"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="transition-opacity duration-700"
									leaveFrom="opacity-100"
									leaveTo="opacity-0">
									{renderTabContents(idx)}
								</Transition>
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</section>
		</main>
	);
}

export default LottoPage4;
