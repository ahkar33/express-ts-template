import { Request, Response } from "express";

const withErrorHandling = (asyncFunction: Function) => {
	return async (req: Request, res: Response) => {
		try {
			return await asyncFunction(req, res);
		} catch (error: any) {
			return res.status(500).json({ error: ["Something went wrong"] });
		}
	};
};

export default withErrorHandling;
