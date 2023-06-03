import "./SidebarChannel.scss";
import { Channel } from "../utils";

const SidebarChannel = ({ id, channel }: Channel) => {
  return (
    <div
      className="sidebarChannel"
      onClick={() => console.log(`channel id :${id}`)}
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        <span>{channel.channel.channelName}</span>
      </h4>
    </div>
  );
};

export default SidebarChannel;
