import {Local} from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {

    Local: Local;
}
const Card = ({Local: local} : Props) => {

    const {id, title, image, description} = local;
    return (

        <div key={id} className={styles.card}>
            <img className={styles.card__poster} src={image} alt={`imagem de ${title}`} width={300} height={200} />
            <div>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{description}</p>
                <Link className={styles.button} href={`/pages/destinos/${local.slug}`}>Detalhes</Link>
            </div>
        </div>
    );
}
export default Card