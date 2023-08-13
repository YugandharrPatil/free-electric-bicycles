import { Playfair_Display, Source_Code_Pro } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
	weight: "600",
	subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
	weight: "700",
	subsets: ["latin"],
});

export default function Header() {
	return (
		<>
			<Image className="mx-auto w-5/6 mt-20" src="/headerimg.png" width={8274} height="0" alt="profile" />
		</>
	);
}
