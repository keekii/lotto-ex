import Button from "../components/Button";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Image from "../components/Image";

function Index() {
	return (
		<main role="main" className="home_container w-full">
			<section className="flex flex-col mb-5">
				<Link to="/login">
					<Button label="เข้าสู่ระบบ" className="button_2 mb-3" />
				</Link>
				<Link to="/sign-up">
					<Button label="สมัครสมาชิก" className="button_1" />
				</Link>
			</section>

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
		</main>
	);
}

export default Index;
