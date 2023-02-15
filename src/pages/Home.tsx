import Card from "../components/Card";
import CardButton from "../components/CardButton";
import Image from "../components/Image";

function Home() {
	return (
		<main role="main" className="home_container">
			<section className="mb-4">
				<div className="header_1 mb-4">ผลรางวัล</div>

				<Card className="mb-3">
					<div className="card_header card_header_1">
						<Image className="h-5 w-5" name="ex-1" alt="ยี่กีทันใจ รอบที่ 85" />
						<div className="card_text_header_1 ml-2.5">ยี่กีทันใจ รอบที่ 85</div>
					</div>
					<div className="card_body">
						<div className="card_sub_header_1">
							<div className="flex justify-around">
								<div>สามตัวบน</div>
								<div>สองตัวล่าง</div>
							</div>
						</div>
						<div className="card_content_1">
							<div className="pt-4 pb-3">746</div>
							<div className="pt-4 pb-3">39</div>
						</div>
					</div>
				</Card>

				<Card className="mb-4">
					<div className="card_header card_header_2">
						<Image className="h-5 w-5" name="ex-2" alt="ยี่กีทันใจ รอบที่ 85" />
						<div className="card_text_header_2 ml-2.5">ยี่กีทันใจ รอบที่ 85</div>
					</div>
					<div className="card_body">
						<div className="card_sub_header_1">
							<div className="flex justify-around">
								<div>สามตัวบน</div>
								<div>สองตัวล่าง</div>
							</div>
						</div>
						<div className="card_content_1">
							<div className="pt-4 pb-3">746</div>
							<div className="pt-4 pb-3">39</div>
						</div>
					</div>
				</Card>
			</section>

			<section className="mb-4">
				<div className="header_1 mb-4">เข้าเล่นหวยไทย</div>

				<Card className="mb-3">
					<div className="card_header card_header_1 flex justify-between items-center">
						<div className="flex items-center">
							<Image className="h-5 w-5" name="ex-1" alt="ยี่กีทันใจ" />
							<div className="card_text_header_1 ml-2.5">ยี่กีทันใจ</div>
						</div>
						<CardButton className="h-5 w-5 bg-white" />
					</div>
					<div className="px-4 pt-3 pb-4">
						<div className="grid grid-cols-2">
							<div className="card_text_content_1">
								<div className="mb-2">เวลา:</div>
								<div>
									เปิดแทง: <span className="text-green-400">132 รอบ</span>
								</div>
							</div>
							<div className="text-xl text-end text-red-530 font-semibold self-center">06.00-04.00</div>
						</div>
					</div>
				</Card>

				<Card className="mb-3">
					<div className="card_header card_header_2 flex justify-between items-center">
						<div className="flex items-center">
							<Image className="h-5 w-5" name="ex-1" alt="ยี่กีทันใจ" />
							<div className="card_text_header_2 ml-2.5">ยี่กีทันใจ</div>
						</div>
						<CardButton className="h-5 w-5 bg-white" color="#5BD4FF" />
					</div>
					<div className="px-4 pt-3 pb-4">
						<div className="grid grid-cols-2">
							<div className="card_text_content_1">
								<div className="mb-2">เวลา:</div>
								<div>
									เปิดแทง: <span className="text-green-400">132 รอบ</span>
								</div>
							</div>
							<div className="text-xl text-end text-red-530 font-semibold self-center">06.00-04.00</div>
						</div>
					</div>
				</Card>
			</section>

			{/* <section className="mb-4">
				<TextInput placeholder="เบอร์โทรศัพท์" icon />

				<div className="text-base font-semibold mb-4">จับยี่กีทันใจ</div>
				<div className="p-4 mb-3 bg-white drop-shadow-md rounded-md">
					<div className="flex">
						<div className="flex-auto">
							<div className="text-sm text-gray-700 font-medium">รอบที่:</div>
							<div className="text-gray-600 text-xl font-semibold my-1.5">00 : 00 : 00</div>
							<div className="text-gray-700 text-sm font-medium">ปิดรับ: 19/01/2566 11:30:00</div>
						</div>
						<div className="shrink-0 flex flex-col justify-between">
							<div className="text-xl text-end text-black font-bold">67</div>
							<button className="h-5 w-5 bg-gray-400 rounded flex justify-center items-center self-end">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6 4L10 8L6 12"
										stroke="#888888"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white drop-shadow-md rounded-md">
					<div className="flex">
						<div className="flex-auto">
							<div className="text-sm text-gray-700 font-medium">รอบที่:</div>
							<div className="text-green-500 text-xl font-semibold my-1.5">00 : 00 : 00</div>
							<div className="text-gray-700 text-sm font-medium">ปิดรับ: 19/01/2566 11:30:00</div>
						</div>
						<div className="shrink-0 flex flex-col justify-between">
							<div className="text-xl text-end text-black font-bold">68</div>
							<button className="h-5 w-5 bg-gray-400 rounded flex justify-center items-center self-end">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6 4L10 8L6 12"
										stroke="#888888"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section> */}
		</main>
	);
}

export default Home;
