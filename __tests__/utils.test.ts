import { describe, expect, it } from 'vitest'
import { isUpperCase } from '../src/utils'

describe('Utility functions', () => {
    it('Should test if a string is upper case', () => {
        expect(isUpperCase('hello world')).toBeFalsy()
        expect(isUpperCase('Hello World')).toBeFalsy()
        expect(isUpperCase('HELLO WORLd')).toBeFalsy()
        expect(isUpperCase('HELLO WORLD')).toBeTruthy()
    })
})