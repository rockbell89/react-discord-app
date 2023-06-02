import ChatHeader from "./ChatHeader";
import "./Chat.scss";
import {
  AddCircleOutline,
  CardGiftcardOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import GifIcon from "@mui/icons-material/Gif";
import ChatMessage from "./ChatMessage";
import { Message } from "../utils";
import { Timestamp } from "firebase/firestore/lite";

const channelName = "react";

const messages: Message[] = [
  {
    timestamp: Timestamp.now(),
    message: "string",
    user: {
      uid: "string",
      photo: "string",
      email: "string",
      displayName: "string",
    },
  },
];

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chatMessages">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>
      <div className="chatInput">
        <AddCircleOutline fontSize="large" />
        <form>
          <input type="text" placeholder="내용을 입력해주세요" value="" />
          <button type="submit" className="chatInputButton">
            전송
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardOutlined />
          <GifIcon />
          <EmojiEmotionsOutlined />
        </div>
      </div>
    </div>
  );
};

export default Chat;
