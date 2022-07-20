import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Contatos } from '../components/Home/Contatos'
import { GithubRepos } from '../components/Home/GithubRepositories'
import { Servicos } from '../components/Home/Serviços'
import { Sobre } from '../components/Home/Sobre'
import { Tecnologias } from '../components/Home/Tecnologias'

export default function Home() {
  return (
    <>
      <Head>
        <title> Portfólio | Deivid Breda </title>
      </Head>

      <Header />
        <Sobre />
        <Servicos />
        <Tecnologias />
        <GithubRepos />
        <Contatos />
      <Footer />
    </>  
  )
}
