import { Timestamp } from "firebase/firestore/lite";

export type Message = {
  timestamp?: Timestamp;
  message: string;
  user: User;
};

export type Channel = {
  id: string;
  channelName: string;
};

export type User = {
  uid: string;
  photo: string;
  email: string;
  displayName: string;
};
