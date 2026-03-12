import {Artigo} from "@/lib/types";
import Card from "@/app/components/Card";
import styles from "./Body.module.css"

type Props = {
    artigos: Artigo[]
}
const Grid = ({artigos} : Props) => {

    return (

        <section className={styles.body}>
            {artigos.map(artigo => <Card key={artigo.title} artigo={artigo} />)}
        </section>
    )
}

export default Grid;