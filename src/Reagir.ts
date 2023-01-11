export interface ReagirNode {
    tag: string
    props: Record<string, unknown>
    content: ReagirNode | string | null
}

class Reagir implements ReagirNode {
    constructor(
        public tag: string,
        public props: Record<string, unknown>,
        public content: ReagirNode | string | null,
    ){}

    public static createElement(
        tag: string,
        props: Record<string, unknown>,
        content: ReagirNode | string | null,
    ): Reagir {
        return new Reagir(tag, props, content)
    }
}

export default Reagir