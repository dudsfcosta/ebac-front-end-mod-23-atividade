import {Local} from "@/types/types";
import Card from "@/app/components/Card";
import styles from "./Grid.module.css"

type Props = {
    local: Local[]
}
const Grid = ({local} : Props) => {

    return (

        <section className={styles.grid}>
            {local.map(local => <Card key={local.id} Local={local} />)}
        </section>
    )
}

export default Grid;