# Why this website exists

This is basically my personal playground. A place where I can try stuff. I might be using it to showcase projects and products I've created but not necessarly. I guess only time will tell.

## Kown bugs

- On a certain scroll depth, Writing link within Article pages will not work
- In production: fonts reloading (flashing)
- In production: some text is jumping around -> this might have been fixed
- `<Bubble/>` is re-rendering when switching between `/` and `/writing`

## Solved bugs

- ~~Articles with small first paragraphs will cause a bug if the title is 2 lines long ~~

## To do

- Back to the top / Next / Previous
- Add 'references' and 'readmore' as an object within `Data.js`
- Loop through the new ref and readmore object to show them on articles
- Stop re-rendering between pages
- Mobile / responsiviness with clamp() functions
- Take a pass at all animations and standardize motion tokens
- Use `{children}` to make sure I can use the appearing animation
- Create the article `<Image/>`component and its variations
- Figure it out how to render `.mp4` files on web
- Dark Mode — might not be able to add Dark Mode due to the ThreeJS bubble
- Like counter for posts

## Future Updates

- Flip interaction for links
- Cool hover for images
- Show image on hover @ /Writing
- Add About page
- Add Work page

## Done

- ~~Pass all data to `Data.json`~~
- ~~"Active Route" trought React Router (possibly using `<NavLink>`) ~~
- ~~When start to scroll hide 'Writing'~~
- ~~Review the z-index in the article page ~~
- ~~Review the stagger animation, it looks wrong, the timmings are most likely off~~
- ~~Find a hook to avoid rendering `<Header/>` multiple times~~
- ~~Remove the staggered animation at /Writing and use only a fade ~~
- ~~In prod: investigate weird routing realods ~~
- ~~See Shivs interview and do a header similar to that!~~
- ~~Home and Writing have different font sizes~~
- ~~Progress scroll bar? ~~
- ~~ Add `<NavLink/>` as a `prop` to the header component so I can remove it from the article page (?) ~~
