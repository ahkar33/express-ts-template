import { db } from "./db";

const findByLoginId = async (admin_id: string) => {
	const admin = await db.tbl_admin.findFirst({
		where: {
			admin_id,
		},
	});
	return admin;
};

export { findByLoginId };
