import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { AOSProvider } from "@/components/shared/AOSProvider";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Cardio Track – Monitor, Analyze & Improve Your Cardio Health",
	description:
		"Track your running, walking, cycling, and more. Cardio Track helps you log workouts, monitor heart rate, calories burned, and gain insights into your fitness journey.",
	keywords:
		"cardio tracker, workout monitoring, fitness log app, heart rate tracker, track calories burned, online cardio tool",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={montserrat.className}>
					<AOSProvider />
					{children}
					<Toaster />
				</body>
			</html>
		</ClerkProvider>
	);
}
