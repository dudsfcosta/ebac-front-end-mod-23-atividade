import artigos from "@/data/artigos.json"
import { Artigo } from "@/lib/types";

export async function getArtigos(): Promise<Artigo[]> {
    return artigos
}

export const getArtigo = async (id: number): Promise<Artigo | undefined> => {

    return artigos.find(artigo => artigo.id === id);
}