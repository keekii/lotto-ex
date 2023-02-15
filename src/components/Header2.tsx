import { Component } from "react";
import Logo from "../assets/images/logo.png";
import Icon from "./Icon";
import Image from "./Image";

type Props = {
	className?: String;
};

export class Header2 extends Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const { className } = this.props;
		return (
			<header className={`sticky top-0 bg-red-300 flex-col z-50 ${className || ""}`}>
				<div className="flex items-center text-white text-center bg-orange-500 py-2 border-b border-white border-opacity-30">
					<marquee scrollamount="5">
						ยินดีต้อนรับทุกท่านเข้าสู่ Thailotto เว็บไซต์ซื้อหวยออนไลน์อันดับ 1 ของไทย เรามีให้บริการทั้ง
						หวยรัฐบาล หวยลาว หวยมาเลย์ หวยฮานอย หวยหุ้นไทยและต่างประเทศ หวยยี่กี 264 รอบ
						พร้อมให้สมาชิกทุกท่านได้ร่วมสนุก ฝาก-ถอน รวดเร็ว ทันใจ ยินดีให้บริการตลอด 24 ชั่วโมง ค่ะ **
						กรุณาตรวจสอบโพยทุกครั้ง ก่อนส่งเดิมพันนะคะ **{" "}
					</marquee>
				</div>
				<div className="flex flex-col justify-center bg-header bg-cover bg-center bg-no-repeat p-5 gap-3">
					<div className="flex justify-between">
						<Image className="h-[15px] w-[97px]" name="logo" alt="logo" />
						<div className="flex items-center gap-1">
							<span className="text-white text-sm font-medium">ติดต่อเอเย่นต์</span>
							<Icon name="header-phone" />
							<Icon name="arrow-right" />
						</div>
					</div>
					<div className="flex bg-white rounded-md p-4">
						<div className="flex-1">
							<div className="text-sm font-medium text-[#888888]">เครดิตของคุณ</div>
							<div className="text-base font-semibold text-[#1E1E1E]">เครดิตคงเหลือ:</div>
						</div>
						<div className="flex items-center">
							<span className="text-xl font-semibold text-black mr-2">400.42</span>
							<Image className="h-5 w-5 animate-bounce" name="header-coin" alt="header coin" />
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header2;
