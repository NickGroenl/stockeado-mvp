import { NextResponse } from "next/server";
import dbConnect from "./../../../db";
import Client from '../../../../../models/workshops/clients.model';
export async function POST(
    req: Request,
  ) {
        try {  
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const response = await Client.findOneAndUpdate({_id: body._id}, { ...body?.object});
            if(response) return NextResponse.json({ message: "Client updated", client: response});
          
            return NextResponse.json({ message: "Invalid auth" });
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
