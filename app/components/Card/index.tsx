import {Artigo} from "@/lib/types";
import styles from "./Card.module.css";
import Link from "next/link";
import {generateSlug} from "@/lib/functions";

type Props = {

    artigo: Artigo;
}
const Card = ({artigo} : Props) => {

    const { author, title, urlToImage, content, publishedAt} = artigo;
    const resume = content?.length >= 128?`${content.substring(0, 128)}...`:content;
    return (
        <div key={generateSlug(title)} className={styles.card}>
            <Link href={`/artigos/${artigo.slug}`}>
                <img className={styles.card__image}
                     src={`${urlToImage}`}
                     alt={`Capa de "${title}"`}/>
            </Link>
            <div>
                <Link href={`/artigos/${artigo.slug}`}>
                    <h3 className={styles.card__title}>{title}</h3>
                </Link>
                <small>
                    <div className={styles.card__author}>
                        <Link href={`/autores/${generateSlug(author)}`}>{author}</Link> • {publishedAt}
                    </div>
                </small>
                <p className={styles.card__description}>{resume}</p>
                <p></p>
            </div>
        </div>
    );
}
export default Card