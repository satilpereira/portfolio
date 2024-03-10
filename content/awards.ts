type Award = {
  title: string;
  description: string;
};
const english: Award[] = [
  {
    title: "Shell Eco Marathon",
    description:
      "2º place award in the Telemetry and Data category in Indianapolis, IN, USA",
  },
];

const portuguese: Award[] = [
  {
    title: "Shell Eco Marathon",
    description:
      "2º lugar na categoria Telemetria e Dados em Indianápolis, IN, EUA",
  },
];

const awards = {
  en: english,
  pt: portuguese,
};

export default awards;
