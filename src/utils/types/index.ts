import { DocumentData } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

export type Message = {
  timestamp?: Timestamp | null | undefined;
  message: string | null;
  user: User | null;
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
