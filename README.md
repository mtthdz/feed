# Feed
Feed is a hacker news client concept, because the existing client needs dark mode. Pet project, currently WIP.

Feed is hosted with Vercel [here](https://feed-git-main-mtthdz-team.vercel.app/).

## Todo List
- [x] setup deployment (Vercel)
- [x] setup dummy post data
- [x] setup dummy comment data
- [x] (component) header
- [x] (component) post archive page
- [x] (component) post page
- [x] (component) user page
- [x] (component) comment tree
- [ ] (component) form modal -> requires API
- [ ] (component) pagination -> requires API
- [ ] (component) voting -> requires API
- [ ] (component) auth -> requires API and form modal
- [ ] (component) dynamic nav island
- [ ] (API) post endpoint (story + comment)
- [ ] (API) vote endpoint
- [ ] (API) comment payload shape
- [ ] (API) comment pagination, nested vs parent
- [ ] (API) configure auth (Clerk?)

## notes
- (10/28) Following Hackernew's API structure, I've merged my stories and comments interfaces into one, for simplicity and help keep payload shape consistent. I've also used it as a way to mandate nullified values in the payload, for when I get to building my own API.
- (11/07) wanting to really dive into building out server/client components with loading. I'll setup an API to serve content w/ pagination, but ultimately will want to flesh out the remainder of the client before building a full server.