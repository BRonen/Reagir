import Reagir from './Reagir'
import ReagirDOM from './ReagirDOM'
import './style.css'

try {
  const rootElement: HTMLElement | null = document.querySelector('#root')

  if (!rootElement)
    throw 'Root container not found'

  const name = Reagir.createElement('p', {}, 'Titulo')
  const age = Reagir.createElement('Age', {}, 'Age')
  const nestedItems = Reagir.createElement('p', {}, 'Nested', age)
  const appContent = Reagir.createElement('Asd', {}, name, nestedItems)

  ReagirDOM.render(rootElement, appContent)
} catch(e) {
  console.error(e)
}