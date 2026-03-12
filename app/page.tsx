import Title from "@/app/components/Title";
import Body from "@/app/components/Body";
import {getArtigos} from "@/lib/functions";

export default async function Home() {
    const artigos = await getArtigos();
    return (
        <>
            <Title title="Home" />
            <Body artigos={artigos}></Body>
        </>
    );
}
