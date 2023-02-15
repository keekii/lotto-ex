import { Link } from "react-router-dom";
import Button from "../../../components/Button";

import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const generateNumberArr = (number: number) => Array.from(Array(number).keys());

const isNegative = (num: number) => {
	if (num < 0) {
		return <div className="text-[#D11500]">{num.toString().padStart(4, "0")}</div>;
	} else {
		return <div className="text-[#F8AA02]">{num.toString().padStart(4, "0")}</div>;
	}
};

const getRandomNumber = () => {
	return isNegative(Math.floor(Math.random() * (9999 - -9999 + 1)) + -9999);
};

function LottoPage9() {
	return (
		<main role="main" className="home_container">
			<section className="mb-5">
				<Card className="mb-3">
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">สามตัวบน</div>
					</div>
					<div className="text-xl font-semibold text-[#D11500] text-center py-4 tracking-wide">000</div>
				</Card>

				<Card>
					<div className="bg-[#E2E2E2] py-2 rounded-t-md">
						<div className="text-[#1E1E1E] text-base font-semibold text-center">สองตัวล่าง</div>
					</div>
					<div className="text-xl font-semibold text-[#4BAF2A] text-center py-4 tracking-wide">08</div>
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
										<div className="text-sm font-medium">{getRandomNumber()}</div>
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
										<div className="text-sm font-medium">{getRandomNumber()}</div>
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
										<div className="text-sm font-medium">{getRandomNumber()}</div>
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

export default LottoPage9;
