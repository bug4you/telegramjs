import api, {fileConfig} from "../util/utils";
import {GET_ME, GET_UPDATES, SEND_MESSAGE, SEND_PHOTO} from "../util/constant";

export default class Init {
    constructor(token) {
        this.token = token;
    }

    async getMe() {
        return await api(this.token, GET_ME);
    }

    async getUpdates() {
        return await api(this.token, GET_UPDATES);
    }

    async sendMessage(text = "", chatId, options) {
        return await api(this.token, SEND_MESSAGE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text ? text : "",
                ...options
            })
        })
    }

    async sendPhoto(photo, chatId, options) {
        if (photo) {
            const formData = fileConfig(chatId, "photo", photo, options);
            return api(this.token, SEND_PHOTO, {
                method: "POST",
                body: formData,
                redirect: "follow"
            });
        } else {
            throw new Error("photo is empty");
        }
    }
}

