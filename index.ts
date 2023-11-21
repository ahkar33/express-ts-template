import "module-alias/register";
import { register } from "tsconfig-paths";

register({
	baseUrl: __dirname,
	paths: {
		"@/*": ["./*"],
	},
});

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { handleJSONParsingError } from "@/utils";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(helmet());
// const corsOptions = {
//   origin: 'http://example.com'
// };
app.use(cors());
app.use(express.json());
app.use(handleJSONParsingError);

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
