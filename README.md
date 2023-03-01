# vite-tsc

poitives:
- template setup by vite, using latest best pracices
- tsconfig using esnext
- likely sets up ESlint too
- 
negatives:
- hard to see which source files it's watching
- error `Error: Cannot find module '/workspace/vite-tsc/dist'` on `node dist`. Can only `npm run dev` and then click a button to invoke a script?
- maybe I need vite-node https://www.npmjs.com/package/vite-node