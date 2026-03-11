import Link from "next/link";
import styles from "./DetalheArtigo.module.css"
import {getArtigo} from "@/lib/functions";

type Props = {
    params : Promise<{
        id: number
        author: string
        title: string
        urlToImage: string
        publishedAt: string
        content: string
    }>
}

const DetalheArtigo = async ({params} : Props) => {
    const { id } = await params;
    const details = await getArtigo(Number(id));
    // @ts-expect-error IDE finds error, but code works properly
    const {title, urlToImage, content} = details;

    return (
        <>
            <div className={styles.detalhes}>
                <div>
                    <Link className={styles.detalhes__voltar} href={`/`}>Voltar</Link>
                    <section>
                        <figure>
                            <img className={styles.detalhes__image}
                                 src={`${urlToImage}`}
                                 alt={`imagem do filme "${title}"`} />
                        </figure>
                        <article className={styles.detalhes__info}>
                            <h2>{title}</h2>
                            <p>{content}</p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )
}

export default DetalheArtigo;