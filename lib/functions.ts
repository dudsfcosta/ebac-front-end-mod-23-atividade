import artigos from "@/data/artigos.json"
import autores from "@/data/autores.json"
import {Artigo, Autor} from "@/lib/types";
import slugify from "slugify";
import {Metadata} from "next";

export async function getArtigos(): Promise<Artigo[]> {
    return artigos
}

export const generateSlug = (title: string | undefined) => {
    // @ts-ignore
    return slugify(title, {
        lower: true,
        trim: true,
        remove: /[*+~.,()'"!:@]/g,
    });
};

export const getArtigo = async (slug: string): Promise<Artigo | undefined> => {

    return artigos.find(artigo => artigo.slug === slug);
}

export async function getAutores(): Promise<Autor[]> {
    return autores
}

export const getAuthor = async (slug: string): Promise<Autor | undefined> => {

    return autores.find(autore => autore.slug === slug);
}
