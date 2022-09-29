const articles = [
  {
    id: 1,
    title: () => (
      <>
        My take on <em className="italic">Svelte</em>
      </>
    ),
    time: "05",
    folder: "article1",
    route: "/writing/my-take-on-svelte",
    image: "image.png",
    references: {}
  },
  {
    id: 2,
    title: () => (
      <>
        <em className="italic">Protopie</em> good practices
      </>
    ),
    time: "09",
    folder: "article1",
    route: "my-take-on-svelte",
    image: "image.png",
  },
  {
    id: 3,
    title: () => (
      <>
        On design <em className="italic">entropy</em>
      </>
    ),
    time: "04",
    folder: "article1",
    route: "my-take-on-svelte",
    image: "image.png",
  },
  {
    id: 4,
    title: () => (
      <>
        What I cannot <em className="italic">create</em> I do not understand
      </>
    ),
    time: "04",
    folder: "article1",
    route: "/writing/what-i-cannot-create",
    image: "image.png",
  },
];

export default articles;
