import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ValidationError } from "yup";
import { AuthService } from "@/services";
import { adminSchema } from "@/validations";

const TOKEN_KEY = process.env.TOKEN_KEY as string;

const getAccessToken = (admin: { admin_id: string }) => {
	let accessToken = jwt.sign({ admin_id: admin.admin_id }, TOKEN_KEY, {
		expiresIn: "30days",
	});
	return accessToken;
};

const login = async (req: Request, res: Response) => {
	try {
		await adminSchema.validate(req.body);
		const { admin_id, password } = req.body;
		const admin = await AuthService.findByLoginId(admin_id);
		if (!admin) {
			return res.status(404).json({ error: ["Account does not exit"] });
		}
		const isValid = bcrypt.compareSync(password, admin.password);
		if (!isValid) {
			return res.status(401).json({ error: ["Incorrect password!"] });
		}
		const adminData = { admin_id: admin.admin_id };
		return res
			.status(201)
			.json({ admin: adminData, token: getAccessToken(adminData) });
	} catch (error) {
		if (error instanceof ValidationError) {
			return res.status(400).json({ error: [error.message] });
		}
		const customError = new Error("login error") as any;
		customError.originalError = error;
		throw customError;
	}
};

export { login };
