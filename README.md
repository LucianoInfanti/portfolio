# Why this website exists

This is not your usual designer portfolio. I'm not interested in showingcase work — at least not for now. I guess only time will tell. I've always wanted a place to write small thoughts and ideas. Maybe tutorials and guides on subjects that are (most likely) unpopular. Above everything else, this is my personal playground. A place where I can try coding-related stuff, where I can try new text formats and just have some fun.

A lot of details are still being ironed out. Keep in mind I'm coding everything myself as learn so progress is sometimes slow — and almost always, painful.

## Kown bugs

There are definitely bugs and undesired behaviors. This is a non exaustive list of things that require attention and fix. If you find something else that is not listed below, please do let me know.

- On a certain scroll depth, Writing link within Article pages will not work
- In production: fonts reloading (flashing)
- In production: some text is jumping around -> this might have been fixed
- `<Bubble/>` is re-rendering when switching between `/` and `/writing`

## Solved bugs

- Articles with small first paragraphs will cause a bug if the title is 2 lines long

## To do

Incremental progress is how I'm tackling this challenge. So there will always be something to do. An animation to polish, a better code to write, a new technology to try. So far, this is what I'm planning to do next, in no particular order.

- Randomize which `read more` option to display
- Stop re-rendering between pages by studying `React Router`
- Mobile & responsiviness with `clamp()` and similar functions
- Take a pass at all animations and standardize motion tokens
- Use `{children}` to make sure I can use the `<AnimatedText/>` component
- Create the article `<Image/>` component and its variations
- Figure it out how to render `.mp4` files on web
- Dark Mode
- Like counter for posts, if possible

## Future Updates

- Flip interaction for links
- Cooler hover for images
- Show main image when hovering article links
- Add About page
- Add Work page

## Done

<<<<<<< HEAD
- Add 'references' as an object within `Data.js`
- Loop through the new ref object to show them on articles
- Pass all data to `Data.json`
- "Active Route" trought React Router (possibly using `<NavLink>`)
- When start to scroll hide 'Writin
- Review the z-index in the article page ~~
- Review the stagger animation, it looks wrong, the timmings are most likely off
- Find a hook to avoid rendering `<Header/>` multiple times
- Remove the staggered animation at /Writing and use only a fade
- In prod: investigate weird routing realods
- See Shivs interview and do a header similar to that!
- Home and Writing have different font sizes
- Progress scroll bar?
- Add `<NavLink/>` as a `prop` to the header component so I can remove it from the article page (?)
=======
- ~~"Active Route" trought React Router (possibly using `<NavLink>`) ~~
- ~~When start to scroll hide 'Writing'~~
- ~~Review the z-index in the article page ~~
- ~~Review the stagger animation, it looks wrong, the timmings are most likely off~~
- ~~Find a hook to avoid rendering `<Header/>` multiple times~~
- ~~Remove the staggered animation at /Writing and use only a fade ~~
- ~~Add https://codesandbox.io/s/ro92c5?file=/fragmentShader.js&from-sandpack=true ~~
- ~~In prod: investigate weird routing realods ~~
- ~~Home and Writing have different font sizes~~
- ~~Progress scroll bar? ~~
- ~~ Add `<NavLink/>` as a `prop` to the header component so I can remove it from the article page (?) ~~
>>>>>>> ff8e390da325bc9794166d67e6715006a1741e89
