import { handleChatHttpRequest } from "../server/chat";

export default {
  async fetch(request: Request) {
    return handleChatHttpRequest(request);
  },
};
