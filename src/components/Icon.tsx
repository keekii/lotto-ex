import { FC } from "react";

interface Props {
	className?: string;
	name: string;
	alt?: string;
}

const Icon: FC<Props> = ({ className = "", name = "user", alt }) => (
	<img src={`/assets/icons/${name}.svg`} className={className} alt={`${alt || name} icon`} />
);

export default Icon;
