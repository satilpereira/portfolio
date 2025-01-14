type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  progress: "in-progress" | "validations" | "completed";
};

const english: Project[] = [
  {
    title: "Aurhi gestão de RH",
    description: "Is a Job management system",
    image:
      "/assets/images/Logo Aurhi_ícone_sem assinatura_color 01.png",
    url: "https://aurhi.com/",
    progress: "validations",
  },
  {
    title: "Brain Budget",
    description:
      "Is a personal finance manager focused on neurodivergent people.",
    image: "/assets/images/brain-budget-icon-dark (1).png",
    url: "https://brain-budget.vercel.app/",
    progress: "in-progress",
  },
];

const portuguese: Project[] = [
  {
    title: "Aurhi gestão de RH",
    description: "É um sistema de gestão de empregos",
    image:
      "/assets/images/Logo Aurhi_ícone_sem assinatura_color 01.png",
    url: "https://aurhi.com/",
    progress: "validations",
  },
  {
    title: "Brain Budget",
    description:
      "É um gerenciador de finanças pessoais focado em pessoas neurodivergentes.",
    image: "/assets/images/brain-budget-icon-dark (1).png",
    url: "https://brain-budget.vercel.app/",
    progress: "in-progress",
  },
];

const projects = {
  en: english,
  pt: portuguese,
};

export default projects;
