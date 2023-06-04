import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import "./Chat.scss";
import {
  AddCircleOutline,
  CardGiftcardOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import GifIcon from "@mui/icons-material/Gif";
import { useAppSelector } from "../app/hooks";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import ChatMessage from "./ChatMessage";
import { Message } from "../utils";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const Chat = () => {
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);

  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "channels", String(channelId), "messages"),
        orderBy("timestamp", "asc")
      ),
      (snapshot) => {
        let results: Message[] = [];
        snapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
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

  const sendMessage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        timestamp: serverTimestamp(),
        message: inputText,
        user: user,
      }
    );
    console.log(docRef);

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
        <form>
          <input
            type="text"
            placeholder={`#${channelName} 메세지 전송`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            value={inputText}
            disabled={Boolean(!channelId)}
          />
          <button
            type="submit"
            className="chatInputButton"
            disabled={Boolean(!channelId)}
            onClick={(e: React.MouseEvent<HTMLElement>) => sendMessage(e)}
          >
            送信
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
