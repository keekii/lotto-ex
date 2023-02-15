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

function LottoPage13() {
	const list = [
		{
			id: 1,
			label: "สามตัวบน",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-check",
			iconClassName: "h-5 w-5 rounded bg-[#FF5E92] flex justify-center items-center",
		},
		{
			id: 2,
			label: "สามตัวโต๊ด",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-1",
			iconClassName: "h-5 w-5 rounded bg-[#FEE4EC] flex justify-center items-center",
		},
		{
			id: 3,
			label: "กลับสามตัว",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-1",
			iconClassName: "h-5 w-5 rounded bg-[#FEE4EC] flex justify-center items-center",
		},
		{
			id: 4,
			label: "สองตัวบน",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-2",
			iconClassName: "h-5 w-5 rounded bg-[#E2FBDB] flex justify-center items-center",
		},
		{
			id: 5,
			label: "สองตัวล่าง",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-check",
			iconClassName: "h-5 w-5 rounded bg-[#68C749] flex justify-center items-center",
		},
		{
			id: 6,
			label: "กลับสองตัว",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-2",
			iconClassName: "h-5 w-5 rounded bg-[#E2FBDB] flex justify-center items-center",
		},
		{
			id: 7,
			label: "วิ่งบน",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-3",
			iconClassName: "h-5 w-5 rounded bg-[#E8F2F9] flex justify-center items-center",
		},
		{
			id: 8,
			label: "วิ่งล่าง",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-3",
			iconClassName: "h-5 w-5 rounded bg-[#E8F2F9] flex justify-center items-center",
		},
		{
			id: 9,
			label: "กลับเลข",
			className: "rounded-md bg-white p-3 shadow-lg flex items-center gap-2",
			icon: "card-plus-4",
			iconClassName: "h-5 w-5 rounded bg-[#E8E8FF] flex justify-center items-center",
		},
	];

	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<label className="flex text-base font-medium text-[#1E1E1E] mb-3">ระบุชื่อชุด</label>
				<input
					placeholder="ระบุชื่อเลขชุด"
					className="w-full bg-white px-4 py-3 rounded-md focus:outline-none placeholder:text-[#888888] placeholder:font-medium text-[#1E1E1E] mb-5"
				/>

				<div className="text-base text-[#D11500] font-semibold mb-4">เลือกประเภทตัวเลขด้านล่างนี้</div>
				<div className="grid grid-cols-3 gap-2">
					{list.map((i) => (
						<div className={i.className}>
							<div className={i.iconClassName}>
								<Icon name={i.icon} />
							</div>
							<div className="font-medium text-xs text-[#1E1E1E]">{i.label}</div>
						</div>
					))}
				</div>
			</section>

			<section>
				<section className="mb-5">
					<Card className="px-5 py-4">
						<div className="px-5 flex flex-col items-center">
							<div className="py-1 px-3 bg-[#A4DAEC] rounded max-w-fit mb-3">
								<div className="text-xs font-medium text-black">วิ่งล่าง, วิ่งบน</div>
							</div>
						</div>

						<div className="grid grid-cols-5 gap-2">
							{generateNumberArr(10).map((i) => (
								<div className="rounded border border-[#E9E9E9] py-3 text-center hover:bg-[#A4DAEC] hover:border-[#A4DAEC]">
									<div className="text-sm text-[#1E1E1E] font-semibold">{i}</div>
								</div>
							))}
						</div>
					</Card>
				</section>
			</section>

			<button className="w-full bg-[#EF769D] rounded py-3.5 text-white font-semibold mb-5">2 รายการ</button>

			<section className="mb-8">
				<div className="flex flex-col space-y-2">
					{generateNumberArr(3).map((i) => (
						<div className="bg-white rounded shadow-md flex items-stretch h-[52px]">
							<div className="flex-1 px-4 flex items-center text-[#1E1E1E] font-medium">สามตัวหน้า</div>
							<div className="flex-1 border-l border-l-[#F4F4F4] px-4 flex items-center justify-center text-[#1E1E1E] font-bold">
								{Math.floor(Math.random() * 999)
									.toString()
									.padStart(3, "0")}
							</div>
							<div className="flex-none flex items-center px-4">
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
			</section>

			<section className="mb-5">
				<div className="flex flex-col gap-2">
					<Link to="/lotto14">
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

export default LottoPage13;
