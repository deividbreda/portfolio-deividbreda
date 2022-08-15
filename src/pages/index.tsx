import Head from 'next/head'
import { useState } from 'react'

import { Footer } from '../components/Portfolio/Footer'
import { Header } from '../components/Portfolio/Header'
import { Contatos } from '../components/Portfolio/Home/Contatos'
import { GithubRepos } from '../components/Portfolio/Home/GithubRepositories'
import { Servicos } from '../components/Portfolio/Home/Serviços'
import { Sobre } from '../components/Portfolio/Home/Sobre'
import { Tecnologias } from '../components/Portfolio/Home/Tecnologias'
import { ModalSkills } from '../components/Portfolio/Home/Tecnologias/ModalSkills'

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
