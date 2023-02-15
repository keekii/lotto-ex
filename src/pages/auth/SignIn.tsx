import Logo from "../assets/images/logo-4x.png";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader";

function SignIn() {
	return (
		<main role="main" className="auth_container">
			<AuthHeader label="เข้าสู่ระบบเพื่อใช้งาน" />
			<section className="flex flex-col">
				<div className="text-xl font-semibold text-[#1E1E1E] mb-4">เข้าสู่ระบบ</div>
				<TextInput className="mb-3" label="ชื่อผู้ใช้งาน" placeholder="กรอกชื่อผู้ใช้งาน" icon />
				<TextInput className="mb-3" label="รหัสผ่าน" placeholder="กรอกรหัสผ่าน" type="password" icon />

				<div className="flex mb-8 justify-between items-center">
					<div className="flex items-center">
						<input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 rounded" />
						<label for="default-checkbox" className="ml-2 text-xs font-normal text-black">
							จำฉันไว้ในระบบ
						</label>
					</div>
					<Link to="/forget-password" className="text-xs font-medium text-[#FE1A01]">
						ลืมรหัสผ่าน?
					</Link>
				</div>

				<section>
					<Link to="/">
						<Button label="เข้าสู่ระบบ" className="button_1" />
					</Link>
					<div className="flex items-center my-8">
						<div className="w-full h-[1px] bg-[#E9E9E9]"></div>
						<div className="text-sm font-medium text-[#888888] mx-3">หรือ</div>
						<div className="w-full h-[1px] bg-[#E9E9E9]"></div>
					</div>
					<Link to="/sign-up">
						<Button label="สมัครสมาชิก" className="button_2" />
					</Link>
				</section>
			</section>
		</main>
	);
}

export default SignIn;
