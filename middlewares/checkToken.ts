import jwt from "jsonwebtoken";

const checkToken = (req: any, res: any, next: any) => {
	const TOKEN_KEY = process.env.TOKEN_KEY as string;
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (token == null) return res.status(401).json({ error: ["Unauthorized"] });

	jwt.verify(token, TOKEN_KEY, { ignoreExpiration: false }, (err, user) => {
		if (err) {
			if (err.name === "TokenExpiredError") {
				return res.status(401).json({ error: ["Token has expired"] });
			} else {
				return res
					.status(403)
					.json({ error: ["You don't have permission to access"] });
			}
		}
		req.user = user;
		next();
	});
};

export default checkToken;
