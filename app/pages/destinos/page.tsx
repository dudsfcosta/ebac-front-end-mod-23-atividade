import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import {locais} from "@/locais";

const Destinos = () => {

    return (
        <>
            <Title title="Destinos"/>
            <Grid local={locais}></Grid>
        </>
    )
}

export default Destinos;