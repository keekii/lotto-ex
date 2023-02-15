import { Link } from "react-router-dom";
import Button from "../../../components/Button";

import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const generateNumberArr = (number: number) => Array.from(Array(number).keys());

function LottoPage8() {
	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<div className="bg-[#D11500] py-3.5 rounded text-white font-semibold flex justify-center items-center gap-2 mb-5">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.99996 7.50005V10.8334M16.7025 17.5H3.29746C2.01579 17.5 1.21413 16.1134 1.85246 15.0025L8.55496 3.34588C9.19663 2.23171 10.8041 2.23171 11.445 3.34588L18.1475 15.0025C18.7858 16.1134 17.9833 17.5 16.7025 17.5Z"
							stroke="white"
							stroke-width="1.25"
							stroke-linecap="round"
						/>
						<path
							d="M10 14.1749L10.0083 14.1658"
							stroke="white"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					คืนโพย
				</div>

				<Card className="mb-3">
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">สามตัวบน</div>
					</div>
					<div className="text-xl font-semibold text-[#D11500] text-center py-4">รอผล</div>
				</Card>

				<Card>
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">สองตัวล่าง</div>
					</div>
					<div className="text-xl font-semibold text-[#4BAF2A] text-center py-4">รอผล</div>
				</Card>
			</section>

			<section className="mb-5">
				<div className="text-base font-semibold mb-4">สามตัวบน</div>

				<div className="flex flex-col space-y-2 mb-4">
					{generateNumberArr(4).map((i) => (
						<Link to="/lotto10">
							<Card className="flex items-stretch h-[48px]">
								<div className="shrink-0 basis-16 text-[#D11500] text-sm font-semibold tracking-wide self-center flex justify-center">
									{Math.floor(Math.random() * 999)
										.toString()
										.padStart(3, "0")}
								</div>
								<div className="flex-1 flex flex-col text-sm font-bold text-[#1E1E1E] border-x border-x-[#F2F2F2] px-4 justify-center">
									<div className="font-xs font-medium text-black">แทง 5</div>
									<div className="font-xs font-medium text-[#888888]">จ่าย 4,000</div>
								</div>
								<div className="shrink-0 basis-32 flex justify-center items-center">
									<div className="grid grid-cols-2 gap-3">
										<div className="text-sm font-medium text-[#4BAF2A]">รับแทง</div>
										<div className="text-sm font-medium text-[#F8AA02]">รอผล</div>
									</div>
								</div>
							</Card>
						</Link>
					))}
				</div>

				<div className="text-base font-semibold mb-4">สองตัวล่าง</div>

				<div className="flex flex-col space-y-2 mb-4">
					{generateNumberArr(4).map((i) => (
						<Link to="/lotto10">
							<Card className="flex items-stretch h-[48px]">
								<div className="shrink-0 basis-16 text-[#D11500] text-sm font-semibold tracking-wide self-center flex justify-center">
									{Math.floor(Math.random() * 99)
										.toString()
										.padStart(2, "0")}
								</div>
								<div className="flex-1 flex flex-col text-sm font-bold text-[#1E1E1E] border-x border-x-[#F2F2F2] px-4 justify-center">
									<div className="font-xs font-medium text-black">แทง 5</div>
									<div className="font-xs font-medium text-[#888888]">จ่าย 4,000</div>
								</div>
								<div className="shrink-0 basis-32 flex justify-center items-center">
									<div className="grid grid-cols-2 gap-3">
										<div className="text-sm font-medium text-[#4BAF2A]">รับแทง</div>
										<div className="text-sm font-medium text-[#F8AA02]">รอผล</div>
									</div>
								</div>
							</Card>
						</Link>
					))}
				</div>

				<div className="text-base font-semibold mb-4">วิ่งล่าง</div>

				<div className="flex flex-col space-y-2 mb-4">
					{generateNumberArr(4).map((i) => (
						<Link to="/lotto10">
							<Card className="flex items-stretch h-[48px]">
								<div className="shrink-0 basis-16 text-[#D11500] text-sm font-semibold tracking-wide self-center flex justify-center">
									{Math.floor(Math.random() * 9).toString()}
								</div>
								<div className="flex-1 flex flex-col text-sm font-bold text-[#1E1E1E] border-x border-x-[#F2F2F2] px-4 justify-center">
									<div className="font-xs font-medium text-black">แทง 5</div>
									<div className="font-xs font-medium text-[#888888]">จ่าย 4,000</div>
								</div>
								<div className="shrink-0 basis-32 flex justify-center items-center">
									<div className="grid grid-cols-2 gap-3">
										<div className="text-sm font-medium text-[#4BAF2A]">รับแทง</div>
										<div className="text-sm font-medium text-[#F8AA02]">รอผล</div>
									</div>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}

export default LottoPage8;
