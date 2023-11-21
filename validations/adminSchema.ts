import * as yup from "yup";

const adminSchema = yup.object().shape({
	password: yup.string().required("password cannot be empty"),
	admin_id: yup.string().required("admin_id cannot be empty"),
});

export default adminSchema;
