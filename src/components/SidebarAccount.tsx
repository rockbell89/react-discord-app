import "./SidebarAccount.scss";

type UserAccount = {
  uid: string;
  photo: string;
  displayName: string;
};

type UserAccoutProps = {
  user: UserAccount;
};

const SidebarAccount = ({ user }: UserAccoutProps) => {
  return (
    <div className="sidebarAccount">
      <img src={user?.photo} alt="account" />
      <div className="accountName">
        <h4>{user?.displayName}</h4>
        <span>#{user?.uid.substring(0, 4)}</span>
      </div>
    </div>
  );
};

export default SidebarAccount;
