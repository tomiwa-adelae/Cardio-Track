"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
// import { updateListing } from "@/lib/actions/list.actions";
import { toast } from "@/hooks/use-toast";
import { FileUpload } from "../ui/file-upload";
import { uploadImage } from "@/lib/actions/upload,actions";
import { updateUser } from "@/lib/actions/user.actions";
// import { uploadDocuments } from "@/lib/actions/upload.actions";

export function ImageModal({
	open,
	closeModal,
	userId,
}: {
	userId: string;
	open: boolean;
	closeModal: () => void;
}) {
	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState<any>("");

	// Handle form submission
	const handleSubmit = async () => {
		try {
			setLoading(true);

			const uploadResult = await uploadImage(image);

			if (uploadResult?.status === 400) {
				toast({
					title: "Error!",
					description: uploadResult?.message,
					variant: "destructive",
				});
				return;
			}

			const details = {
				picture: uploadResult.url,
				pictureId: uploadResult.id,
			};

			const res = await updateUser({ details, userId });
			toast({ title: "Success!", description: res?.message });
			closeModal();
		} catch (error) {
			toast({
				title: "Error!",
				description: "An error occurred!",
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Drawer open={open} onClose={closeModal}>
			<DrawerContent>
				<div className="mx-auto w-full sm:max-w-sm lg:max-w-lg py-10 container">
					<FileUpload
						title={"Change profile picture"}
						loading={loading}
						onChange={(files) => {
							const reader = new FileReader();
							reader.readAsDataURL(files[0]);
							reader.onload = async () => {
								try {
									const binaryString = reader.result;

									setLoading(true);

									setImage(binaryString);
								} catch (error) {
									setLoading(false);
								} finally {
									setLoading(false);
								}
							};
						}}
					/>

					{/* Action Buttons */}
					<div className="flex items-center justify-between gap-4 mt-4 flex-col md:flex-row w-full">
						<DrawerClose asChild>
							<Button
								size="lg"
								onClick={closeModal}
								variant="outline"
								className="w-full rounded-full md:w-auto"
							>
								Cancel
							</Button>
						</DrawerClose>
						<Button
							size="lg"
							onClick={handleSubmit}
							disabled={loading}
							className="w-full rounded-full md:w-auto"
						>
							{loading ? "Submitting..." : "Submit"}
						</Button>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
