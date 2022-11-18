import Image from "next/image"
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi assumenda earum, ut maiores quo! Mollitia obcaecati eaque minus modi veniam. Voluptate aliquam numquam voluptates molestias, harum soluta provident ipsam!</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}