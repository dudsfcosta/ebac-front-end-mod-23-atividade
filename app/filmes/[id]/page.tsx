/*import type { Metadata } from 'next';
import Link from "next/link";
import styles from "./DetalheFilme.module.css"
import {getMovieDetails} from "@/lib/tmdb"

type Props = {
    params : Promise<{
        id: number
        title: string
        poster_path: string
        overview: string
    }>
}

/**
 * @ts-expect-error generateMetaData does not return a Promise

export const generateMetadata = async ({params}: Props) => {

    const { id } = await params;

    const details = await getMovieDetails(id);

    if (!details) {
        return {}
    }

    return {

        title: `${details.title} | Cinelista`,
        description: details.overview,
        openGraph: {
            title: `${details.title} | Cinelista`,
            description: details.overview,
            images:[`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`],
        }
    }
}

const DetalheFilme = async ({params} : Props) => {
    const { id } = await params;
    const details = await getMovieDetails(id);
    /*
     @ts-expect-error IDE finds error, but code works properly

    const {title, poster_path, overview} = details;

    return (
     <>
         <div className={styles.detalhes}>
             <div>
                <Link className={styles.detalhes__voltar} href={`/`}>Voltar</Link>
                <section>
                    <figure>
                        {/* eslint-disable-next-line @next/next/no-img-element }
                        <img className={styles.detalhes__image}
                             src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                             alt={`imagem do filme "${title}"`} />
                    </figure>
                    <article className={styles.detalhes__info}>
                        <h2>{title}</h2>
                        <p>{overview}</p>
                    </article>
                </section>
             </div>
         </div>
     </>
    )
}

export default DetalheFilme;
*/