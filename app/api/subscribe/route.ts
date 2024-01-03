import axios from "axios";

import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  const { email } = await req.json();

  if (!email || !email.length) {
    return new NextResponse("Email is required", { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);

    if (response.status >= 400) {
      return new NextResponse(
        "There was an error subscribing to the newsletter.",
        { status: 400 }
      );
    }

    // return res.status(201).json({ message: "success" });
    return NextResponse.json(res);
  } catch (error) {
    console.log("[API_SUBSCRIBE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
