import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";

function SignUpForm5() {
	return (
		<main role="main" className="auth_container">
			<AuthHeader label="สำเร็จแล้ว!!" className="text-[#68C749]" />
			<section className="flex flex-col">
				<div className="flex flex-col justify-center items-center bg-[#F8F7F7] rounded w-full h-[284px] mb-8">
					<div className="flex justify-center items-center w-[86px] h-[86px] rounded-full border-4 border-[#F8AA02] bg-white">
						<Icon name="thumb-up" />
					</div>
					<div className="text-xl text-[#1E1E1E] font-semibold mt-8 mb-3">สมัครสมาชิกสำเร็จ</div>
					<div className="text-sm font-normal text-[#888888]">ทำการสมัครสมาชิกสำเร็จเรียบร้อยแล้ว</div>
				</div>
				<Link to="/main">
					<Button label="ไปแทงหวยเลย" className="button_1" />
				</Link>
			</section>
		</main>
	);
}

export default SignUpForm5;
