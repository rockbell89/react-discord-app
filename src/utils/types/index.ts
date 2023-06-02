export type Message = {
  timestamp: any;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

export type Channel = {
  id: string;
  channelName: string;
};
