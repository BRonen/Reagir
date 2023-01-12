import { describe, expect, it } from 'vitest'
import Reagir from '../src/Reagir'
import ReagirDOM, { parseMap } from '../src/ReagirDOM'

describe('Reagir basic usage', () => {
    it('Should parse a Paragraph element with text', () => {
        const element = Reagir.createElement('p', {}, 'Hello world')

        const node = ReagirDOM.parseNode(element)

        expect(node.nodeName).toBe('P')
        expect(node.textContent).toBe('Hello world')
    })

    it('Should parse a empty Paragraph element', () => {
        const element = Reagir.createElement('div', {})

        const node = ReagirDOM.parseNode(element)

        expect(node.nodeName).toBe('DIV')
        expect(node.textContent).toBe('')
    })

    it('Should parse a Division element', () => {
        const element = Reagir.createElement('div', {}, 'Hello world')

        const node = ReagirDOM.parseNode(element)

        expect(node.nodeName).toBe('DIV')
        expect(node.textContent).toBe('Hello world')
    })

    it('Should parse a Custom element with childs', () => {
        const child = Reagir.createElement('Child', {}, 'Hello', 'world')
        const element = Reagir.createElement('Custom', {}, child, 'hello')

        const node = ReagirDOM.parseNode(element)

        expect(node.nodeName).toBe('#document-fragment')
        expect(node.textContent).toBe('Helloworldhello')
    })

    it('Should parse a Paragraph direct from parse map', () => {
        const child = Reagir.createElement('Child', {}, 'Hello', 'world')
        const element = parseMap['p']([child, '!'])

        expect(element.nodeName).toBe('P')
        expect(element.textContent).toBe('Helloworld!')
    })

    it('Should parse a Division direct from parse map', () => {
        const child = Reagir.createElement('Child', {}, 'Hello', 'world')
        const element = parseMap['div']([child, '!'])

        expect(element.nodeName).toBe('DIV')
        expect(element.textContent).toBe('Helloworld!')
    })

    it('Should throw a error to invalid element parsing', () => {
        const element = Reagir.createElement('invalid', {})

        expect(
            () => ReagirDOM.parseNode(element)
        ).toThrow('Invalid tag name')
    })

    it('Should throw a error to invalid element parsing', () => {
        ReagirDOM.render(
            document.querySelector('body')!,
            Reagir.createElement('p', {}, null)
        )

        expect(document.querySelectorAll('p').length).toBe(1)
    })
})