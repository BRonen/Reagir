import { describe, expect, it } from 'vitest'
import Reagir from '../src/Reagir'

describe('Reagir basic usage', () => {
    it('Should create a Paragraph element', () => {
        const element = Reagir.createElement('p', {}, 'Hello world')

        expect(element.tag).toBe('p')
        expect(element.props).toStrictEqual({})
        expect(element.content).toStrictEqual(['Hello world'])
    })

    it('Should create a Paragraph with multiple childs', () => {
        const element = Reagir.createElement('p', {}, 'Hello', 'world')

        expect(element.tag).toBe('p')
        expect(element.props).toStrictEqual({})
        expect(element.content).toStrictEqual(['Hello', 'world'])
    })

    it('Should create Nested components', () => {
        const firstChild = Reagir.createElement('a', {}, 'Hello')

        expect(firstChild.tag).toBe('a')
        expect(firstChild.props).toStrictEqual({})
        expect(firstChild.content).toStrictEqual(['Hello'])

        const secondChild = Reagir.createElement('b', {}, 'World', '!')

        expect(secondChild.tag).toBe('b')
        expect(secondChild.props).toStrictEqual({})
        expect(secondChild.content).toStrictEqual(['World', '!'])

        const element = Reagir.createElement('Nested', {}, firstChild, secondChild)

        expect(element.tag).toBe('Nested')
        expect(element.props).toStrictEqual({})
        expect(element.content).toStrictEqual([firstChild, secondChild])
    })
})