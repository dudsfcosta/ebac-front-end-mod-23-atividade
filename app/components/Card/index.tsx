import {Artigo} from "@/lib/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {

    artigo: Artigo;
}
const Card = ({artigo} : Props) => {

    const {id, author, title, urlToImage, publishedAt, content} = artigo;
    const resume = content?.length >= 128?`${content.substring(0, 128)}...`:content;
    return (
        <div key={id} className={styles.card}>
            <Link href={`/article/${id}`}>
                <img className={styles.card__image}
                     src={`${urlToImage}`}
                     alt={`Capa de "${title}"`}/>
            </Link>
                <div>
                    <Link href={`/article/${id}`}>
                        <h3 className={styles.card__title}>{title}</h3>
                    </Link>
                    <Link href={`${author}`}>
                        <h4 className={styles.card__author}>{author}</h4>
                    </Link>
                    <p className={styles.card__description}>{resume}</p>
                    <p></p>
                </div>
        </div>
    );
}
export default Card