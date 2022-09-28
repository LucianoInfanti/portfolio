## Kown bugs

- On a certain scroll depth, Writing link within Article pages will not work

## Solved bugs

- ~~Articles with small first paragraphs will cause a bug if the title is 2 lines long ~~

## To do

- Pass all data to `Data.json`
- Back to the top / Next / Previous
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
