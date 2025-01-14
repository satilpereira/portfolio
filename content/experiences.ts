export type Experience = {
  company: string;
  from: string;
  to: string;
  brief: string;
  details: {
    title: string;
    description: string[];
    technologies: string[];
  }[];
};

const english: Experience[] = [
  {
    company: "Zenvia",
    from: "2024",
    to: "Present",
    brief: "Fullstack Development",
    details: [
      {
        title: "Software Engineer",
        description: [
          "Contributed to the development and optimization of telephony software, enhancing features such as call recording and transfer to improve user experience.",
          "Participated in an agile SCRUM team, collaborating on feature implementation and ensuring timely delivery of sprints.",
          "Refactored system components to enhance performance and reduce database costs, achieving a 10% decrease in expenses.",
          "Improved codebase security by identifying vulnerabilities and applying secure coding practices to legacy code.",
        ],
        technologies: [
          "JavaScript",
          "PHP",
          "Java",
          "Node.js",
          "Express.js",
          "MySQL",
          "Bulma CSS",
          "Tailwind CSS",
          "REST APIs",
        ],
      },
    ],
  },
  {
    company: "Darch Development",
    from: "2023",
    to: "Present",
    brief:
      "Project Management and Development of Web and Mobile Applications",
    details: [
      {
        title: "Founder",
        description: [
          "Established a software development company specializing in web and mobile applications, securing partnerships with startups and public institutions.",
          "Designed and implemented a Job Board system with a multi-role hierarchy and advanced reporting features, empowering companies to streamline recruitment and psychologists to offer on-demand services.",
          "Delivered tailored software solutions, optimizing client operations and achieving measurable cost and efficiency gains.",
        ],
        technologies: [
          "TypeScript",
          "PHP",
          "Node.js",
          "Express.js",
          "React.js",
          "React Native",
          "Next.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "Figma",
        ],
      },
    ],
  },
  {
    company: "Occam Engenharia",
    from: "2024",
    to: "2025",
    brief: "Project Management",
    details: [
      {
        title: "Project Manager",
        description: [
          "Introduced agile methodologies like SCRUM and Lean Six Sigma, increasing project completion efficiency by 40%.",
          "Implemented a structured Project Initiation Phase to ensure well-defined project scopes and team alignment.",
          "Developed a robust Change Management process to manage and adapt to evolving project needs seamlessly.",
          "Mentored students in project development, fostering innovation and leadership.",
        ],
        technologies: [
          "SCRUM",
          "Lean Six Sigma",
          "Agile",
          "Kanban",
          "Git/GitHub",
          "Figma",
        ],
      },
    ],
  },
  {
    company: "Secretaria Municipal de Ciência, Tecnologia e Inovação",
    from: "2022",
    to: "2024",
    brief: "Development of Web and Mobile Applications",
    details: [
      {
        title: "Leading Software Developer",
        description: [
          "Spearheaded the development of a fleet management system, incorporating real-time vehicle tracking and analytics, improving operational efficiency by 35%.",
          "Designed and implemented portals and survey platforms, enabling better civic engagement and data-driven decision-making.",
          "Developed embedded systems to optimize traffic light control, reducing municipal costs by leveraging in-house solutions.",
        ],
        technologies: [
          "TypeScript",
          "PHP",
          "Node.js",
          "React.js",
          "React Native",
          "Next.js",
          "MongoDB",
          "MySQL",
          "REST APIs",
          "WebSocket",
          "Figma",
          "Eagle PCB",
        ],
      },
    ],
  },
  {
    company: "Pato a Jato",
    from: "2022",
    to: "2023",
    brief: "Development of Super-Efficient Vehicles",
    details: [
      {
        title: "Electronics Manager",
        description: [
          "Developed an MQTT-based telemetry system, winning 2nd place at Shell Eco-Marathon Americas 2023 for real-time data accuracy.",
          "Trained multidisciplinary teams on programming, electronics, and project management, fostering cross-functional expertise.",
        ],
        technologies: [
          "MQTT",
          "C++",
          "Python",
          "Node.js",
          "React.js",
          "Eagle PCB",
        ],
      },
    ],
  },
  {
    company: "Grupo Golphe",
    from: "2018",
    to: "2020",
    brief: "Assembly and maintenance of electronic security systems",
    details: [
      {
        title: "IT Assistant",
        description: [
          "I performed the assembly and maintenance of printed circuit boards for property security and access control.",
          "I provided support and maintenance for systems and computers.",
          "I participated in the reorganization of the organization's network infrastructure.",
        ],
        technologies: [],
      },
    ],
  },
];

const portuguese: Experience[] = [
  {
    company: "Zenvia",
    from: "2024",
    to: "Presente",
    brief: "Desenvolvimento Fullstack",
    details: [
      {
        title: "Engenheiro de Software",
        description: [
          "Contribuí para o desenvolvimento e otimização de software de telefonia, aprimorando recursos como gravação e transferência de chamadas para melhorar a experiência do usuário.",
          "Participei de uma equipe ágil SCRUM, colaborando na implementação de recursos e garantindo a entrega pontual dos sprints.",
          "Refatorei componentes do sistema para melhorar o desempenho e reduzir custos de banco de dados, alcançando uma redução de 20% nas despesas.",
          "Melhorei a segurança do código ao identificar vulnerabilidades e aplicar práticas de codificação segura em código legado.",
        ],
        technologies: [
          "JavaScript",
          "PHP",
          "Java",
          "Node.js",
          "Express.js",
          "MySQL",
          "Bulma CSS",
          "Tailwind CSS",
          "APIs REST",
        ],
      },
    ],
  },
  {
    company: "Darch Development",
    from: "2023",
    to: "Presente",
    brief:
      "Gestão de Projetos e Desenvolvimento de Aplicações Web e Mobile",
    details: [
      {
        title: "Fundador",
        description: [
          "Fundou uma empresa de desenvolvimento de software especializada em aplicações web e mobile, firmando parcerias com startups e instituições públicas.",
          "Projetou e implementou um sistema de Job Board com hierarquia de múltiplos papéis e recursos avançados de relatórios, permitindo que empresas otimizassem recrutamentos e psicólogos oferecessem serviços sob demanda.",
          "Entregou soluções de software personalizadas, otimizando operações de clientes e alcançando ganhos mensuráveis de custo e eficiência.",
        ],
        technologies: [
          "TypeScript",
          "PHP",
          "Node.js",
          "Express.js",
          "React.js",
          "React Native",
          "Next.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "Figma",
        ],
      },
    ],
  },
  {
    company: "Occam Engenharia",
    from: "2024",
    to: "2025",
    brief: "Gestão de Projetos",
    details: [
      {
        title: "Gerente de Projetos",
        description: [
          "Introduziu metodologias ágeis como SCRUM e Lean Six Sigma, aumentando a eficiência na conclusão de projetos em 40%.",
          "Implementou uma Fase de Iniciação de Projetos estruturada para garantir escopos bem definidos e alinhamento da equipe.",
          "Desenvolveu um processo robusto de Gestão de Mudanças para gerenciar e adaptar-se às necessidades evolutivas do projeto.",
          "Mentorou estudantes no desenvolvimento de projetos, promovendo inovação e liderança.",
        ],
        technologies: [
          "SCRUM",
          "Lean Six Sigma",
          "Ágil",
          "Kanban",
          "Git/GitHub",
          "Figma",
        ],
      },
    ],
  },
  {
    company: "Secretaria Municipal de Ciência, Tecnologia e Inovação",
    from: "2022",
    to: "2024",
    brief: "Desenvolvimento de Aplicações Web e Mobile",
    details: [
      {
        title: "Desenvolvedor de Software Líder",
        description: [
          "Liderou o desenvolvimento de um sistema de gestão de frotas, incorporando rastreamento de veículos em tempo real e análise de dados, melhorando a eficiência operacional em 35%.",
          "Projetou e implementou portais e plataformas de pesquisa, permitindo maior engajamento cívico e decisões baseadas em dados.",
          "Desenvolveu sistemas embarcados para otimizar o controle de semáforos, reduzindo custos municipais ao aproveitar soluções internas.",
        ],
        technologies: [
          "TypeScript",
          "PHP",
          "Node.js",
          "React.js",
          "React Native",
          "Next.js",
          "MongoDB",
          "MySQL",
          "APIs REST",
          "WebSocket",
          "Figma",
          "Eagle PCB",
        ],
      },
    ],
  },
  {
    company: "Pato a Jato",
    from: "2022",
    to: "2023",
    brief: "Desenvolvimento de Veículos Super Eficientes",
    details: [
      {
        title: "Gerente de Eletrônica",
        description: [
          "Desenvolveu um sistema de telemetria baseado em MQTT, conquistando o 2º lugar na Shell Eco-Marathon Americas 2023 pela precisão dos dados em tempo real.",
          "Treinou equipes multidisciplinares em programação, eletrônica e gestão de projetos, promovendo expertise cruzada.",
        ],
        technologies: [
          "MQTT",
          "C++",
          "Python",
          "Node.js",
          "React.js",
          "Eagle PCB",
        ],
      },
    ],
  },
  {
    company: "Grupo Golphe",
    from: "2018",
    to: "2020",
    brief:
      "Montagem e manutenção de sistemas eletrônicos de segurança",
    details: [
      {
        title: "Assistente de TI",
        description: [
          "Realizou a montagem e manutenção de placas de circuito impresso para segurança patrimonial e controle de acesso.",
          "Prestou suporte e manutenção para sistemas e computadores.",
          "Participou da reorganização da infraestrutura de rede da organização.",
        ],
        technologies: [],
      },
    ],
  },
];

const experiences = {
  en: english,
  pt: portuguese,
};

export default experiences;
