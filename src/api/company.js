import { axiosInstance } from "../utils/AxiosHandler";

export const getCompanies = async () => {
	const res = axiosInstance.get("/api/companies");
	return res;
};
