import PokemonCaught from "../PokemonCaught/PokemonCaught";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({
  handleLogout,
  onEditModal,
  caught,
  setCaught,
  userName,
  onSelectCard,
  onCatchingPokemon,
  onReleasingPokemon,
}) => {
  return (
    <div className="profile">
      <SideBar
        handleLogout={handleLogout}
        onEditModal={onEditModal}
        userName={userName}
      />
      <PokemonCaught
        caught={caught}
        setCaught={setCaught}
        onSelectCard={onSelectCard}
        onCatchingPokemon={onCatchingPokemon}
        onReleasingPokemon={onReleasingPokemon}
      />
    </div>
  );
};

export default Profile;
