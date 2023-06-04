import "./SidebarChannel.scss";
import { Channel } from "../utils";
import { setChannel } from "../store/channelSlice";
import { useAppDispatch } from "../app/hooks";
import { useEffect } from "react";
import { RemoveCircleOutline } from "@mui/icons-material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const SidebarChannel = ({ id, channel }: Channel) => {
  const dispatch = useAppDispatch();

  const deleteChannel = async (id: string) => {
    const result = window.confirm(
      `${channel.channel.channelName} 채널을 정말 삭제하시겠습니까?`
    );
    if (result) {
      await deleteDoc(doc(db, "channels", id));
    }
  };

  useEffect(() => {
    dispatch(
      setChannel({
        channelId: id,
        channelName: channel.channel.channelName,
      })
    );
  }, []);

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannel({
            channelId: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        <span>{channel.channel.channelName}</span>
      </h4>
      <RemoveCircleOutline className="" onClick={() => deleteChannel(id)} />
    </div>
  );
};

export default SidebarChannel;
