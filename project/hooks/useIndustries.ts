import { BASE_URL } from "@/utils/baseUrl";

export const useGetAllIndustries = async()=>{
    const res = await fetch(`${BASE_URL}/industries`);
    const data = await res.json();
    return data;
}