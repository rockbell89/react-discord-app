import { useEffect, useState } from "react";
import {
  DocumentData,
  Query,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { Channel } from "../utils";

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);

  const q: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      const results: Channel[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          id: doc.id,
          channel: doc.data(),
        });
      });

      setDocuments(results);
    });
  }, []);
  return { documents };
};

export default useCollection;
