import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react';

import camisa3 from '../assets/camisetas/3.png';

import 'keen-slider/keen-slider.min.css';

import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />
            <footer>
              <strong>{ product.name }</strong>
              <span>{ product.price }</span>
            </footer>
          </Product>
        )
      })}


    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = res.data.map(prod => {
    const price = prod.default_price as Stripe.Price
    return {
      id: prod.id,
      name: prod.name,
      imageUrl: prod.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100)
    }
  })
  console.log(res.data)
  return {
    props: {
      products: products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}