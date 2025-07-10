import { TelegramMessageType } from "@/types/telegram";

export default class utils {
    static formatTelegramMessageData = (
        messageData: TelegramMessageType
    ) => {
        const {
            name,
            message,
        } = messageData;

        const messageArray = [];

        if(name){
            messageArray.push(`Name: ${name}`)
        }

        if(message){
            messageArray.push(`Message: ${message}`)
        }

        return messageArray.join("\n");
    }
}