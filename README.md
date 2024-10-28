# Feed
Feed is a hacker news client concept, because the existing client needs dark mode. Pet project, currently WIP.

Feed is hosted with Vercel [here](https://feed-git-main-mtthdz-team.vercel.app/).

## Todo List
- [x] setup deployment (Vercel)
- [x] setup dummy post data
- [x] setup dummy comment data
- [x] cleanup boilerplate & organize dir
- [x] create header component
- [x] create post archive page
- [x] create single post page
- [x] create single user page
- [ ] create comment component tree
- [ ] configure auth (Clerk)
- [ ] post creation API
- [ ] comment creation API
- [ ] post + comment vote API
- [ ] post + comment save/hide API
- [ ] Hackernews API


## notes
- (10/28) Following Hackernew's API structure, I've merged my stories and comments interfaces into one, for simplicity and help keep payload shape consistent. I've also used it as a way to mandate nullified values in the payload, for when I get to building my own API.