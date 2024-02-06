import { addIcons } from "oh-vue-icons";
import { PrChevronDown, PrEnvelope, PrPhone } from "oh-vue-icons/icons/pr";
import { CoVerticalAlignTop } from "oh-vue-icons/icons/co";
import { 
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaGithub,
  FaFrown,
  FaTelegram
} from "oh-vue-icons/icons/fa";

const socmeds = [
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaTelegram
];

addIcons(
  ...socmeds,
  PrChevronDown,
  CoVerticalAlignTop,
  PrEnvelope,
  PrPhone,
  FaFrown
);
