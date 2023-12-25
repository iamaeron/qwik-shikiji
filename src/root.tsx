import { component$ } from "@builder.io/qwik";
import { QwikShikiji } from "./components/qwik-shikiji";

export default component$(() => {
  const exampleCode = `import { component$ } from "@builder.io/qwik";
import { QwikTable } from "@iamaeron/qwik-table-component";
  
const frameworks = [
  {
    name: "React",
    desc: "A free and open-source front-end JavaScript library for building user interfaces based on components.",
    year: 2013,
    creator: "Jordan Walke",
  },
  {
    name: "Vue",
    desc: "A JavaScript framework for building user interfaces.",
    year: 2014,
    creator: "Evan You",
  },
  {
    name: "Qwik",
    desc: "A new kind of web framework that can deliver instant loading web applications at any size or complexity.",
    year: 2023,
    creator: "Miško Hevery",
  },
  {
    name: "Svelte",
    desc: "A compiler that generates minimal and highly optimized JavaScript code",
    year: 2016,
    creator: "Rich Harris",
  },
];

const columns = [
  {
    title: "Framework",
    selector: "name",
  },
  {
    title: "Description",
    selector: "desc",
  },
  {
    title: "Year",
    selector: "year",
    sort: true,
  },
  {
    title: "Created by",
    selector: "creator",
  },
];

export const MyVeryCoolAndGreatTable = component$(() => {
  return (
    <QwikTable
      data={frameworks}
      columns={columns}
      controls={{ addColForm: true, filterByCols: true }}
    />
  )
})
`;

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Inter",
            }}
          >
            @iamaeron/qwik-shikiji
          </h2>
          <p style={{ margin: 0, marginBottom: 30, fontFamily: "Inter" }}>
            Qwik component for powerful code syntax highlighting by Shikiji.
          </p>
          <QwikShikiji
            code={exampleCode}
            lang="tsx"
            options={{
              showLineNumbers: true,
            }}
            styles={{
              maxHeight: "35rem",
              maxWidth: "50rem",
              fontFamily: "Geist Mono Variable",
            }}
          />
        </div>
      </body>
    </>
  );
});
