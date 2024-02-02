import { addIcons } from "oh-vue-icons";
import { PrChevronDown } from "oh-vue-icons/icons/pr";
import { 
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaGithub
} from "oh-vue-icons/icons/fa";

export function setupIcons() {
  const socmeds = [
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaTiktok
  ];

  addIcons(
    ...socmeds,
    PrChevronDown
  );
}
