import { ReagirNode } from './Reagir'

class ReagirDOM {
    public static render<T extends ReagirNode>(element: HTMLElement, content: T) {
        const child = this.parseNode(content)
        element.appendChild(child)
    }
    
    public static parseNode(element: ReagirNode | string): Node {
        if(typeof element === 'string') return document.createTextNode(element)

        if(!element.content) return document.createTextNode('')

        if(this.isUpperCase(element.tag[0])) {
            const child = this.parseNode(element.content)
            return child
        }

        // TODO: parse HTML built-in nodes
        return document.createTextNode(`<${element.tag}>element.content</${element.tag}>`)
    }

    public static isUpperCase(str: string): boolean {
        return str === str.toUpperCase()
    }
}

export default ReagirDOM 