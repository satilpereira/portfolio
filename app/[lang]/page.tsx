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
  return (
    <section className='max-w-6xl w-full py-8 lg:h-[764px] mx-auto gap-4 grid grid-cols-6 grid-rows-4'>
      <article className='col-span-2 col-start-1 row-start-1 row-span-2'>
        <Experiences />
      </article>
      <article className='col-span-1 row-span-1 row-start-1 col-start-3'>
        <Skills />
      </article>
      <article className='col-span-1 row-span-1 row-start-1 col-start-4'>
        <Social />
      </article>
      <article className='col-span-2 row-span-3 row-start-1 col-start-5'>
        <Projects />
      </article>
      <article className='col-span-2 col-start-1 row-span-2 row-start-3'>
        <AboutMe />
      </article>
      <article className='col-span-2 row-span-2 row-start-2 col-start-3'>
        <Featured />
      </article>
      <article className='col-span-1 row-span-1 row-start-4 col-start-3'>
        <YearsPro />
      </article>
      <article className='col-span-1 row-span-1 row-start-4 col-start-4'>
        <Awards />
      </article>
      <article className='col-span-2 row-span-1 row-start-4 col-start-5'>
        <Education />
      </article>
    </section>
  );
}
