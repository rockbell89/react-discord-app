import { ExpandMoreOutlined, Settings } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SidebarChannel from "./SidebarChannel";
import SidebarAccount from "./SidebarAccount";
import "./Sidebar.scss";
import { useAppSelector } from "../app/hooks";
import useCollection from "../hooks/useCollection";
import { Channel } from "../utils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection("channels");
  const [isToggle, setIsToggle] = useState(true);

  const addChannel = async () => {
    const newChannel = prompt("채널명을 입력해주세요");
    if (newChannel && (newChannel as string).length > 0) {
      await addDoc(collection(db, "channels"), {
        channelName: newChannel,
      });
    }
  };

  const toggleChannels = () => {
    setIsToggle((prevState) => !prevState);
  };

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordLogo.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>

      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreOutlined />
        </div>

        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader" onClick={toggleChannels}>
              {isToggle ? <ExpandMoreOutlined /> : <ExpandMoreOutlined />}
              <h4>Front-End Dev.</h4>
            </div>
            <AddIcon
              className="sidebarAddChannel"
              onClick={() => addChannel()}
            />
          </div>
          {isToggle && (
            <div className="sidebarChannelList">
              {channels.map((channel: Channel) => (
                <SidebarChannel
                  id={channel.id}
                  channel={channel}
                  key={channel.id}
                />
              ))}
            </div>
          )}
          <div className="sidebarSettings">
            <SidebarAccount user={user} />
            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
