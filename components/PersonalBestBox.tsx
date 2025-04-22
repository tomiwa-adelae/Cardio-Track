import { formatDate } from "@/lib/utils";
import React from "react";

const PersonalBestBox = ({
	description,
	value,
	unit,
	date,
	icon,
	color,
}: {
	description: string;
	value: string;
	unit: string;
	date: string;
	icon: string;
	color: string;
}) => {
	const Icon = icon;
	console.log(color);
	return (
		<div
			className={`flex justify-between items-center ${color} shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg p-8`}
		>
			<div>
				<div>
					<p className="text-sm text-muted-foreground">
						{description}
					</p>
					<h4 className="text-xl sm:text-2xl font-semibold mb-2 mt-2">
						{value} {unit}
					</h4>
				</div>
				<p className="text-sm text-muted-foreground">
					{formatDate(date)}
				</p>
			</div>
			<div>
				<Icon />
			</div>
		</div>
	);
};

export default PersonalBestBox;
