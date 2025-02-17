import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "GSAP Next",
	description: "Generated by NFT knight",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" dir="ltr">
			<body className={dm_sans.className}>{children}</body>
		</html>
	);
}
