import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

const NewUserBox = () => {
	return (
		<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg p-8">
			<h2 className="text-2xl font-medium text-primary">
				No Cardio Sessions Yet!
			</h2>
			<p className="text-base text-gray-700 mt-1.5">
				Welcome! Start tracking your cardio sessions to see your
				progress over time. Logging your workouts helps you stay
				motivated and improve your fitness!
			</p>
			<Image
				src={"/assets/icons/running.svg"}
				alt={"Running icon"}
				width={1000}
				height={1000}
				className="w-20 h-20 my-8"
			/>
			<Button asChild size={"lg"}>
				<Link href="/new-cardio">Log first cardio session</Link>
			</Button>

			<Separator className="my-8" />

			<p className="italic text-base">
				Every journey starts with a single step. Log your first session
				and take control of your fitness!
			</p>
		</div>
	);
};

export default NewUserBox;
