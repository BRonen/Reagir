import { ReagirNode, ReagirNodeElement } from './Reagir'

type ReagirParseCallback = (content: ReagirNodeElement[]) => Node

function isUpperCase(str: string): boolean {
    return str === str.toUpperCase()
}

const parseMap: Record<string, ReagirParseCallback> = {
    'p': (content) => { 
        const element = document.createElement('p')

        if(!content) return element

        if(typeof content === 'string')
            element.innerText = content
        else
            content.forEach(el => {
                element.appendChild(ReagirDOM.parseNode(el))
            })

        return element
    }
}

class ReagirDOM {
    public static render<T extends ReagirNode>(element: HTMLElement, content: T) {
        const child = this.parseNode(content)
        element.appendChild(child)
    }
    
    public static parseNode(element: ReagirNodeElement): Node {
        if(!element) return document.createTextNode('')

        if(typeof element === 'string') return document.createTextNode(element)

        let node: DocumentFragment | Node
        
        if(isUpperCase(element.tag[0])) {
            node = document.createDocumentFragment()
            const child = element.content.map(a => this.parseNode(a))
            child.map(c => node.appendChild(c))
        } else {
            node = parseMap[element.tag](element.content)
        }

        return node
    }
}

export default ReagirDOM 