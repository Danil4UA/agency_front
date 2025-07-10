import axios from "axios";
import utils from "@/utils/utils";
import { TelegramMessageType } from "@/types/telegram";

export default class userServices {
    static TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

    static CHAT_ID = process.env.CHAT_ID;

    static sendTelegramMessage = async (
        messageData: TelegramMessageType,
    ) => {
        try {
            const message = utils.formatTelegramMessageData(messageData);
            await axios.post(`https://api.telegram.org/bot${this.TELEGRAM_BOT_TOKEN}/sendMessage`, {
                chat_id: this.CHAT_ID,
                text: message,
                parse_mode: "Markdown"
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
