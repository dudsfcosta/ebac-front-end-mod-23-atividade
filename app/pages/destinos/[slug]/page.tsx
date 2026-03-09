"use client";

import { useParams } from "next/navigation";
import { locais } from "@/locais";
import Link from "next/link";
import Title from "@/app/components/Title";
import styles from "./DestinoDetalhe.module.css"

export default function DestinoDetalhe() {
    const params = useParams();
    const slug = params.slug as string;

    const destino = locais.find((id) => id.slug === slug);

    if (!destino) {
        return (
            <div className={styles.container}>
                <p>Destino não encontrado.</p>
                <Link href="/destinos">Voltar</Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Title title={`${destino.title}`} />

            <img className={styles.img}
                src={destino.image}
                alt={destino.title}
                style={{ width: "100%", maxWidth: "500px" }}
            />

            <p>{destino.description}</p>

            <Link className={styles.back} href="/pages/destinos">← Voltar para lista</Link>
        </div>
    );
}