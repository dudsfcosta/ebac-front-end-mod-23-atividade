export interface Artigo {

    id: number
    author: string
    authorSlug: string
    title: string
    urlToImage: string
    content: string
}

export interface Autor {
    slug: string
    nome: string
    bio: string
    pfp: string
}