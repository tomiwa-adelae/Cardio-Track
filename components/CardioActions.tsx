"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { DeleteCardioModal } from "./modals/DeleteCardioModal";
import { useState } from "react";

const CardioActions = ({
	success,
	cardioId,
	userId,
}: {
	success: any;
	cardioId: string;
	userId: string;
}) => {
	const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

	return (
		<>
			<div>
				<h3 className="font-medium text-lg mb-4 uppercase">Actions</h3>
				<div className="flex flex-wrap items-center justify-start gap-4">
					<Button className="w-full sm:w-auto" asChild size={"lg"}>
						<Link href="/progress">View Progress</Link>
					</Button>
					<Button
						className="w-full sm:w-auto"
						variant={"green"}
						asChild
						size={"lg"}
					>
						<Link href="/new-cardio">Log Another Session</Link>
					</Button>
					{success && (
						<Button
							className="w-full sm:w-auto"
							variant={"outline"}
							asChild
							size={"lg"}
						>
							<Link href="/dashboard">Return to Dashboard</Link>
						</Button>
					)}
					{!success && (
						<Button
							className="w-full sm:w-auto"
							variant={"outline"}
							asChild
							size={"lg"}
						>
							<Link href="/new-cardio?edit=true">
								Edit Session
							</Link>
						</Button>
					)}
					{!success && (
						<Button
							className="w-full sm:w-auto"
							onClick={() => {
								setOpenDeleteModal(true);
							}}
							variant={"secondary"}
							size={"lg"}
						>
							Delete session
						</Button>
					)}
				</div>
			</div>
			{openDeleteModal && (
				<DeleteCardioModal
					cardioId={cardioId}
					open={openDeleteModal}
					closeModal={() => {
						setOpenDeleteModal(false);
					}}
					userId={userId}
				/>
			)}
		</>
	);
};

export default CardioActions;
