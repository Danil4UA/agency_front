import axios from "axios";
import { TelegramMessageType } from "@/types/telegram";

export default class userServices {
    static SEND_TELEGRAM_MESSAGE_ENDPOINT = `/api/telegram/send-message`;

    static sendTelegramMessage = async (
        messageData: TelegramMessageType,
    ) => {
        try {
            const response = await axios.post(this.SEND_TELEGRAM_MESSAGE_ENDPOINT, {
                messageData
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
