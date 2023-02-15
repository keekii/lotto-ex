import { Component } from "react";
import Logo from "../assets/images/logo.png";
import Image from "./Image";

type Props = {
	className?: String;
};

export class Header extends Component<Props, any> {
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
				<div className="bg-orange-400 p-5">
					<Image className="h-[15px] w-[97px]" name="logo" alt="logo" />
				</div>
			</header>
		);
	}
}

export default Header;
