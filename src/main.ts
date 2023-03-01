import { sayHello } from './hello'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <p>
      Some HTML here
  </p>
`

sayHello('TypeScript')
