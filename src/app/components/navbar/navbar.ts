import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   navbar = [
    {
    redirection: "/",
    name: "Inicio"
    },
    {
    redirection: "/about-me",
    name: "Sobre mi"
    },
    {
    redirection: "/skills",
    name: "Habilidades"
    },
    {
    redirection: "/projects",
    name: "Proyectos"
    },
    {
    redirection: "/contact",
    name: "Contacto"
    }
  ]
}
