import Head from 'next/head'
import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Contatos } from '../components/Home/Contatos'
import { GithubRepos } from '../components/Home/GithubRepositories'
import { Servicos } from '../components/Home/Serviços'
import { Sobre } from '../components/Home/Sobre'
import { Tecnologias } from '../components/Home/Tecnologias'
import { ModalSkills } from '../components/Home/Tecnologias/ModalSkills'

export default function Home() {
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
        <GithubRepos />
        <Contatos />
        <ModalSkills isOpen={openModalSkills} onRequestClose={handleFechaModalSkills}/>
      <Footer />
    </>
  )
}
