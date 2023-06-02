import { auth } from "../firebase";
import { User } from "../utils";
import "./SidebarAccount.scss";

type UserAccoutProps = {
  user: User | null;
};

const SidebarAccount = ({ user }: UserAccoutProps) => {
  return (
    <div className="sidebarAccount" onClick={() => auth.signOut()}>
      <img src={user?.photo} alt="account" />
      <div className="accountName">
        <h4>{user?.displayName}</h4>
        <span>#{user?.uid.substring(0, 4)}</span>
      </div>
    </div>
  );
};

export default SidebarAccount;
