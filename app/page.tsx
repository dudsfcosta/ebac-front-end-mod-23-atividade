import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import Paragraph from "@/app/components/Paragraph";

export default function Home() {
  return (
      <>
          <Title title="Conheça os Melhores Pontos Turísticos de Campinas!" />
          <Paragraph text="Explore os principais pontos turísticos da cidade e planeje sua visita."/>
          <Paragraph text={"Este portal foi criado para apresentar alguns dos principais pontos turísticos da cidade, reunindo informações de forma simples, visual e acessível. Aqui você pode explorar destinos conhecidos, conhecer um pouco mais sobre cada lugar e se inspirar para planejar seu próximo passeio."}/>
          <Paragraph text={"Navegue pela lista de destinos, descubra espaços como o Parque Taquaral, o Bosque dos Jequitibás, a Pedreira do Chapadão e a Catedral Metropolitana, e mergulhe na história e na cultura de Campinas."}/>
          <Grid local={[]}></Grid>
      </>
  );
}
