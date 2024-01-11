import {BASE_URL} from "./constant";

const api = (botToken, url, options = {}) => {
    return new Promise((resolve, reject) => fetch(`${BASE_URL + botToken + url}`, options).then(resp => resolve(resp.json())).catch(error => reject(error)));
};
export const fileConfig = (chat_id, fileType, file, {
    caption,
    parseMode,
    disable_notification = false,
    protect_content = false,
    reply_to_message_id
}) => {
    const formData = new FormData();
    formData.append("chat_id", chat_id);
    formData.append(fileType, file, file.name.replaceAll(".", "\\."));
    if (caption) caption && formData.append("caption", caption);
    if (parseMode) formData.append("parse_mode", parseMode);
    disable_notification && formData.append("disable_notification", disable_notification);
    protect_content && formData.append("protect_content", protect_content);
    if (reply_to_message_id) reply_to_message_id && formData.append("reply_to_message_id", reply_to_message_id);
    return formData;
};
export default api;