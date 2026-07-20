import { BASE_URL } from "@/utils/baseUrl";

export const getWebsiteSettings = async()=>{
    try{
    const res = await fetch(`${BASE_URL}/settings`);
    const data = await res.json();
    return data?.data;
    }catch(err){
        console.log("Error",err);
    }
}