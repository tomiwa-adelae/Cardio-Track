export const navLinks = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: "/assets/icons/dashboard.svg",
	},
	{
		label: "New Cardio Session",
		href: "/new-cardio",
		icon: "/assets/icons/running.svg",
	},
	{
		label: "View Progress",
		href: "/progress",
		icon: "/assets/icons/reports.svg",
	},
	// {
	// 	label: "Reports & Insights",
	// 	href: "/reports",
	// 	icon: "/assets/icons/graph.svg",
	// },
	{
		label: "Profile & Settings",
		href: "/profile",
		icon: "/assets/icons/settings.svg",
	},
];

export const stats = [
	{
		icon: "/assets/icons/dumbbell.svg",
		description: "Total workouts completed",
		title: "sessions",
		number: "10",
	},
	{
		icon: "/assets/icons/fire.svg",
		description: "Total calories burned",
		title: "kcal",
		number: "12,450",
	},
	{
		icon: "/assets/icons/running.svg",
		description: "Total distance covered",
		title: "km",
		number: "120",
	},
	{
		icon: "/assets/icons/heart.svg",
		description: "Average heart rate",
		title: "BPM",
		number: "78",
	},
];

export const workoutType = [
	"Running",
	"Walking",
	"Cycling",
	"Jump Rope",
	"Treadmill",
];

export const workoutIntensities = ["Low", "Moderate", "High"];

export const genders = ["Male", "Female"];

export const CARDIO_LIMIT = 100;

export const showcaseVideo =
	"https://res.cloudinary.com/dh0rc6p1c/video/upload/v1745236782/Cardio%20Track/3195943-uhd_3840_2160_25fps_ehvly2.mp4";

export const joinVideo =
	"https://res.cloudinary.com/dh0rc6p1c/video/upload/v1745243645/Cardio%20Track/3209241-uhd_3840_2160_25fps_qvto7a.mp4";

export const authVideo =
	"https://res.cloudinary.com/dh0rc6p1c/video/upload/v1745243645/Cardio%20Track/3209241-uhd_3840_2160_25fps_qvto7a.mp4";

export const links = [
	{
		slug: "#",
		label: "Home",
	},
	{
		slug: "#about",
		label: "About",
	},
	{
		slug: "#features",
		label: "Features",
	},
	{
		slug: "/sign-up",
		label: "Sign up",
	},
];

export const whys = [
	{
		title: "Effortless Workout Logging",
		animation: require("@/public/assets/animations/workout.json"),
		name: "Workout",
		description:
			"Easily add new cardio sessions with details like duration, distance, intensity, heart rate, and calories burned.",
	},
	{
		title: "Smart Notification System",
		animation: require("@/public/assets/animations/notification.json"),
		name: "Notification",
		description:
			"Get timely reminders, encouragement, and health warnings — just when you need them.",
	},
	{
		title: "Real-Time Analytics",
		animation: require("@/public/assets/animations/analytics.json"),
		name: "Analytics",
		description:
			"Get instant feedback with charts and insights on your progress — average heart rate, total calories burned, and session intensity distribution.",
	},
	{
		title: "Insightful Dashboard",
		animation: require("@/public/assets/animations/dashboard.json"),
		name: "Dashboard",
		description:
			"A personalized dashboard that summarizes your key fitness metrics at a glance — no clutter, just clarity.",
	},
];

export const testimonials = [
	{
		quote: "Cardio Track has transformed how I prepare for races. The detailed analytics helped me improve my pace by 15% in just three months.",
		name: "Sarah J.",
		designation: "Marathon Runner",
		src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744804414/innovation/organizer/WhatsApp_Image_2025-04-15_at_9.41.52_PM_rdlp4j.jpg",
	},
	{
		quote: "I love how easy it is to see my progress over time. The heart rate zone training has been a game-changer for my cardio fitness.",
		name: "Michael T.",
		designation: "Fitness Enthusiast",
		src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744310256/innovation/organizer/WhatsApp_Image_2025-04-09_at_11.44.26_bf546150_qkptqm.jpg",
	},
	{
		quote: "The ability to track different cardio workouts in one place is exactly what I needed. Now I can see how my cycling and swimming complement each other.",
		name: "Emma R.",
		designation: "Cyclist",
		src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744310257/innovation/organizer/surprise_3_yjpcn5.jpg",
	},
	{
		quote: "Cardio Track helped me stay consistent with my workouts, especially during my final year project. I love how easy it is to log my sessions and actually see my progress in charts.",
		name: "Samuel O.",
		designation: "Computer Science Student",
		src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744311935/innovation/organizer/WhatsApp_Image_2025-04-10_at_20.04.42_2d7d0f47_fig9tg.jpg",
	},
	{
		quote: "I’ve tried a few fitness apps, but most are overwhelming. This one keeps it simple, clean, and super focused on cardio. It’s perfect for people who just want to track and grow without distractions.",
		name: "Nora A.",
		designation: "Weekend Runner",
		src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744312373/innovation/organizer/koko_llklvf.jpg",
	},
];

export const hows = [
	{
		image: "/assets/images/new.png",
		title: "Record Your Workouts",
		description:
			"Log your cardio sessions manually or connect with your favorite fitness devices and apps.",
		number: "01",
	},
	{
		image: "/assets/images/insight.png",
		title: "Get Personalized Insights",
		description:
			"Landlords can list properties in a few steps. Renters can search, browse, and book instantly.",
		number: "02",
	},
	{
		image: "/assets/images/progress.png",
		title: "Track Your Progress",
		description:
			"Watch your fitness metrics improve over time and celebrate hitting your goals.",
		number: "03",
	},
];

export const newDashboardAnimations = [
	{
		name: "Running",
		animation: require("@/public/assets/animations/running.json"),
	},
	{
		name: "Jumping rope",
		animation: require("@/public/assets/animations/jumping.json"),
	},
	{
		name: "Cycling",
		animation: require("@/public/assets/animations/cycling.json"),
	},
	{
		name: "Walking",
		animation: require("@/public/assets/animations/walking.json"),
	},
	{
		name: "Treadmill",
		animation: require("@/public/assets/animations/treadmill.json"),
	},
];
