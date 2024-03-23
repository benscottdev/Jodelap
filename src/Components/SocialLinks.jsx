import InstagramLogo from "../Assets/instagramLogo.png";
import FacebookLogo from "../Assets/facebookLogo.png";

function SocialLinks() {
  return (
    <div className="socialLogos">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/jodelap/"
      >
        <img id="instaLogo" src={InstagramLogo} alt="Instagram Link" />
      </a>
      <a
        href="https://www.facebook.com/jodelapcoaching/"
        target="_blank"
        rel="noreferrer"
      >
        <img id="facebookLogo" src={FacebookLogo} alt="Instagram Link" />
      </a>
    </div>
  );
}
export default SocialLinks;
