import { Avatar } from "@mui/material";
import "./ChatMessage.scss";
import { Message } from "../utils";

const ChatMessage = ({ message, timestamp, user }: Message) => {
  return (
    <div className="message">
      <Avatar src={user?.photo} />
      <div className="messageInfo">
        <h4>
          {user?.displayName}
          <span className="messageTimestamp">
            {timestamp?.toDate().toLocaleDateString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
