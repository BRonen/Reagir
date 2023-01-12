import { ReagirNode, ReagirNodeElement } from './Reagir'
import { isUpperCase } from './utils'

type ReagirParseCallback = (content: ReagirNodeElement[]) => HTMLElement

export const parseMap: Record<string, ReagirParseCallback> = {
    'p': content => { 
        const element = document.createElement('p')
        
        content.forEach(child => {
            element.appendChild(ReagirDOM.parseNode(child))
        })

        return element
    },
    'div': content => { 
        const element = document.createElement('div')

        content.forEach(child => {
            element.appendChild(ReagirDOM.parseNode(child))
        })

        return element
    }
}

class ReagirDOM {
    public static render<T extends ReagirNode>(element: HTMLElement, content: T) {
        // render() just takes the components tree and parses recursively 
        const child = this.parseNode(content)
        element.appendChild(child)
    }
    
    public static parseNode(element: ReagirNodeElement): HTMLElement | DocumentFragment {
        // If its a text or null then just renders a text node
        if(!element || typeof element === 'string') {
            const node = document.createDocumentFragment()

            node.textContent = element || ''

            return node
        }
        // If Capitalized tag then its a Reagir Component
        if(isUpperCase(element.tag[0])) {
            const node = document.createDocumentFragment()

            for(const child of element.content)
                node.appendChild(this.parseNode(child))

            return node
        }
        
        // If is a HTML tag then justs parses to the HTML element
        if(parseMap[element.tag])
            return parseMap[element.tag](element.content)

        throw 'Invalid tag name'
    }
}

export default ReagirDOM 