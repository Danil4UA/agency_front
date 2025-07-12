import axios from "axios";
import utils from "@/utils/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { messageData } = await request.json();
        
        const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const CHAT_ID = process.env.CHAT_ID;

            console.log('TELEGRAM_BOT_TOKEN exists:', !!TELEGRAM_BOT_TOKEN);
            console.log('CHAT_ID exists:', !!CHAT_ID);
            console.log('TELEGRAM_BOT_TOKEN length:', TELEGRAM_BOT_TOKEN?.length);
            console.log('CHAT_ID value:', CHAT_ID);
        if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
            return NextResponse.json(
                { error: 'Missing Telegram configuration' }, 
                { status: 500 }
            );
        }

        const message = utils.formatTelegramMessageData(messageData);
        
        const response = await axios.post(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, 
            {
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "Markdown"
            }
        );

        return NextResponse.json({ success: true, data: response.data });
    } catch (error) {
        console.error('Telegram API error:', error);
        return NextResponse.json(
            { error: 'Failed to send message' }, 
            { status: 500 }
        );
    }
}