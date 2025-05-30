import React from "react";

const SectionHeader = ({
	description,
	title,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div className="space-y-1">
			<h1 className="font-semibold uppercase text-xl lg:text-2xl">
				{title}
			</h1>
			<p className="text-base text-muted-foreground">{description}</p>
		</div>
	);
};

export default SectionHeader;
