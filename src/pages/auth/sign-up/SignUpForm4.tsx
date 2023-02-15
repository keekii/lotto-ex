import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import { Link } from "react-router-dom";
import TextInput from "../../../components/TextInput";

function SignUpForm4() {
	return (
		<main role="main" className="auth_container">
			<AuthHeader label="กรอกข้อมูลให้ครบถ้วนเพื่อสมัครสมาชิก" />
			<section className="flex flex-col">
				<div className="text-xl font-semibold text-[#1E1E1E] mb-3">ข้อมูลธนาคารในการแจ้งถอน</div>

				<label className="flex text-base font-medium text-[#FD1B02] mb-3">เลือกธนาคาร*</label>
				<TextInput className="mb-3" placeholder="เลือกธนาคาร" />

				<label className="flex text-base font-medium text-[#FD1B02] mb-3">เลขที่บัญชี*</label>
				<TextInput className="mb-3" placeholder="กรอกเลขที่บัญชี" />

				<TextInput className="mb-3" label="คำนำหน้า" placeholder="ตั้งรหัสผ่าน" />
				<TextInput className="mb-3" label="ชื่อจริง" placeholder="กรอกชื่อจริง" />
				<TextInput className="mb-8" label="นามสกุล" placeholder="กรอกนามสกุล" />

				<Link to="/sign-up5">
					<Button label="ยืนยัน" className="button_1" />
				</Link>
			</section>
		</main>
	);
}

export default SignUpForm4;
