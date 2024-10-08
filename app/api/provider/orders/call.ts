import axios from '../../call';

export const createOrder = async (body: object) => {
    
    try{
        const response: any = await axios.post("/provider/orders", {...body}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        console.log(response);
        if(response?.data?.order !== undefined){
            return response?.data?.order;
        } else return null;
    }
    catch(error){
        return null;
    }
}
export const getOrders = async (id: string) => {
    
    try{
        
        const response: any = await axios.get("/provider/orders/edit", {headers: {'token': id, authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        console.log(response);
        return response?.data?.orders;
    }
    catch(error){
        return null;
    }
}
export const getOrdersWorkshop = async (id: string) => {
    
    try{
        
        const response: any = await axios.get("/provider/orders/get", {headers: {'token': id, authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        console.log(response);
        return response?.data?.orders;
    }
    catch(error){
        return null;
    }
}
export const updateOrderState = async (body: object) => {
    try{
        
        const response: any = await axios.post("/provider/orders/edit", body, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        if(response?.data?.order !== undefined){
            return response?.data?.order;
        } else return null;
    }
    catch(error){
        return null;
    }
}
export const getOrder = async (id: string) => {
    
    try{
        
        const response: any = await axios.get("/provider/orders", {headers: {'token': id, authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        return response?.data?.order;
    }
    catch(error){
        return null;
    }
}
