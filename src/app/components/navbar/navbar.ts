import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(public LanguageService: LanguageService
  ) { }

  navbar: {
    redirection: string;
    key: 'NAVBAR_HOME' | 'NAVBAR_ABOUT' | 'NAVBAR_SKILLS' | 'NAVBAR_PROJECTS' | 'NAVBAR_CONTACT';
  }[] = [
    {
      redirection: "/",
      key: 'NAVBAR_HOME'
    },
    {
      redirection: "/about-me",
      key: "NAVBAR_ABOUT"
    },
    {
      redirection: "/skills",
      key: "NAVBAR_SKILLS"
    },
    {
      redirection: "/projects",
      key: "NAVBAR_PROJECTS"
    },
    {
      redirection: "/contact",
      key: "NAVBAR_CONTACT"
    },
  ]
}
