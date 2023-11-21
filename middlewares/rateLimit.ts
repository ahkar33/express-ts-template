import setRateLimit from "express-rate-limit";

const rateLimit = setRateLimit({
	windowMs: 60 * 1000,
	max: 8,
	message: { error: ["Too many failed attempts. Please try again later"] },
	headers: true,
});

export default rateLimit;
