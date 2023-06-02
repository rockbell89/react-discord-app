import { Channel } from "./Sidebar";
import "./SidebarChannel.scss";

type SidebarChannelProps = {
  id: string;
  channel: Channel;
};

const SidebarChannel = ({ id, channel }: SidebarChannelProps) => {
  return (
    <div
      className="sidebarChannel"
      onClick={() => console.log(`channel id :${id}`)}
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
