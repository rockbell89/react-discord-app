import { DocumentData } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

export type Message = {
  timestamp?: Timestamp;
  message: string;
  user: User;
};

export type Channel = {
  id: string;
  channel: DocumentData;
};

export type User = {
  uid: string;
  photo: string;
  email: string;
  displayName: string;
};
