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
import { Timestamp, collection, onSnapshot, query } from "firebase/firestore";
import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Chat = () => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    const results: Message[] = [];
    onSnapshot(
      query(collection(db, "channels", String(channelId), "messages")),
      (snapshot) => {
        console.log(snapshot.docs);
        snapshot.docs.forEach((doc) => {
          results.push({
            timestamp: doc.data().timestamp,
            message: doc.data().message,
            user: doc.data().user,
          });
        });
        setMessages(results);
      }
    );
  }, [channelId]);

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO : 메세지 저장
    setInputText("");
  };

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
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            sendMessage(event)
          }
        >
          <input
            type="text"
            placeholder="내용을 입력해주세요"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChangeInput(event)
            }
            value={inputText || ""}
          />
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
