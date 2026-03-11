import {Artigo} from "@/lib/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {

    artigo: Artigo;
}
const Card = ({artigo} : Props) => {

    const {id, author, authorSlug, title, urlToImage, content, publishedAt} = artigo;
    const resume = content?.length >= 128?`${content.substring(0, 128)}...`:content;
    return (
        <div key={id} className={styles.card}>
            <Link href={`/pages/article/${id}`}>
                <img className={styles.card__image}
                     src={`${urlToImage}`}
                     alt={`Capa de "${title}"`}/>
            </Link>
            <div>
                <Link href={`/pages/article/${id}`}>
                    <h3 className={styles.card__title}>{title}</h3>
                </Link>
                <small>
                    <div className={styles.card__author}>
                        <Link href={`/pages/autores/${authorSlug}`}>{author}</Link> • {publishedAt}
                    </div>
                </small>
                <p className={styles.card__description}>{resume}</p>
                <p></p>
            </div>
        </div>
    );
}
export default Card