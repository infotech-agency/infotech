import { BASE_URL } from "@/utils/baseUrl";

export const getAllBlogs = async()=>{
    try{
    const res = await fetch(`${BASE_URL}/blogs`);
    const blogs = await res.json();
    // console.log(data)
    return blogs;
    }catch(err){
        console.log(err);
    }
}
