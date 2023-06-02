import { ExpandMoreOutlined, Settings } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SidebarChannel from "./SidebarChannel";
import { Channel } from "../utils";
import SidebarAccount from "./SidebarAccount";
import "./Sidebar.scss";
import { useAppSelector } from "../app/hooks";

const channels: Channel[] = [
  {
    id: "c1",
    channelName: "react",
  },
  {
    id: "c2",
    channelName: "next",
  },
  {
    id: "c3",
    channelName: "firebase",
  },
];

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

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
            <div className="sidebarHeader">
              <ExpandMoreOutlined />
              <h4>Front-End Dev.</h4>
            </div>
            <AddIcon className="sidebarAddChannel" />
          </div>

          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannel
                id={channel.id}
                channel={channel}
                key={channel.id}
              />
            ))}
          </div>
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
