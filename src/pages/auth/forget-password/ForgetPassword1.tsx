import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import { Link } from "react-router-dom";
import TextInput from "../../../components/TextInput";
import Image from "../../../components/Image";
import Icon from "../../../components/Icon";

function ForgetPassword1() {
	return (
		<main role="main" className="auth_container">
			<AuthHeader label="ลืมรหัสผ่าน" />
			<section className="flex flex-col">
				<label className="text-base font-medium text-[#1E1E1E] mb-3">กรอกเบอร์โทรศัพท์</label>
				<div className="flex mb-5">
					<div className="flex items-center justify-center h-10 bg-[#F2F2F2] rounded w-20 self-end mr-2">
						<Image className="h-3.5" name="thai" alt="nationality" />
						<span className="ml-1 font-medium">+66</span>
					</div>
					<TextInput placeholder="เบอร์โทรศัพท์" icon className="" />
				</div>

				<div className="flex items-center px-4 bg-[#FE1600] rounded text-white text-xs font-semibold h-8 mb-3">
					<Icon className="h-4 w-4" name="caution" alt="caution" />
					<div className="ml-2">ยืนยันว่าคุณไม่ใช่หุ่นยนต์</div>
				</div>

				<div className="h-[84px] border border-[#E2E2E2] rounded flex text-4xl font-bold justify-center items-center">
					CAPTCHA
				</div>

				<TextInput placeholder="กรอกโค้ดที่นี่" className="my-3" />
				<div className="text-xs font-medium text-[#FE1A01] text-center mb-8">
					หลังจากทำการยืนยันเบอร์โทรศัพท์ ท่านจะได้รับรหัส 4 หลักทาง SMS
				</div>
				<Link to="/forget-password/otp">
					<Button label="ยืนยัน" className="button_1" />
				</Link>
			</section>
		</main>
	);
}

export default ForgetPassword1;
