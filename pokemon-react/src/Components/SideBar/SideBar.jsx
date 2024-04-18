import "./SideBar.css";

const SideBar = ({ onEditModal, handleLogout, userName }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <h2 className="siderbar__user-name" alt="user-name">
          {userName.toString() || "stevennarak"}
        </h2>
      </div>
      <button className="sidebar__button" onClick={onEditModal}>
        Change Username
      </button>
      <button className="sidebar__button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
