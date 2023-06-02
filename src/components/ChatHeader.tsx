import {
  HelpRounded,
  Notifications,
  SearchRounded,
  SendRounded,
} from "@mui/icons-material";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./ChatHeader.scss";

type ChatHeaderProps = {
  channelName: string | null;
};

const ChatHeader = ({ channelName }: ChatHeaderProps) => {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeaderRight">
        <Notifications />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="검색" />
          <SearchRounded />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
};

export default ChatHeader;
