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
    company: "Secretaria Municipal de Ciência, Tecnologia e Inovação",
    from: "2022",
    to: "Present",
    brief: "Development of Web and Mobile applications",
    details: [
      {
        title:
          "Chief of diffusion and popularization of new technologies",
        description: [
          "I work as a chief developer, performing all stages of development at the Secretariat of Science, Technology and Innovation. Responsible for leading the conception, design and implementation of complete software systems, be it web, mobile, backend or BIs.",
          "I applied agile methodologies within the public sector, such as SCRUM together with Lean Six Sigma. I act as Scrum Master.",
          "I developed a Fleet management system, with a Mobile application in React Native, Backend in Node/express using a restful API and websockets, and a web system for managers to follow. The system saves vehicle positions to present the route, mileage traveled and expected, users who used, which vehicle was used, and has a complex hierarchy system.",
          "I developed several systems for robotics projects, gastronomic festival, municipal surveys such as the Municipal Tourism Council survey and Accessibility Survey. The Science and Technology secretariat portal and the Iventum website, one of the largest technological fairs in Paraná.",
          "I developed an embedded system for traffic light control, aiming to improve the visibility of signaling and reduce the traffic accident rate in the municipality. This project was done internally to reduce costs with commercial plates.",
        ],
        technologies: [
          "TypeScript",
          "PHP",
          "Express.js",
          "Database design",
          "Node.js",
          "React.js",
          "Tailwind CSS",
          "Ract Native",
          "Next.js",
          "REST API",
          "MongoDB",
          "MySQL",
          "WebSocket",
          "FIGMA",
          "PCB Design (Printed Circuit Board)",
          "Eagle PCB",
        ],
      },
      {
        title: "Software Developer",
        description: [
          "I applied project management methodologies within the research and development department.",
          "I developed a waste load detection system within containers with LoRa Wan network, the system was self-sufficient and recharged with the presence of solar panels in it. There was a panel for monitoring the levels in each container in the city.",
          "I developed a remote control system embedded with LoRa for the lighting panels for the scenic lighting of the City's Mother Church.",
          "I played a key role in promoting a department focused on system development within the city hall.",
        ],
        technologies: [
          "Javascript",
          "PHP",
          "Node.js",
          "React.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "REST API",
          "FIGMA",
          "C++",
          "Apache",
          "MQTT",
        ],
      },
    ],
  },
  {
    company: "Pato a Jato",
    from: "2022",
    to: "2023",
    brief: "Development of super efficient vehicles",
    details: [
      {
        title: "Electronics Manager",
        description: [
          "I worked on the development of an electric vehicle and a combustion prototype, to participate in international competitions.",
          "I developed a highly efficient telemetry system using broker architecture with the MQTTs protocol. I won second place with telemetry at Shell Eco Marathon Americas 2023, in Indianapolis.",
          "I managed the team using agile methods, such as SCRUM to manage projects.",
          "I conducted training in Programming, Git/GitHub, Eagle PCB, Fusion 360, Project Management and Basic Electronics, including for members of other team cells, such as powertrain and structure.",
        ],
        technologies: [
          "Project Management",
          "Eagle PCB",
          "Fusion 360",
          "MQTT",
          "SCRUM",
          "Git/GitHub",
          "C++",
          "Python",
          "Javascript",
          "Node.js",
          "React.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "REST API",
          "FIGMA",
        ],
      },
      {
        title: "Computer Engineer",
        description: [
          "I implemented the team's first telemetry system, to fetch vehicle data in real time, efficiently and accurately",
          "I developed embedded systems for the vehicle.",
          "I developed the team's website to publicize our activities and supporters.",
        ],
        technologies: [
          "Javascript",
          "Node.js",
          "React.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "REST API",
          "FIGMA",
          "C++",
          "Apache",
          "MQTT",
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
    company: "Secretaria Municipal de Ciência, Tecnologia e Inovação",
    from: "2022",
    to: "Present",
    brief: "Desenvolvimento de aplicações Web e Mobile",
    details: [
      {
        title:
          "Chefe de difusão e popularização de novas tecnologias",
        description: [
          "Atuo como desenvolvedor chefe, desempenhando todas as etapas do desenvolvimento na Secretaria de Ciência, Tecnologia e Inovação. Encarregado de liderar a concepção, o design e a implementação de sistemas completos de software, seja ele web, mobile, backend ou BIs.",
          "Apliquei metodologias ageis dentro do setor publico, como o SCRUM juntamente ao Lean Six Sigma. Atuo como Scrum Master.",
          "Desenvolvi um sistema de gestão de Frotas, com aplicação Mobile em React Native, Backend em Node/express utilizando uma API restful e websockets, e um sistema web para os gestores acompanharem. O sistema salva as posições do veículo para apresentar a rota, kilometragem percorrida e esperada, usuários que utilizaram, qual veículo foi utilizado, e possui um complexo sistema de hierarquias.",
          "Desenvolvi diversos sistemas para os projetos de robótica, Festival gastrônomico, pesquisas municipais como a pesquisa do Conselho Municipal de Turismo e Pesquisa de Acessibilidade. O portal da secretaria de Ciência e tecnologia e o website da Iventum, uma das maiores feiras tecnológicas do Paraná.",
          "Desenvolvi um sistema embarcado para o controle da iluminação semafórica, visando melhorar a visibilidade da sinalização e reduzir a taxa de acidentes de trânsito no município. Esse projeto foi feito internamento para reduzir os custos com obtenção de placas comerciais.",
        ],
        technologies: [
          "TypeScript",
          "PHP",
          "Express.js",
          "Design de banco de dados",
          "Node.js",
          "React.js",
          "Tailwind CSS",
          "Ract Native",
          "Next.js",
          "API REST",
          "MongoDB",
          "MySQL",
          "WebSocket",
          "FIGMA",
          "Design de PCB (Placa de circuito impresso)",
          "Eagle PCB",
        ],
      },
      {
        title: "Desenvolvedor de Software",
        description: [
          "Apliquei metodologias de gestão de projetos dentro do departamento de pesquisa e desenvolvimento.",
          "Desenvolvi um sistema de detecção de carga de lixo dentro de conteineres com rede LoRa Wan, o sistema era autosuficiente e recarregava com a presença de paineis solares presentes no mesmo. Havia um painel para o monitoramento dos níveis em cada container da cidade.",
          "Desenvolvi um sistema de controle remoto embarcado com LoRa dos Paineis de iluminação para a iluminação cênica da igreja Matriz da Cidade.",
          "Desempenhei papel chave na promoção de um departamento focado em desenvolvimento de sistemas dentro da prefeitura.",
        ],
        technologies: [
          "Javascript",
          "PHP",
          "Node.js",
          "React.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "API REST",
          "FIGMA",
          "C++",
          "Apache",
          "MQTT",
        ],
      },
    ],
  },
  {
    company: "Pato a Jato",
    from: "2022",
    to: "2023",
    brief: "Desenvolvimento de veículos super eficientes",
    details: [
      {
        title: "Gerente de Eletrônica",
        description: [
          "Atuei no desenvolvimento de um veículo elétrico e de um protótipo a combustão, para participar de competições internacinais.",
          "Desenvolvi um sistema de telemetria altamente eficiente utilizando arquitetura em broker com o protocolo MQTTs. Conquistei o segundo lugar com a telemetria na Shell Eco Marathon Americas 2023, em Indianápolis.",
          "Gerenciei a equipe utilizando metodos ageis, como o SCRUM para gerir os projetos.",
          "Realizei treinamentos de Programação, Git/GitHub, Eagle PCB, Fusion 360, Gestão de projetos e Eletrônica básica, inclusive para membros de outras células da equipe, como powertrain e estrutura.",
        ],
        technologies: [
          "Gestão de projetos",
          "Eagle PCB",
          "Fusion 360",
          "MQTT",
          "SCRUM",
          "Git/GitHub",
          "C++",
          "Python",
          "Javascript",
          "Node.js",
          "React.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "API REST",
          "FIGMA",
        ],
      },
      {
        title: "Engenheiro de Computação",
        description: [
          "Implementei o primeiro sistema de telemetria da equipe, para buscar dados do veículo em tempo real, com eficiencia e precisão",
          "Desenvolvi sistemas embarcados para o veículo.",
          "Desenvolvi o website da equipe para divulgar nossas atividades e apoiadores.",
        ],
        technologies: [
          "Javascript",
          "Node.js",
          "React.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "API REST",
          "FIGMA",
          "C++",
          "Apache",
          "MQTT",
        ],
      },
    ],
  },
  {
    company: "Grupo Golphe",
    from: "2018",
    to: "2020",
    brief:
      "Montagem e manutenção de sistemas de segurança eletrônica",
    details: [
      {
        title: "Assistente de TI",
        description: [
          "Desempenhei a montagem e manutenção de placas de circuito impresso para a segurança patrimonial e controle de acesso.",
          "Dei suporte e manutenção para os sistemas e computadores.",
          "Participei da reorganização da infraestrutura de redes da organização.",
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
