import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeadMeta from '@/compoments/HeadMeta'
import AboutComponent from '@/compoments/about'
import Header from '@/compoments/Layout/Header'
import Footer from '@/compoments/Layout/Footer'
import Main from './../compoments/Layout/Main';
import axiosClient from '@/libraries/axiosClient';


const inter = Inter({ subsets: ['latin'] })

export default function Home({categories, products, flashsale, hotdeal}) {
  return (
    <>
      <HeadMeta title="Trang thương mại uy tín nhất việt nam" />
      {/* <AboutComponent/> */}
      <Header/>
      <Main categories={categories} products={products} flashsale={flashsale} hotdeal={hotdeal}/>

      <Footer/>
    </>
  )
}
export async function getServerSideProps() {
  try {
    const response = await axiosClient.get('/products');
    const response1 = await axiosClient.get('/categories');
    const response2 = await axiosClient.get('/question/flashsale');
    const response3 = await axiosClient.get('/question/hotdeal');

    return {
      props: {
        categories: response1.data.payload,
        products: response.data.payload,
        flashsale: response2.data.payload,
        hotdeal: response3.data.payload,
      },

      // revalidate: 24 * 60 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

