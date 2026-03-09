import styles from "./Paragraph.module.css"

type Props = {

    text : string
}
const Text = ({text} : Props) => {

    return (
        <p className={styles.paragraph}>{text}</p>
    )
};

export default Text;