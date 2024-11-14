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
      description: 'Em 2014 realizei o meu primeiro estágio na First Decision Tecnologias Inovadoras, uma empresa no ramo de BI, onde fiz parte da equipe de desenvolvimento mobile trabalhando com tecnologias web e a plataforma Apache Cordova para construir apps e protótipos para Android e iOS. Realizei trabalhos para órgãos como PROCON e PRODERJ.',
      year: '2014'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/atsnet-logo.svg',
      description: 'Em 2015 ingressei na ATSNET Soluções em TI e fiquei alocado em projetos na Junta Comercial do Estado do Rio de Janeiro, onde melhorei minhas habilidades de front-end e tive contato pela primeira vez com a platatorma .NET e a linguagem de programação C#. Fiz parte do projeto de migração tecnológica do Portal institucional Web JUCERJA',
      year: '2015'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/infobase-logo.png',
      description: 'A Infobase foi uma escola onde aprendi a lidar com a pressão dos prazos de projetos, a entrar em contato com o cliente e a programar Web APIs em C# com a plataforma .NET. Ajudei a entregar soluções de software para clientes como Braslight, Capemisa, Generali, Eletros e Vivo Auto escritas em Angular JS, C# e ASP .NET MVC',
      year: '2017'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/ibm-logo.png',
      description: 'Na IBM adquiri experiência fazendo parte de uma empresa de escala global com pessoas oriundas de diferentes países. Fiz parte do time de desenvolvimento da área Global Business Services programando interfaces de usuário e Web APIs para um software no ramo de seguros da multinacional Prudential do Brasil.',
      year: '2018'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/perlink-logo.png',
      description: 'Na Perlink estive trabalhando com o desenvolvimento de aplicações web construídas com Angular 8, ASP .NET Core, Oracle e GIT e estive alocado em projetos do cliente Oi para fazer a migração de seu Sistema Jurídico para uma tecnologia mais moderna. Também recebi treinamentos sobre cultura ágil e SCRUM passando a ajudar o time na realização de plannings, dailys, reviews e retrospectivas.',
      year: '2019'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/alterdata-logo.png',
      description: 'Na Alterdata passei a colaborar em um time Ágil para ajudar a entregar software para o setor contábil, utilizando tecnologias web e mobile. Fiquei responsável pela publicação e desenvolvimento do app e-Contador para iPhones e iPads.',
      year: '2020'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/agile-content.png',
      description: 'Na Agile Content atuei remotamente colaborando como Desenvolvedor Full-Stack em um projeto de e-commerce para o cliente Personal. Tive mais contato com o ecossistema JavaScript desenvolvendo funcionalidades em Node.js, incluindo mecanismo de autorização de APIs com o padrão JWT, além de construir interfaces de usuário com HTML5, CSS3 e jQuery. Também adquiri experiência com uso do Docker e provisionamento de infraestrutura na AWS. Para efetuar as entregas de código fiz uso do Git como controle de versão.',
      year: '2021'
    },
    {
      logo: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/wipro.png',
      description: `Wipro é uma multinacional de origem indiana onde tive a oportunidade de atuar em diferentes projetos voltado para o ramo financeiro no Banco Itaú e para o ramo de seguros na Akad Seguros. Atuei como Full-Stack e Back-end desenvolvendo APIs com a plataforma .NET, realizando melhorias na arquitetura do sistema e a construção de Interfaces de Usuário com o framework Angular. Também realizei manutenção em microsserviços e em sistemas distribuídos e apliquei diferentes Padrões de Projetos nas soluções implementadas.`,
      year: '2022'
    }
  ]

  
}
