import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import { Link } from "react-router-dom";
import TextInput from "../../../components/TextInput";

function SignUpForm3() {
	return (
		<main role="main" className="auth_container">
			<AuthHeader label="กรอกข้อมูลให้ครบถ้วนเพื่อสมัครสมาชิก" />
			<section className="flex flex-col">
				<div className="text-xl font-semibold text-[#1E1E1E] mb-3">ข้อมูลเพื่อเข้าใช้งานระบบ</div>
				<TextInput
					className="mb-3"
					type="password"
					label="ชื่อเข้าใช้งานระบบ"
					placeholder="กรอกชื่อเข้าใช้งานระบบ"
				/>
				<TextInput className="mb-2" type="password" label="รหัสผ่าน" placeholder="ตั้งรหัสผ่าน" />
				<div className="text-xs font-medium text-[#FE1A01] mb-3">กรอกรหัสผ่านอย่างน้อย 6 ตัว เช่น A,a,0-9</div>
				<TextInput className="mb-8" type="password" label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน" />
				<Link to="/sign-up4">
					<Button label="ยืนยัน" className="button_1" />
				</Link>
			</section>
		</main>
	);
}

export default SignUpForm3;
