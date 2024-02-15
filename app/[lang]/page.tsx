import content from "@content/test";

export default function Page({
  params,
}: {
  params: { lang: "pt" | "en" };
}) {
  const { test } = content[params.lang];
  return <div className='max-w-6xl mx-auto'>{test}</div>;
}
