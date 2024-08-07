### Tech Stack

Next.js 14 / React 18, TailwindCSS, MaterialUI, Redux Toolkit + RTK Query

### Src Folder Structure

- src/app: This is where the pages files laid
- src/common: Components and Containers are on this folder
- src/lib: Redux toolkit and RTK Query related
  - /features: redux slices
  - /Provider: store provider
  - /services: RTK Query things (API)
- src/styles: Custom CSS file

### Run Locally

To run locally, you just need to clone this repository to your computer, and install it

```
pnpm install
// or
npm install
// or
yarn install
```

after installed, add .env files in the root folder (use .env.example as placeholder) and replace NEXT_PUBLIC_URL and NEXT_PUBLIC_API_URL with API URL that you can found here (on Exam 2 section):
https://rootdomain.notion.site/Candidate-Exam-Front-End-Engineer-ac3dd8a3474542899d49efb894672246

and then run it

```
pnpm run dev
// or
npm run dev
// or
yarn dev
```
