import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductBox, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductProps) {
    const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckout(true);
            const res = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId
            })

            const { checkoutUrl } = res.data;

            window.location.href = checkoutUrl;
        } catch (err) {
            setIsCreatingCheckout(false);
            alert('Falha ao redirecionar ao checkout!');
            console.log(err);
        }
    }

    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Loading...</p>
    }
    
    return (
        <ProductContainer gridTemplateColumns={{'@initial':'full', '@hd':'hd'}}>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductBox>
                <ImageContainer>
                    <Image src={product.imageUrl} alt="" width={520} height={480} />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button disabled={isCreatingCheckout} onClick={handleBuyProduct}>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductBox>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: {id: 'prod_MoYEnkJ2fHbRN6'}}
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price
    
    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(price.unit_amount / 100),
                dscription: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1 // 1 hour
    }
}