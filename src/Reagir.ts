export type ReagirNodeElement = ReagirNode | string | null

export interface ReagirNode {
    tag: string
    props: Record<string, unknown>
    content: ReagirNodeElement[]
}

class Reagir implements ReagirNode {
    constructor(
        public tag: string,
        public props: Record<string, unknown>,
        public content: ReagirNodeElement[],
    ) { }

    public static createElement(
        tag: string,
        props: Record<string, unknown>,
        ...content: ReagirNodeElement[]
    ): Reagir {
        return new Reagir(tag, props, content)
    }
}

export default Reagir