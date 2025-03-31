import { stats } from "@/constants";
import StatsBox from "./StatsBox";

const Stats = () => {
	return (
		<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
			{stats.map(({ icon, title, description, number }, index) => (
				<StatsBox
					key={index}
					icon={icon}
					title={title}
					description={description}
					number={number}
				/>
			))}
		</div>
	);
};

export default Stats;
