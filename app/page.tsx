import Title from "@/app/components/Title";
import Grid from "@/app/components/Body";
import {getArtigos} from "@/lib/functions";

export default async function Home() {
    const artigos = await getArtigos();
    return (
        <>
            <Title title="Home" />
            <Grid artigos={artigos}></Grid>
        </>
    );
}
