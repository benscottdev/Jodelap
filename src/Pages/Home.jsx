import HomeNav from "../Components/HomeNav";
import JodelapLogo from "../Assets/Jodelap_Logo_Floral.png";
import SocialLinks from "../Components/SocialLinks";

function Home() {
  return (
    <div className="homePage">
      {/* REPLACE LOGO WITH BETTER QUALITY PNG WHEN POSSIBLE */}
      <img className="homeLogo" src={JodelapLogo} alt="Jodelap Logo" />
      <SocialLinks />
      <HomeNav />
    </div>
  );
}
export default Home;
