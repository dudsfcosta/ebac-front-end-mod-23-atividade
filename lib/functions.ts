import artigos from "@/data/artigos.json"
import { Artigo } from "@/lib/types";

export async function getArtigos(): Promise<Artigo[]> {
    return artigos
}

export async function getArtigo(id: number): Promise<Artigo | undefined> {
    return artigos.find((a) => a.id === id)
}