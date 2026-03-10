import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import {getArtigos} from "@/lib/functions";

export default async function Home() {
    const artigos = await getArtigos();
    return (
        <>
            <Title title="Highlight" />
            <Grid artigos={artigos}></Grid>
        </>
    );
}
