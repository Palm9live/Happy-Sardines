import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage: 'es' | 'en' = 'es';

  private texts = {

    es: {

      NAVBAR_HOME: 'Inicio',
      NAVBAR_ABOUT: 'Sobre mí',
      NAVBAR_SKILLS: 'Habilidades',
      NAVBAR_PROJECTS: 'Proyectos',
      NAVBAR_CONTACT: 'Contacto',

      HOME_TITLE: 'Portafolio',
      HOME_SUBTITLE: 'Desarrollador Front-End en formación',
      HOME_DESCRIPTION: 'Bienvenido a mi portafolio personal. Aquí encontrarás información sobre mí, mis habilidades y proyectos.',

      ABOUT_TITLE: 'Sobre mí',
      ABOUT_DESCRIPTION: 'Soy estudiante interesado en el desarrollo web y en el aprendizaje continuo de nuevas tecnologías.',
      ABOUT_NOTE: 'Me gusta convertir ideas en interfaces claras, accesibles y listas para diferentes pantallas.',
      ABOUT_TECH_LABEL: 'Tecnologías principales',

      SKILLS_TITLE: 'Habilidades',
      SKILLS_DESCRIPTION: 'Estas son algunas de las tecnologías que trabajo.',
      SKILLS_1: 'Desarrollo de aplicaciones SPA utilizando Angular.',
      SKILLS_2: 'Programación tipada para aplicaciones modernas.',
      SKILLS_3: 'Diseño responsive y profesional.',

      PROJECTS_TITLE: 'Proyectos',
      PROJECTS_DESCRIPTION: 'Estos son algunos de los proyectos que he desarrollado.',
      PROJECTS_1_TITLE: 'Portafolio Angular',
      PROJECTS_1_DESCRIPTION: 'Portafolio desarrollado utilizando Angular y Bootstrap',
      PROJECTS_BUTTOM: 'Ver Proyecto',

      CONTACT_TITLE: 'Contacto',
      CONTACT_DESCRIPTION: '¿Tienes una idea o quieres conversar sobre desarrollo web? Estos son mis canales de contacto.',

    },

    en: {

      NAVBAR_HOME: 'Home',
      NAVBAR_ABOUT: 'About Me',
      NAVBAR_SKILLS: 'Skills',
      NAVBAR_PROJECTS: 'Projects',
      NAVBAR_CONTACT: 'Contact',

      HOME_TITLE: 'Portfolio',
      HOME_SUBTITLE: 'Front-End Developer in Training',
      HOME_DESCRIPTION: 'Welcome to my personal portfolio. Here you will find information about me, my skills and projects.',

      ABOUT_TITLE: 'About Me',
      ABOUT_DESCRIPTION: 'I am a student interested in web development and continuous learning of new technologies.',
      ABOUT_NOTE: 'I enjoy turning ideas into clear, accessible interfaces that work across different screens.',
      ABOUT_TECH_LABEL: 'Primary technologies',

      SKILLS_TITLE: 'Skills',
      SKILLS_DESCRIPTION: 'These are some of the technologies I work with.',
      SKILLS_1: 'Development of SPA applications using Angular.',
      SKILLS_2: 'Typed programming for modern applications.',
      SKILLS_3: 'Responsive and professional design.',

      PROJECTS_TITLE: 'Projects',
      PROJECTS_DESCRIPTION: 'There are some of the projects I have developed.',
      PROJECTS_1_TITLE: 'Porfolio Angular',
      PROJECTS_1_DESCRIPTION: 'Portfolio developed using Angular and Bootstrap',
      PROJECTS_BUTTOM: 'See Project',

      CONTACT_TITLE: 'Contact',
      CONTACT_DESCRIPTION: 'Do you have an idea or want to talk about web development? These are my contact channels.'
    }

  };

  changeLanguage(language: 'es' | 'en'): void {
    this.currentLanguage = language;
  }

  translate(key: string): string {

    const languageTexts =
      this.texts[this.currentLanguage];

    return languageTexts[
      key as keyof typeof languageTexts
    ] || key;

  }

}