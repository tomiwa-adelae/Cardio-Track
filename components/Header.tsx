"use client";
import Logo from "./shared/Logo";
import { links } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { MobileNavbar } from "./shared/MobileNavbar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Header = ({ color, user }: { color: string; user: any }) => {
	const pathname = usePathname();

	return (
		<header className="fixed top-0 left-0 w-full h-24 bg-[rgba(0,0,0,0.5)] text-white flex items-center justify-center py-4">
			<div className="w-full container flex items-center justify-between gap-4">
				<Logo color={color} />
				<nav
					className="hidden flex-1 md:flex items-center justify-end gap-6"
					data-aos="fade-left"
				>
					{links.map((link, index) => {
						const isActive =
							pathname === link.slug ||
							pathname.startsWith(`${link.slug}/`);
						return (
							<Link
								key={index}
								className={cn(
									"uppercase text-xs lg:text-sm font-medium",
									isActive && "text-primary"
								)}
								href={link.slug}
							>
								{link.label}
							</Link>
						);
					})}
					<SignedOut>
						<Button asChild size={"md"} className="rounded-full">
							<Link href="/sign-in">Login</Link>
						</Button>
					</SignedOut>
					<SignedIn>
						<Button size={"md"} className="rounded-full" asChild>
							<Link href="/dashboard">Dashboard</Link>
						</Button>
					</SignedIn>
				</nav>
				<div
					className="md:hidden flex items-center justify-center gap-2 md:gap-4"
					data-aos="fade-left"
					data-aos-delay="100"
				>
					<SignedOut>
						<Button variant={"ghost"} size={"md"} asChild>
							<Link href="/sign-up">Sign up</Link>
						</Button>
					</SignedOut>
					<MobileNavbar user={user} />
				</div>
			</div>
		</header>
	);
};

export default Header;
