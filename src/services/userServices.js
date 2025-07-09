import axios from "axios";
import { env } from "node:process"

export default class userServices {
    static SEND_TELEGRAM_MESSAGE_ENDPOINT = `${env.SERVER_ENDPOINT}/my_endpoint`;

    static sendTelegramMessage = async (messageData) => {
        const config = {};
        try {
            return await axios.post(
                this.SEND_TELEGRAM_MESSAGE_ENDPOINT, 
                messageData, 
                config,
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
