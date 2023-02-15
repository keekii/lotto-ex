import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import CardButton from "../../../components/CardButton";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";

function LottoPage2() {
	const menu = [
		{ id: 1, label: "ตั้งค่าบัญชี", icon: "menu-user" },
		{ id: 2, label: "ระบบแนะนำ", icon: "menu-people" },
		{ id: 3, label: "รายงานฝาก/ถอน", icon: "menu-transfer" },
		{ id: 4, label: "รายงานเครดิต", icon: "menu-plus-minus" },
		{ id: 5, label: "สร้างเลขชุด", icon: "menu-calculator" },
		{ id: 6, label: "เลขเด็ด", icon: "menu-number-list" },
		{ id: 7, label: "ข้อตกลงการใช้", icon: "menu-info" },
		{ id: 8, label: "กล่องจดหมาย", icon: "menu-message" },
		{ id: 9, label: "ติดต่อเอเย่นต์", icon: "menu-phone" },
		{ id: 10, label: "ข่าว", icon: "menu-news" },
		{ id: 11, label: "ออกจากระบบ", icon: "menu-sign-out", route: "/main" },
	];

	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<div className="text-base font-semibold mb-4">จับยี่กีทันใจ</div>

				<div className="flex flex-col gap-3">
					<Link to={"/lotto3"}>
						<div className="p-4 bg-white drop-shadow-md rounded-md">
							<div className="flex">
								<div className="flex-auto">
									<div className="text-sm text-[#888888] font-medium">รอบที่:</div>
									<div className="text-[#DDDDDD] text-xl font-semibold my-1.5">00 : 00 : 00</div>
									<div className="text-[#888888] text-sm font-medium">
										ปิดรับ: 19/01/2566 11:30:00
									</div>
								</div>
								<div className="shrink-0 flex flex-col justify-between">
									<div className="text-xl text-end text-black font-bold">67</div>
									<button className="h-5 w-5 bg-[#E9E9E9] rounded flex justify-center items-center self-end">
										<Icon name="card-lotto-arrow-right-2" />
									</button>
								</div>
							</div>
						</div>
					</Link>

					<div className="p-4 bg-white drop-shadow-md rounded-md">
						<div className="flex">
							<div className="flex-auto">
								<div className="text-sm text-[#888888] font-medium">รอบที่:</div>
								<div className="text-[#47AF25] text-xl font-semibold my-1.5">00 : 00 : 00</div>
								<div className="text-[#888888] text-sm font-medium">ปิดรับ: 19/01/2566 11:30:00</div>
							</div>
							<div className="shrink-0 flex flex-col justify-between">
								<div className="text-xl text-end text-black font-bold">68</div>
								<button className="h-5 w-5 bg-[#E9E9E9] rounded flex justify-center items-center self-end">
									<Icon name="card-lotto-arrow-right-2" />
								</button>
							</div>
						</div>
					</div>

					<div className="p-4 bg-white drop-shadow-md rounded-md">
						<div className="flex">
							<div className="flex-auto">
								<div className="text-sm text-[#888888] font-medium">รอบที่:</div>
								<div className="text-[#47AF25] text-xl font-semibold my-1.5">00 : 00 : 00</div>
								<div className="text-[#888888] text-sm font-medium">ปิดรับ: 19/01/2566 11:30:00</div>
							</div>
							<div className="shrink-0 flex flex-col justify-between">
								<div className="text-xl text-end text-black font-bold">68</div>
								<button className="h-5 w-5 bg-[#E9E9E9] rounded flex justify-center items-center self-end">
									<Icon name="card-lotto-arrow-right-2" />
								</button>
							</div>
						</div>
					</div>

					<div className="p-4 bg-white drop-shadow-md rounded-md">
						<div className="flex">
							<div className="flex-auto">
								<div className="text-sm text-[#888888] font-medium">รอบที่:</div>
								<div className="text-[#47AF25] text-xl font-semibold my-1.5">00 : 00 : 00</div>
								<div className="text-[#888888] text-sm font-medium">ปิดรับ: 19/01/2566 11:30:00</div>
							</div>
							<div className="shrink-0 flex flex-col justify-between">
								<div className="text-xl text-end text-black font-bold">68</div>
								<button className="h-5 w-5 bg-[#E9E9E9] rounded flex justify-center items-center self-end">
									<Icon name="card-lotto-arrow-right-2" />
								</button>
							</div>
						</div>
					</div>

					<div className="p-4 bg-white drop-shadow-md rounded-md">
						<div className="flex">
							<div className="flex-auto">
								<div className="text-sm text-[#888888] font-medium">รอบที่:</div>
								<div className="text-[#47AF25] text-xl font-semibold my-1.5">00 : 00 : 00</div>
								<div className="text-[#888888] text-sm font-medium">ปิดรับ: 19/01/2566 11:30:00</div>
							</div>
							<div className="shrink-0 flex flex-col justify-between">
								<div className="text-xl text-end text-black font-bold">68</div>
								<button className="h-5 w-5 bg-[#E9E9E9] rounded flex justify-center items-center self-end">
									<Icon name="card-lotto-arrow-right-2" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default LottoPage2;
