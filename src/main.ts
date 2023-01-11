import Reagir from './Reagir'
import ReagirDOM from './ReagirDOM'
import './style.css'

try {
  const rootElement: HTMLElement | null = document.querySelector('#root')

  if (!rootElement)
    throw 'Root container not found'

  const appContent = Reagir.createElement('p', {}, 'Hello world')

  ReagirDOM.render(rootElement, appContent)
} catch(e) {
  console.error(e)
}