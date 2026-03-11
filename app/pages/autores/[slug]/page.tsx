import Link from "next/link";
import styles from "./DetalheAutor.module.css"
import {getAuthor} from "@/lib/functions";

type Props = {
    params : Promise<{
        slug: string;
        nome: string;
        bio: string;
    }>
}

const DetalheArtigo = async ({params} : Props) => {
    const { slug } = await params;
    const details = await getAuthor(slug);
    // @ts-expect-error IDE finds error, but code works properly
    const {nome, bio, pfp} = details;

    return (
        <>
            <div className={styles.detalhes}>
                <div>
                    <Link className={styles.detalhes__voltar} href={`/`}>Voltar</Link>
                    <section>
                        <figure>
                            <img className={styles.detalhes__image}
                                 src={`${pfp}`}
                                 alt={`"${nome}"`} />
                        </figure>
                        <article className={styles.detalhes__info}>
                            <h2>{nome}</h2>
                            <p>{bio}</p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )
}

export default DetalheArtigo;