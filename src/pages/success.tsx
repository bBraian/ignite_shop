import Link from "next/link";
import { SuccessContainer, ImageContainer } from "../styles/pages/success";

export default function Product() {
    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuul <strong>Braian</strong>, sua <strong>Camiseta Beyound the Limits</strong> já está a caminho de sua casa.
            </p>

            <Link href="/">
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}