import { StreamChat } from "stream-chat";


// Define values.
const api_key = "4uhrn2sjxfty";
const api_secret = "mmc3wcavhn4bh49jbz5tm59xew3vjg36fd9f4du9svy979j3khfh7vbe2fvxg7pr";
const user_id = "user_2rXbNrErmgWJ4WNUCzRLArFNFT0"
export async function GET(request, res) {
    // res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // // await corsMiddleware(req, res);
    // Initialize a Server Client
    // const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    // const token = serverClient.createToken(user_id);
    // console.log(token);
    // const body = await request.body;
    // console.log(body);
    return Response.json({ message: 'Hello World' })
}

