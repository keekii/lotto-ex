import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import CardButton from "../../../components/CardButton";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";

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
		<Link to={"/lotto4"}>
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

function LottoPage3() {
	return (
		<main role="main" className="home_container">
			<section className="mb-4">
				<div className="text-base font-semibold mb-4">จับยี่กีทันใจ</div>
				<div className="py-[0.813rem] bg-white rounded-md shadow-lg">
					<div className="text-[#D11500] font-semibold text-base text-center">ปิดทายผลตัวเลขออกรางวัล</div>
				</div>
			</section>

			<section className="flex flex-col gap-3 mb-4">
				<Card>
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">ผลรวมยิงเลข</div>
					</div>
					<div className="text-xl font-semibold text-[#47AF25] text-center py-4">11662216</div>
				</Card>

				<Card>
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">ผลรวมยิงเลข</div>
					</div>
					<div className="text-xl font-semibold text-[#47AF25] text-center py-4">11662216</div>
				</Card>
			</section>

			<section className="mb-5">
				<Card>
					<div className="bg-[#F8AA02] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">ผลรวมยิงเลข</div>
					</div>
					<div className="bg-[#E2E2E2] py-2 px-4">
						<div className="text-xs font-medium text-[#1E1E1E]">สมาชิกยิงเลขได้ลำดับที่ 16</div>
					</div>
					<div className="flex justify-between p-4 items-center">
						<div className="text-sm font-medium text-[#0702FF]">Aod***ong</div>
						<div className="text-sm font-semibold text-[#47AF25]">+รับ 200 เครดิต</div>
					</div>
				</Card>
			</section>

			<section className="mb-5 flex flex-col gap-3">
				<Card>
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">ผลรางวัล</div>
					</div>
					<div className="text-xl font-semibold text-center py-4">
						<span className="text-[#1E1E1E]">116</span>
						<span className="text-[#211DBA]">22</span>
						<span className="text-[#EF769D]">594</span>
					</div>
				</Card>

				<Card>
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">สามตัวบน</div>
					</div>
					<div className="text-xl font-semibold text-center py-4">
						<span className="text-[#EF769D]">594</span>
					</div>
				</Card>

				<Card>
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">สามตัวบน</div>
					</div>
					<div className="text-xl font-semibold text-center py-4">
						<span className="text-[#211DBA]">22</span>
					</div>
				</Card>
			</section>

			<section className="mb-5">
				<div className="text-base font-semibold mb-4">ตารางอันดับ</div>
				<Table />
				<div className="flex justify-between items-center">
					<select
						className="bg-[#E9E9E9] rounded px-[5px] py-[2px] focus:outline-none font-medium text-xs text-[#1E1E1E]"
						name="cars"
						id="cars">
						<option value="volvo">20 แถว</option>
					</select>
					<div className="flex gap-2">
						<button className="h-5 w-5 bg-[#E9E9E9] rounded flex items-center justify-center text-sm font-medium text-[#888888]">
							<Icon name="pagination-arrow-left" />
						</button>
						<button className="h-5 w-5 bg-[#E9E9E9] rounded flex items-center justify-center text-sm font-medium text-[#888888]">
							1
						</button>
						<button className="h-5 w-5 bg-[#F5D1DF] rounded flex items-center justify-center text-sm font-medium text-[#C1366B]">
							2
						</button>
						<button className="h-5 w-5 bg-[#E9E9E9] rounded flex items-center justify-center text-sm font-medium text-[#888888]">
							3
						</button>
						<button className="h-5 w-5 bg-[#E9E9E9] rounded flex items-center justify-center text-sm font-medium text-[#888888]">
							4
						</button>
						<button className="h-5 w-5 bg-[#E9E9E9] rounded flex items-center justify-center text-sm font-medium text-[#888888]">
							<Icon name="pagination-arrow-right" />
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default LottoPage3;
