import {Artigo} from "@/lib/types";
import Card from "@/app/components/Card";
import styles from "./Grid.module.css"

type Props = {
    artigos: Artigo[]
}
const Grid = ({artigos} : Props) => {

    return (

        <section className={styles.grid}>
            {artigos.map(artigo => <Card key={artigo.id} artigo={artigo} />)}
        </section>
    )
}

export default Grid;