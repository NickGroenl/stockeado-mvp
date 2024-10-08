import dbConnect from "../../../db";
import { NextResponse } from "next/server";
import Inventory from "../../../../../models/inventory.model";
import Users from "../../../../../models/user.model";
import { headers } from "next/headers";
import middlewareApi from "../../../midd/_middleware.api";

export async function GET (req: Request | any, res: Response, next: any){
    try{
      if(middlewareApi()){ 
        await dbConnect();
        const shop = headers().get('id');
        const response = await Users.findById({_id: shop});
        const responseInventory = await Inventory.find({owner_id: shop, inMP: true});
        var responseUpdate;
        if(response?.visits !== undefined){
          responseUpdate = await Users.findOneAndUpdate({_id: shop}, { visits: response?.visits  + 1 });

        }else
        responseUpdate = await Users.findOneAndUpdate({_id: shop});
    
        if(response !== undefined){
            return NextResponse.json({message: 'Valid tokens', user: response ?? {} , items: responseInventory ?? [] });
        }
        return NextResponse.json({message: 'Invalid token'});
      }
      return NextResponse.json({message: 'Invalid auth'});
    }
    catch(error){
      console.log(error);
      return NextResponse.json({message: 'Invalid token', error});
    }
    
}

export async function POST(
    req: Request,
  ) {
        try {  
          if(middlewareApi()){
            await dbConnect();

            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const response = await Inventory.findOneAndUpdate({_id: body._id}, { ...body });
            return NextResponse.json({ message: "Item updated", item: response});
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}