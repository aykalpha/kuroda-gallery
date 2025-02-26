import { cn } from "@/lib/utils";
import { Zen_Old_Mincho } from "next/font/google";
import type React from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const zenOldMincho = Zen_Old_Mincho({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-zen-old-mincho",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<meta
					name="description"
					content="黒田画廊 - あなただけの特別な一枚を"
				/>
				<meta
					name="keywords"
					content="黒田画廊, ギャラリー, 美術, アート, 絵画"
				/>
				<meta name="author" content="黒田画廊" />
				<title>黒田画廊 - KURODA GALLERY -</title>
			</head>
			<body className={cn("font-serif tracking-widest", zenOldMincho.variable)}>
				<SiteHeader />
				<main>{children}</main>
			</body>
		</html>
	);
}
