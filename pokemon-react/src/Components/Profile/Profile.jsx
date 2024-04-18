import PokemonCaught from "../PokemonCaught/PokemonCaught";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({
  handleLogout,
  onEditModal,
  caught,
  setCaught,
  userName,
}) => {
  return (
    <div className="profile">
      <SideBar
        handleLogout={handleLogout}
        onEditModal={onEditModal}
        userName={userName}
      />
      <PokemonCaught caught={caught} setCaught={setCaught} />
    </div>
  );
};

export default Profile;
