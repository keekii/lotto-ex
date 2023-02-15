import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import CardButton from "../../../components/CardButton";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";

function LottoPage() {
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
				<div className="text-base font-semibold mb-4">เข้าเล่นหวยไทย</div>

				<Link to={"/lotto2"}>
					<div className="border-2 border-[#F8AA02] px-4 py-[18px] rounded-md bg-[#FDE2EA] mb-2">
						<div className="flex gap-5">
							<div className="shrink-0 self-center">
								<Image className="h-12 w-12" name="card-lotto-1" alt="card lotto" />
							</div>
							<div className="flex-1 self-center">
								<div className="font-semibold text-lg text-[#AB0038]">ยี่กีทันใจ</div>
								<div className="font-bold text-xl text-[#FB1901]">06.00-04.00</div>
								<div className="font-xs font-medium text-[#1E1E1E]">
									เปิดแทง: <span className="text-[#0CBF65]">264 รอบ</span>
								</div>
							</div>
							<div className="shrink-0 self-center">
								<button className="h-8 w-8 bg-white rounded flex justify-center items-center">
									<svg
										width="8"
										height="15"
										viewBox="0 0 8 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M0.946777 0.659912L7.34678 7.05991L0.946777 13.4599" fill="#FFF9F9" />
										<path
											d="M0.946777 0.659912L7.34677 7.05991L0.946777 13.4599"
											stroke="#AB0038"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</Link>

				<div className="border-2 border-[#F8AA02] px-4 py-[18px] rounded-md bg-[#E1F3F9]">
					<div className="flex gap-5">
						<div className="shrink-0 self-center">
							<Image className="h-12 w-12" name="card-lotto-2" alt="card lotto 2" />
						</div>
						<div className="flex-1 self-center">
							<div className="font-semibold text-lg text-[#005B7B]">ยี่กีทันใจ</div>
							<div className="font-bold text-xl text-[#FB1901]">06.00-04.00</div>
							<div className="font-xs font-medium text-[#1E1E1E]">
								เปิดแทง: <span className="text-[#0CBF65]">264 รอบ</span>
							</div>
						</div>
						<div className="shrink-0 self-center">
							<button className="h-8 w-8 bg-white rounded flex justify-center items-center">
								<svg
									width="8"
									height="15"
									viewBox="0 0 8 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M0.946777 1.54102L7.34678 7.94101L0.946777 14.341" fill="#F9FDFF" />
									<path
										d="M0.946777 1.54102L7.34677 7.94101L0.946777 14.341"
										stroke="#005B7B"
										stroke-width="1.25"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="mb-4">
				<div className="text-base font-semibold mb-4">ประกาศและโปรโมชั่น</div>

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

export default LottoPage;
