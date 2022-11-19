import { Component, OnInit } from '@angular/core';
import { skills, Skill } from '../../skills';
import { faFacebook, faInstagram, faTwitter, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(){
    this.skills = skills;
  }
  skills: Skill[] = [];
  datenow = Date.now();

  socmeds: { icon: any, link: string }[] = [
    {
      icon: faFacebook,
      link: "https://www.facebook.com/cl4rk.3702"
    },
    {
      icon: faInstagram,
      link: "https://instagram.com/cl4rk_john"
    },
    {
      icon: faTwitter,
      link: "https://twitter.com/ClarkDoesTech"
    },
    {
      icon: faGithub,
      link: "https://github.com/clark-john"
    },
    {
      icon: faTiktok,
      link: "https://tiktok.com/@cl4rk_tiktok"
    },
  ];

  ngOnInit(): void {}
}
