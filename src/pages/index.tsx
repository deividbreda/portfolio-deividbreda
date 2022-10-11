import { gql } from 'graphql-request'
import { client } from '../services/graphql'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { Footer } from '../components/Portfolio/Footer'
import { Header } from '../components/Portfolio/Header'
import { Contatos } from '../components/Portfolio/Home/Contatos'
import { Projetos } from '../components/Portfolio/Home/Projetos'
import { Servicos } from '../components/Portfolio/Home/Serviços'
import { Sobre } from '../components/Portfolio/Home/Sobre'
import { Tecnologias } from '../components/Portfolio/Home/Tecnologias'
import { ModalSkills } from '../components/Portfolio/Home/Tecnologias/ModalSkills'

type PublicProjects = {
  title: string,
  link: string,
  img: string
}

export interface HomeProjectsProps {
  publicados: PublicProjects[]
}

export default function Home({ publicados }: HomeProjectsProps) {
  const [openModalSkills, setOpenModalSkills] = useState(false);

  function handleOpenModalSkills() {
    setOpenModalSkills(true);
  }

  function handleFechaModalSkills() {
    setOpenModalSkills(false);
  }

  return (
    <>
      <Head>
        <title> Portfólio | Deivid Breda </title>
      </Head>

      <Header />
        <Sobre />
        <Servicos />
        <Tecnologias openModal={handleOpenModalSkills} />
        <Projetos publicados={publicados} />
        <Contatos />
        <ModalSkills isOpen={openModalSkills} onRequestClose={handleFechaModalSkills}/>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query MyQuery {
      publicProjects {
        link
        title
        img {
          url
        }
      }
    }
  `

  const data = await client.request(query)

  const publicados = data.publicProjects.map(publicado => {
    return {
      title: publicado.title,
      link: publicado.link,
      img: publicado.img.url
    }
  })

  return {
    props: {
      publicados
    },
    revalidate: 60
  }
}
