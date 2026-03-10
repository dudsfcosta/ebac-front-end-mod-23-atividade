import {Artigo} from "@/lib/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {

    artigo: Artigo;
}
const Card = ({artigo} : Props) => {

    const {id, author, title, urlToImage, publishedAt, content} = artigo;
    const resume = content?.length >= 256?`${content.substring(0, 253)}...`:content;
    return (
        <div key={id} className={styles.card}>
            <Link href={`/artigos/${id}`}>
                <img className={styles.card__poster}
                     src={`${urlToImage}`}
                     alt={`Capa de "${title}"`}/>
            </Link>
            <Link href={`/artigos/${id}`}>
                <div>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.card__description}>{resume}</p>
                    <p></p>
                </div>
            </Link>
        </div>
    );
}
export default Card