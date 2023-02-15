import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const generateNumberArr = (number: number) => Array.from(Array(number).keys());

const creditType = (type: string) => {
	switch (type) {
		case "ถอนเครดิต":
			return <div className="text-[#EF769D] font-semibold">ถอนเครดิต</div>;
		case "เติมเครดิต":
			return <div className="text-[#4BAF2A] font-semibold">เติมเครดิต</div>;
		case "ชนะเดิมพัน":
			return <div className="text-[#211DBA] font-semibold">ชนะเดิมพัน</div>;
		case "แทงพนัน":
			return <div className="text-[#D11500] font-semibold">แทงพนัน</div>;
	}
};

const creditIcon = (type: number) => {
	switch (type) {
		case 1:
			return (
				<div className="h-6 w-6 rounded-full bg-[#FCE9E9] flex items-center justify-center">
					<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12.5" r="12" fill="#FCE9E9" />
						<path
							d="M8 12.5H16"
							stroke="#EF769D"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			);
		case 2:
			return (
				<div className="h-6 w-6 rounded-full bg-[#E0F3D9] flex items-center justify-center">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4 8H8M8 8H12M8 8V4M8 8V12"
							stroke="#4BAF2A"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			);
	}
};

function CreditSummaryPage() {
	const data = [
		{
			id: 1,
			doc_no: "#0295129461",
			type: "ถอนเครดิต",
			date: "19/01/2566 11:25:00",
			total_amount: 500,
			credit_remain: 25,
			status: 1,
		},
		{
			id: 2,
			doc_no: "#0295129461",
			type: "เติมเครดิต",
			date: "19/01/2566 11:25:00",
			total_amount: 500,
			credit_remain: 25,
			status: 2,
		},
		{
			id: 3,
			doc_no: "#0295129461",
			type: "ชนะเดิมพัน",
			date: "19/01/2566 11:25:00",
			total_amount: 500,
			credit_remain: 25,
			status: 2,
		},
		{
			id: 4,
			doc_no: "#0295129461",
			type: "แทงพนัน",
			date: "19/01/2566 11:25:00",
			total_amount: 500,
			credit_remain: 25,
			status: 1,
		},
	];

	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<div className="flex gap-2">
					<Link className="flex-1" to="/credit1">
						<Button className="button_3" label="ถอนเครดิต" />
					</Link>
					<Button className="button_2 flex-1" label="ฝากเครดิต" />
				</div>
			</section>

			<section className="mb-5">
				<div className="flex justify-between items-center">
					<div className="text-base font-semibold mb-4">สองตัวล่าง</div>
					<div className="flex items-center text-xs text-[#888888] mb-4 space-x-1">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.625 7.00001C2.625 9.41617 4.58383 11.375 7 11.375C9.41617 11.375 11.375 9.41617 11.375 7.00001C11.375 4.58384 9.41617 2.62501 7 2.62501C5.86002 2.62347 4.76478 3.06844 3.94887 3.86459H4.88542C5.00145 3.86459 5.11273 3.91068 5.19478 3.99273C5.27682 4.07478 5.32292 4.18606 5.32292 4.30209C5.32292 4.41812 5.27682 4.5294 5.19478 4.61145C5.11273 4.6935 5.00145 4.73959 4.88542 4.73959H2.98958C2.87355 4.73959 2.76227 4.6935 2.68022 4.61145C2.59818 4.5294 2.55208 4.41812 2.55208 4.30209V2.40626C2.55208 2.29022 2.59818 2.17894 2.68022 2.0969C2.76227 2.01485 2.87355 1.96876 2.98958 1.96876C3.10562 1.96876 3.2169 2.01485 3.29894 2.0969C3.38099 2.17894 3.42708 2.29022 3.42708 2.40626V3.15321C4.39723 2.24964 5.67425 1.74811 7 1.75001C9.89946 1.75001 12.25 4.10055 12.25 7.00001C12.25 9.89946 9.89946 12.25 7 12.25C4.10054 12.25 1.75 9.89946 1.75 7.00001C1.75 6.84805 1.75642 6.69726 1.76925 6.54851C1.78996 6.30292 2.00317 6.12501 2.24962 6.12501C2.48879 6.12501 2.66729 6.34463 2.64454 6.58292C2.63171 6.72001 2.625 6.85884 2.625 7.00001ZM7.29167 4.52084C7.29167 4.40481 7.24557 4.29353 7.16353 4.21148C7.08148 4.12943 6.9702 4.08334 6.85417 4.08334C6.73813 4.08334 6.62685 4.12943 6.54481 4.21148C6.46276 4.29353 6.41667 4.40481 6.41667 4.52084V7.43751C6.41667 7.55354 6.46276 7.66482 6.54481 7.74686C6.62685 7.82891 6.73813 7.87501 6.85417 7.87501H8.3125C8.42853 7.87501 8.53981 7.82891 8.62186 7.74686C8.70391 7.66482 8.75 7.55354 8.75 7.43751C8.75 7.32147 8.70391 7.21019 8.62186 7.12815C8.53981 7.0461 8.42853 7.00001 8.3125 7.00001H7.29167V4.52084Z"
								fill="#888888"
							/>
						</svg>
						<span>ดูรายการย้อนหลัง</span>
					</div>
				</div>

				<Card className="flex flex-col mb-5">
					{generateNumberArr(4).map((i) => {
						return data.map((i) => (
							<div className="border-b border-b-[#F2F2F2] last:border-0 px-4 py-3 flex space-x-4 items-center">
								<div className="flex-none">{creditIcon(i.status)}</div>
								<div className="flex-1 flex flex-col space-y-1.5">
									<div className="text-xs text-[#F8AA02] font-medium">{i.doc_no}</div>
									{creditType(i.type)}
									<div className="text-xs text-[#888888] font-medium">{i.date}</div>
								</div>
								<div className="flex-none text-end space-y-1.5">
									<div
										className={`text-sm font-bold ${
											i.status === 1 ? "text-[#D11500]" : "text-[#4BAF2A]"
										}`}>
										{i.status === 1 ? `-${i.total_amount}` : i.total_amount}
									</div>
									<div className="text-xs text-[#1E1E1E] font-medium">{`คงเหลือ: ${i.credit_remain}`}</div>
									<div className="text-xs text-[#888888] font-medium">เครดิต</div>
								</div>
							</div>
						));
					})}
				</Card>

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
						<button className="h-5 w-5 bg-[#F5EAC0] rounded flex items-center justify-center text-sm font-medium text-[#F8AA02]">
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

export default CreditSummaryPage;
