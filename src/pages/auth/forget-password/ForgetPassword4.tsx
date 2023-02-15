import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import { Link } from "react-router-dom";

function ForgetPassword4() {
	return (
		<main role="main" className="auth_container">
			<AuthHeader label="ตั้งค่ารหัสผ่านสำเร็จ" />
			<section className="flex flex-col">
				<div className="flex flex-col justify-center items-center bg-[#F8F7F7] rounded w-full h-[284px] mb-8">
					<div className="flex justify-center items-center w-[86px] h-[86px] rounded-full border-4 border-[#F8AA02] bg-white">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask0_12_450" maskUnits="userSpaceOnUse" x="1" y="2" width="30" height="28">
								<path
									d="M2.7926 14.782C2.77661 14.5979 2.79907 14.4125 2.85854 14.2375C2.91802 14.0626 3.01321 13.9019 3.13808 13.7657C3.26295 13.6294 3.41477 13.5207 3.58391 13.4462C3.75304 13.3718 3.93581 13.3334 4.1206 13.3333H6.6666C7.02022 13.3333 7.35936 13.4738 7.6094 13.7238C7.85945 13.9739 7.99993 14.313 7.99993 14.6666V27.3333C7.99993 27.6869 7.85945 28.0261 7.6094 28.2761C7.35936 28.5262 7.02022 28.6666 6.6666 28.6666H5.2226C4.88888 28.6667 4.56727 28.5417 4.32128 28.3162C4.07528 28.0907 3.92279 27.7811 3.89393 27.4486L2.7926 14.782ZM11.9999 14.25C11.9999 13.6926 12.3466 13.194 12.8499 12.9566C13.9493 12.438 15.8219 11.396 16.6666 9.98731C17.7553 8.17131 17.9606 4.89064 17.9939 4.13931C17.9986 4.03398 17.9959 3.92864 18.0099 3.82464C18.1906 2.52264 20.7033 4.04331 21.6666 5.65131C22.1899 6.52331 22.2566 7.66931 22.2019 8.56464C22.1426 9.52197 21.8619 10.4466 21.5866 11.3653L20.9999 13.3233H28.2379C28.4439 13.3233 28.6471 13.371 28.8316 13.4627C29.0161 13.5544 29.1768 13.6876 29.3011 13.8519C29.4254 14.0162 29.51 14.207 29.5482 14.4094C29.5864 14.6118 29.5772 14.8204 29.5213 15.0186L25.9413 27.696C25.8622 27.9756 25.694 28.2217 25.4623 28.3969C25.2305 28.5721 24.9478 28.6668 24.6573 28.6666H13.3333C12.9796 28.6666 12.6405 28.5262 12.3905 28.2761C12.1404 28.0261 11.9999 27.6869 11.9999 27.3333V14.25Z"
									fill="white"
									stroke="white"
									stroke-width="1.66667"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</mask>
							<g mask="url(#mask0_12_450)">
								<path d="M0 0H32V32H0V0Z" fill="#68C749" />
							</g>
						</svg>
					</div>
					<div className="text-xl text-[#1E1E1E] font-semibold mt-8 mb-3">เปลี่ยนรหัสผ่านสำเร็จ</div>
					<div className="text-sm font-normal text-[#888888]">ทำการเปลี่ยนรหัสสมาชิกใหม่สำเร็จแล้ว</div>
				</div>
				<Link to="/main">
					<Button label="ไปแทงหวยเลย" className="button_1" />
				</Link>
			</section>
		</main>
	);
}

export default ForgetPassword4;
