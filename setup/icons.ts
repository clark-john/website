import { addIcons } from "oh-vue-icons";
import { IoLogoVue, IoLogoPython } from "oh-vue-icons/icons/io";
import { CoAngular, CoSassAlt, CoJava } from "oh-vue-icons/icons/co";
import { SiNestjs, SiTypescript, SiGraphql } from "oh-vue-icons/icons/si";
import { 
  FaNodeJs, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaTiktok, 
  FaGithub 
} from "oh-vue-icons/icons/fa";

export function setupIcons(){
  const skills = [
    IoLogoVue,
    CoAngular,
    CoSassAlt,
    FaNodeJs,
    SiTypescript,
    SiNestjs,
    SiGraphql,
    IoLogoPython,
    CoJava
  ];

  const socmeds = [
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaTiktok
  ];

  addIcons(
    ...skills,
    ...socmeds
  );
}
