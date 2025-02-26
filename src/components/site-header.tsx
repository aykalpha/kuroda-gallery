"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="border-b flex h-16 items-center px-4">
			<div className="m-4">
				<Image src="/icon.ico" alt="Logo" width={40} height={40} priority />
			</div>
			<Link href="/" className="flex flex-col">
				<span className="text-md">黒田画廊</span>
				<span className="text-xs">KURODA GALLERY</span>
			</Link>
			<nav className="ml-auto flex space-x-4">
				{[
					{ href: "/about", label: "ABOUT" },
					{ href: "/shop", label: "SHOP" },
					{ href: "/contact", label: "CONTACT" },
				].map(({ href, label }) => (
					<Link
						key={href}
						href={href}
						className={cn(
							"text-sm transition-colors hover:bg-foreground hover:text-background px-4 py-2 rounded",
							pathname === href,
						)}
					>
						{label}
					</Link>
				))}
			</nav>
		</header>
	);
}
