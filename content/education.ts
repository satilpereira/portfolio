type Education = {
  title: string;
  institution: string;
  from: string;
  to: string;
};

const english: Education[] = [
  {
    title: "Bachelor of Engineering(B.Eng.) • Computer Engineering",
    institution: "Federal University of Technology - Paraná - Brazil",
    from: "2021",
    to: "Present",
  },
  {
    title: "Bachelor of Science (B.Sc.) • Physics",
    institution: "University of São Paulo - São Paulo - Brazil",
    from: "2019",
    to: "2019",
  },
  {
    title: "Mechatronics Technician (MT)",
    institution:
      "Rubens de Faria e Souza State Technical School - São Paulo - Brazil",
    from: "2015",
    to: "2017",
  },
];

const portuguese: Education[] = [
  {
    title: "Bacharelado em Engenharia • Engenharia da Computação",
    institution: "Universidade Tecnológica Federal do Paraná",
    from: "2021",
    to: "Presente",
  },
  {
    title: "Bacharelado em Física • Física",
    institution: "Universidade de São Paulo",
    from: "2019",
    to: "2019",
  },
  {
    title: "Técnico em Mecatrônica",
    institution:
      "Escola Técnica Estadual Rubens de Faria e Souza - São Paulo",
    from: "2015",
    to: "2017",
  },
];

const education = {
  en: english,
  pt: portuguese,
};

export default education;
