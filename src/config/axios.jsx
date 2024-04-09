import { getConfig } from "@testing-library/react";
import axios from "axios";

const instance=axios.create({
    baseURL:'http://localhost:3005'
});

instance.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token");
    if(token){
        config.headers["X-auth-token"]=`Bearer ${token}`
    }
    return config;
})