import { backendClient } from "@/sanity/lib/backendClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Ensure required metadata exists
    const { orderNumber, customerName, customerEmail, clerkUserId, products, totalPrice } = body;
    if (!orderNumber || !customerName || !customerEmail || !products || !totalPrice) {
      return NextResponse.json(
        { error: "Missing required order details" },
        { status: 400 }
      );
    }

    // Create order in Sanity
    const order = await backendClient.create({
      _type: "order",
      orderNumber,
      customerName,
      clerkUserId,
      email: customerEmail,
      products,
      totalPrice,
      status: "paid",
      orderDate: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error("Error creating order in Sanity:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
