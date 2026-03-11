import artigos from "@/data/artigos.json"
import autores from "@/data/autores.json"
import {Artigo, Autor} from "@/lib/types";

export async function getArtigos(): Promise<Artigo[]> {
    return artigos
}

export const getArtigo = async (id: number): Promise<Artigo | undefined> => {

    return artigos.find(artigo => artigo.id === id);
}

export async function getAutores(): Promise<Autor[]> {
    return autores
}

export const getAuthor = async (slug: string): Promise<Autor | undefined> => {

    return autores.find(autore => autore.slug === slug);
}