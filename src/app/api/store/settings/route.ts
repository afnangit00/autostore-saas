import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Store from "@/models/Store";
import { getCurrentUserId } from "@/lib/current-user";

export async function GET(){

 await connectDB();


 const ownerId =
  await getCurrentUserId();


 const store =
  await Store.findOne({
   ownerId
  });


 return NextResponse.json({
  success:true,
  store
 });

}

export async function PUT(
 request:Request
){

 await connectDB();


 const ownerId =
  await getCurrentUserId();


 const body =
  await request.json();


 const store =
 await Store.findOneAndUpdate(
 {
  ownerId
 },
 body,
 {
  new:true
 }
 );


 return NextResponse.json({
  success:true,
  store
 });

}