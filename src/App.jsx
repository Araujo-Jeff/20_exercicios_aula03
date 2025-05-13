import React from 'react'
// import './App.css'
import SomaComEstilo from './components/SomaComEstilo'
import SubtraiComEstilo from './components/SubtraiComEstilo'
import MultiplicaComEstilo from './components/MultiplicaComEstilo'
import DivideComEstilo from './components/DivideComEstilo'
import EstudoHoje from './components/EstudoHoje'
import SegundosParaMinutos from './components/SegundosParaMinutos'
import MinutosParaSegundos from './components/MinutosParaSegundos'
import SegundosParaHoras from './components/SegundosParaHoras'
import HorasParaSegundos from './components/HorasParaSegundos'
import ListaDeFilmesDetalhados from './components/ListaDeFilmesDetalhados'
import MensagemClima from './components/MensagemClima'
import DesejoDoDia from './components/DesejoDoDia'
import AnimalFavorito from './components/AnimalFavorito'
import GaleriaImagens from './components/GaleriaImagens'
import GaleriaPublica from './components/GaleriaPublica'
import ImagemCondicional2 from './components/ImagemCondicional2'
import ListaDeFrutas from './components/ListaDeFrutas'
import ContatoUsuario from './components/ContatoUsuario'
import ListaProdutos from './components/ListaProdutos'
import MensagemNota from './components/MensagemNota'
import CorFavorita from './components/CorFavorita'

const App = () => {
  return (
    <div>
      <SomaComEstilo num1={2} num2={5} />
      <SubtraiComEstilo num1={2} num2={5} />
      <MultiplicaComEstilo num1={2} num2={5} />
      <DivideComEstilo num1={10} num2={2} />
      <EstudoHoje tecnologia={"React"} />
      <SegundosParaMinutos segundosMinutos={3600} />
      <MinutosParaSegundos minutos={5} />
      <SegundosParaHoras segundosHoras={7200} />
      <HorasParaSegundos horas={5} />
      <ListaDeFilmesDetalhados />
      <MensagemClima />
      <DesejoDoDia desejo={"Ir a praia"} />
      <AnimalFavorito />
      <GaleriaImagens />
      <GaleriaPublica />
      <ImagemCondicional2 />
      <ListaDeFrutas />
      <ContatoUsuario />
      <ListaProdutos />
      <MensagemNota />
      <CorFavorita />
    </div>
  )
}

export default App