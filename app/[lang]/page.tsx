// Components
import Experiences from "@components/organisms/Experiences";
import Skills from "@components/organisms/Skills";
import Social from "@components/organisms/Social";
import Projects from "@components/organisms/Projects";
import AboutMe from "@components/organisms/AboutMe";
import Featured from "@components/organisms/Featured";
import YearsPro from "@components/organisms/YearsPro";
import Awards from "@components/organisms/Awards";
import Education from "@components/organisms/Education";

export default function Page({
  params,
}: {
  params: { lang: "pt" | "en" };
}) {
  const lang = params.lang;
  return (
    <section className='max-w-6xl w-full py-4 md:py-8 h-auto md:h-[1100px] xl:h-[764px] mx-auto gap-2 md:gap-4 grid xl:grid-cols-6 xl:grid-rows-4 md:grid-cols-4 md:grid-rows-6 grid-cols-2 grid-rows-[12]'>
      <article className='col-span-2 row-span-2 row-start-2 xl:col-start-1 md:row-start-2 xl:row-start-1 md:col-start-1'>
        <Experiences lang={lang} />
      </article>
      <article className='col-span-1 row-span-1 row-start-1 xl:col-start-3 col-start-1'>
        <Skills lang={lang} />
      </article>
      <article className='col-span-1 row-span-1 row-start-1 xl:col-start-4 col-start-2'>
        <Social />
      </article>
      <article className='col-span-2 row-span-3 col-start-1 row-start-4 xl:row-start-1 xl:col-start-5 md:col-start-3 md:row-start-1'>
        <Projects lang={lang} />
      </article>
      <article className='col-span-2 row-span-2 xl:row-start-2 xl:col-start-3 md:col-start-1 md:row-start-4 row-start-8 col-start-1'>
        <Featured lang={lang} />
      </article>
      <article className='col-span-2 row-span-2 xl:col-start-1 xl:row-start-3 md:col-start-3 md:row-start-4 row-start-10 col-start-1'>
        <AboutMe lang={lang} />
      </article>
      <article className='col-span-1 row-span-1 row-start-[12] xl:row-start-4 xl:col-start-3 md:col-start-3 md:row-start-6'>
        <YearsPro lang={lang} />
      </article>
      <article className='col-span-1 row-span-1 row-start-[12] xl:row-start-4 xl:col-start-4 md:col-start-4 md:row-start-6'>
        <Awards lang={lang} />
      </article>
      <article className='col-span-2 row-span-1 col-start-1 row-start-7 xl:row-start-4 xl:col-start-5 md:row-start-6 md:col-start-1'>
        <Education lang={lang} />
      </article>
    </section>
  );
}
