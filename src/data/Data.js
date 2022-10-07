const articles = [
  {
    id: 2,
    title: () => (
      <>
        My take on <em className="italic">Svelte</em>
      </>
    ),
    time: "05",
    folder: "article1",
    route: "/my-take-on-svelte",
    image: "image.png",
    references: [
      { text: "From Google", link: "google.com" },
      { text: "From API", link: "google.com" },
      { text: "From X", link: "google.com" },
    ],
  },
  {
    id: 1,
    title: () => (
      <>
        What I cannot <em className="italic">create</em> I do not understand
      </>
    ),
    time: "04",
    folder: "article1",
    route: "/what-i-cannot-create",
    image: "image.png",
    references: [
      {
        text: "The Nobel Prize in Physics 1965 — The Nobel Prize Organization",
        link: "https://www.nobelprize.org/prizes/physics/1965/feynman/facts/",
      },
    ],
  },
];

export default articles;
