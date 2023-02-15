import { Link } from "react-router-dom";
import AuthHeader from "../../../components/AuthHeader";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";

function ForgetPassword3() {
	return (
		<main role="main" className="auth_container">
			<AuthHeader label="ลืมรหัสผ่าน" />
			<section className="flex flex-col">
				<div className="text-xl font-semibold text-[#1E1E1E] mb-2">ตั้งค่ารหัสผ่าน</div>
				<TextInput className="mb-2" type="password" label="รหัสผ่าน" placeholder="ตั้งรหัสผ่าน" />
				<div className="text-xs font-medium text-[#FE1A01] mb-3">กรอกรหัสผ่านอย่างน้อย 6 ตัว เช่น A,a,0-9</div>
				<TextInput className="mb-8" type="password" label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน" />
				<Link to="/forget-password/summary">
					<Button label="ยืนยัน" className="button_1" />
				</Link>
			</section>
		</main>
	);
}

export default ForgetPassword3;
