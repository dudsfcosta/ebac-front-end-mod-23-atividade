import Link from "next/link";
import styles from "./DetalheArtigo.module.css"
import {getArtigo, getArtigos} from "@/lib/functions";
import {generateSlug} from "@/lib/functions";
import {Artigo} from "@/lib/types";

export const dynamic = "force-static"

type Props = {
    params : Promise<{

        slug: string
        title: string
        content: string
    }>
}

export async function generateMetadata ({params}: Props){

    const artigo = await getArtigo((await params).slug)

    return {

        title: `Blog. - ${artigo?.title}`,
        description: `${artigo?.content}`,
    }
}

export async function generateStaticParams() {
    const artigos = await getArtigos()

    return artigos.map((artigo : Artigo) => ({
        slug: artigo.slug
    }))
}


const DetalheArtigo = async ({params} : Props) => {
    const artigo = await getArtigo((await params).slug)

    return (
        <>
            <div className={styles.detalhes}>
                <div>
                    <Link className={styles.detalhes__voltar} href={`/`}>Voltar</Link>
                    <section>
                        <figure>
                            <img className={styles.detalhes__image}
                                 src={`${artigo?.urlToImage}`}
                                 alt={`"${artigo?.title}"`} />
                        </figure>
                        <article className={styles.detalhes__info}>
                            <h2>{artigo?.title}</h2>
                            <div className={styles.card__author}>
                                <Link href={`/autores/${generateSlug(artigo?.author)}`}>{artigo?.author}</Link> • {artigo?.publishedAt}
                            </div>
                            <p>{artigo?.content}</p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )
}

export default DetalheArtigo;