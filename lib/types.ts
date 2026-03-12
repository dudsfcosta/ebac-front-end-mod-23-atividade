export interface Artigo {

    slug: string
    author: string
    title: string
    urlToImage: string
    publishedAt: string
    content: string
}

export interface Autor {
    slug: string
    nome: string
    bio: string
    pfp: string
}