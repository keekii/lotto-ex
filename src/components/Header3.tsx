import { Component } from "react";
import Logo from "../assets/images/logo.png";
import Icon from "./Icon";
import Image from "./Image";

type Props = {
	className?: String;
};

export class Header3 extends Component<Props, any> {
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
				<div className="bg-header2 bg-[#F8AA02] bg-cover bg-center bg-no-repeat">
					<div className="px-6 py-6">
						<Image className="w-[108px] " name="header-logo-2" alt="logo" />
					</div>
					<div className="flex px-5 py-2.5 bg-orange-300 bg-opacity-60">
						<div className="flex-1">
							<div className="text-base font-semibold text-[#1E1E1E]">Tungus</div>
							<div className="flex items-center gap-2">
								<Image className="h-5 w-5 animate-bounce" name="header-coin-2" alt="header coin" />
								<span className="text-base font-bold text-[#1E1E1E]">400.42</span>
							</div>
						</div>
						<div className="flex items-center gap-1">
							<span className="text-black text-sm font-medium">ติดต่อเอเย่นต์</span>
							<Icon name="header-phone-2" />
							<Icon name="arrow-right-2" />
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header3;
