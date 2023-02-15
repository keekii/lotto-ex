import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import { Link } from "react-router-dom";
import TextInput from "../../../components/TextInput";
import Image from "../../../components/Image";

function SignUpForm2() {
	return (
		<main role="main" className="auth_container">
			<AuthHeader label="กรอกข้อมูลให้ครบถ้วนเพื่อสมัครสมาชิก" />
			<section className="flex flex-col">
				<div className="text-xl font-semibold text-[#1E1E1E] mb-2">กรอกรหัส OTP</div>
				<div className="text-sm font-medium text-[#1E1E1E]">
					รหัส OTP 4 หลัก ถูกส่งไปยังหมายเลข <span className="text-[#4BAF2A]">089-7642847</span>
				</div>

				<div className="flex justify-center my-6">
					<div className="h-14 w-14 bg-[#F2F2F2] rounded mr-3"></div>
					<div className="h-14 w-14 bg-[#F2F2F2] rounded mr-3"></div>
					<div className="h-14 w-14 bg-[#F2F2F2] rounded mr-3"></div>
					<div className="h-14 w-14 bg-[#F2F2F2] rounded mr-3"></div>
				</div>
				<div className="text-xs font-medium text-[#FE1A01] text-center mb-8">56 วินาที</div>
				<Link to="/sign-up3">
					<Button label="ยืนยัน" className="button_1" />
				</Link>
			</section>
		</main>
	);
}

export default SignUpForm2;
