"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSProvider = () => {
	useEffect(() => {
		AOS.init({
			easing: "ease-out-cubic",
			duration: 1000,
			once: true,
		});
	}, []);

	return null;
};
