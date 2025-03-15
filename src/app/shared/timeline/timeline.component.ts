import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timelineItems: any[] = [
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/fd-logo.png',
      description: 'In 2014 I did my first internship at First Decision Tecnologias Inovadoras, a company in the BI sector, where I was part of the mobile development team working with web technologies and the Apache Cordova platform to build apps and prototypes for Android and iOS. I also worked for organizations like PROCON and PRODERJ.',
      year: '2014',
      height: 'auto',
      width: '200px'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/atsnet-logo.svg',
      description: 'In 2015 I joined ATSNET Soluções em TI and was assigned to projects at the Commercial State of Rio de Janeiro, where I improved my front-end skills and had my first contact with the .NET platform and the C# programming language. I was part of the project to migrate the Web JUCERJA institutional portal.',
      year: '2015',
      height: 'auto',
      width: '200px'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/infobase-logo.png',
      description: 'Infobase was a school where I learned to handle the pressure of project deadlines, contact with customers, and program Web APIs in C# with the .NET platform. I helped deliver software solutions to clients like Braslight, Capemisa, Generali, Eletros and Vivo Auto written in Angular JS, C# and ASP .NET MVC',
      year: '2017',
      height: 'auto',
      width: '200px'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/ibm-logo.png',
      description: 'At IBM I gained experience working in a global scale company with people from different countries. I was part of the development team of the Global Business Services area programming user interfaces and Web APIs for a software in the insurance sector of the multinational Prudential do Brasil.',
      year: '2018',
      height: '60px',
      width: 'auto'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/perlink-logo.png',
      description: 'At Perlink I worked on the development of web applications built with Angular 8, ASP .NET Core, Oracle and GIT and was assigned to projects for the customer Oi to migrate their Legal System to a more modern technology. I also received training on agile culture and SCRUM passing to help the team in the realization of plannings, dailys, reviews and retrospectives.',
      year: '2019',
      height: 'auto',
      width: '167px'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/alterdata-logo.png',
      description: 'At Alterdata I collaborated in an agile team to help deliver software for the accounting sector, using web and mobile technologies. I was responsible for publishing and developing the e-Contador app for iPhones and iPads.',
      year: '2020',
      height: 'auto',
      width: '200px'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/agile-content.png',
      description: 'At Agile Content I worked remotely collaborating as a Full-Stack Developer in an e-commerce project for the customer Personal. I had more contact with the JavaScript ecosystem developing functionalities in Node.js, including an API authorization mechanism with the JWT standard, and building user interfaces with HTML5, CSS3 and jQuery. I also gained experience with the use of Docker and infrastructure provisioning in AWS. To deliver code I used Git as a version control system.',
      year: '2021',
      height: 'auto',
      width: '200px'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/wipro.png',
      description: `Wipro is an Indian multinational where I had the opportunity to work in different projects focused on the financial sector at Banco Itaú and the insurance sector at Akad Seguros. I worked as a Full-Stack and Back-end Developer developing APIs with the .NET platform, improving system architecture and building User Interfaces with the Angular framework. I also performed maintenance in microservices and distributed systems and applied different Project Patterns in the implemented solutions.`,
      year: '2022',
      height: 'auto',
      width: '160px'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/agl-logo3.png',
      description: `In AGL Solution I have been working as a Full-Stack Developer using the .NET platform for building User Interfaces, reusable components for accelerate the productivity of the team and Web APIs for a vehicule monitoring system. I also helped the team to improve some processes and participated of agile mettings for organizing the work.`,
      year: '2025',
      height: 'auto',
      width: '200px'
    }
  ]  
}
