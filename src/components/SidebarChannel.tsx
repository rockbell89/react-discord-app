import "./SidebarChannel.scss";
import { Channel } from "../utils";
import { setChannel } from "../store/channelSlice";
import { useAppDispatch } from "../app/hooks";

const SidebarChannel = ({ id, channel }: Channel) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() => dispatch(setChannel(channel))}
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        <span>{channel.channel.channelName}</span>
      </h4>
    </div>
  );
};

export default SidebarChannel;
