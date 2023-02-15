import { FC } from "react";

interface Props {
	className?: string;
	name: string;
	alt: string;
}

const Image: FC<Props> = ({ className = "", name = "ex-1", alt }) => (
	<img src={`/assets/images/${name}.png`} className={className} alt={`${alt || name} image`} />
);

export default Image;
