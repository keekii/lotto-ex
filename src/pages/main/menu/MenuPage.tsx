import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

function MenuPage() {
	const menu = [
		{ id: 1, label: "ตั้งค่าบัญชี", icon: "menu-user" },
		{ id: 2, label: "ระบบแนะนำ", icon: "menu-people" },
		{ id: 3, label: "รายงานฝาก/ถอน", icon: "menu-transfer" },
		{ id: 4, label: "รายงานเครดิต", icon: "menu-plus-minus", route: "/credits/summaries" },
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
				<div className="flex gap-2">
					<Button className="button_3" label="ถอนเครดิต" />
					<Button className="button_2" label="ฝากเครดิต" />
				</div>
			</section>

			<section className="mb-5">
				<div className="grid grid-cols-3 gap-2">
					{menu.map((i) => (
						<Link
							to={i.route || ""}
							className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm h-[88px]">
							<div className="flex items-center justify-center h-8 w-8 rounded bg-[#FFF6E2] mb-2">
								<Icon name={i.icon} />
							</div>
							<div className="font-medium text-xs text-[#1E1E1E]">{i.label}</div>
						</Link>
					))}
				</div>
			</section>

			<section className="mb-4">
				<div className="text-base font-semibold mb-4">เข้าเล่นหวยไทย</div>

				<Card className="px-4 py-3 mb-3">
					<div className="flex flex-col">
						<div className="flex">
							<div className="text-white text-xxs font-bold bg-[#D11500] shrink-0 px-[0.438rem] py-[0.219rem] rounded-sm">
								มาแรง!
							</div>
						</div>
						<div className="text-[#1E1E1E] text-base font-semibold pt-2 pb-1">
							เปิดรับเดิมพันหวยยี่กี 5 นาที
						</div>
						<div className="text-[#888888] text-xs font-medium">
							เปิดรับเดิมพันหวยยี่กี 5 นาที ของเว็บ lotto ในระบบ
						</div>
						<hr className="my-2 border-[#F2F2F2]" />
						<div className="flex items-center">
							<Icon name="card-clock" alt="วันที่" />
							<div className="text-[#888888] text-xxs font-medium ml-1">15/01/2565, 14:24 น.</div>
							<div className="flex items-center ml-3">
								<Icon name="card-user" alt="ผู้เขียน" />
								<div className="text-[#888888] text-xxs font-medium ml-1">โดย: แอดมิน</div>
							</div>
						</div>
					</div>
				</Card>

				<Card className="px-4 py-3 mb-4">
					<div className="flex flex-col">
						<div className="flex">
							<div className="text-white text-xxs font-bold bg-[#4BAF2A] shrink-0 px-[0.438rem] py-[0.219rem] rounded-sm">
								มาใหม่!
							</div>
						</div>
						<div className="text-[#1E1E1E] text-base font-semibold pt-2 pb-1">
							เปิดรับเดิมพันหวยยี่กี 5 นาที
						</div>
						<div className="text-[#888888] text-xs font-medium">
							เปิดรับเดิมพันหวยยี่กี 5 นาที ของเว็บ lotto ในระบบ
						</div>
						<hr className="my-2 border-[#F2F2F2]" />
						<div className="flex items-center">
							<Icon name="card-clock" alt="วันที่" />
							<div className="text-[#888888] text-xxs font-medium ml-1">15/01/2565, 14:24 น.</div>
							<div className="flex items-center ml-3">
								<Icon name="card-user" alt="ผู้เขียน" />
								<div className="text-[#888888] text-xxs font-medium ml-1">โดย: แอดมิน</div>
							</div>
						</div>
					</div>
				</Card>

				<Card className="px-4 py-3">
					<div className="flex flex-col">
						<div className="flex">
							<div className="text-white text-xxs font-bold bg-[#4BAF2A] shrink-0 px-[0.438rem] py-[0.219rem] rounded-sm">
								มาใหม่!
							</div>
						</div>
						<div className="text-[#1E1E1E] text-base font-semibold pt-2 pb-1">
							เปิดรับเดิมพันหวยยี่กี 5 นาที
						</div>
						<div className="text-[#888888] text-xs font-medium">
							เปิดรับเดิมพันหวยยี่กี 5 นาที ของเว็บ lotto ในระบบ
						</div>
						<hr className="my-2 border-[#F2F2F2]" />
						<div className="flex items-center">
							<Icon name="card-clock" alt="วันที่" />
							<div className="text-[#888888] text-xxs font-medium ml-1">15/01/2565, 14:24 น.</div>
							<div className="flex items-center ml-3">
								<Icon name="card-user" alt="ผู้เขียน" />
								<div className="text-[#888888] text-xxs font-medium ml-1">โดย: แอดมิน</div>
							</div>
						</div>
					</div>
				</Card>
			</section>
		</main>
	);
}

export default MenuPage;
