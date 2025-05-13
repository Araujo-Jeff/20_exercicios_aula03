import React from 'react'
import FilmeDetalhado from './FilmeDetalhado'


const ListaDeFilmesDetalhados = () => {
    const filmes = [
        {
            titulo: "Avatar",
            genero: "Ficção científica, Ação, Aventura",
            ano: 2009
        },
        {
            titulo: "Vingadores, Ultimato",
            genero: "Super-herói, Ação, Ficção científica",
            ano: 2019
        },
        {
            titulo: "Vingadores: Guerra Infinita",
            genero: "Super-herói, Ação, Ficção científica",
            ano: 2018
        },
        {
            titulo: "Divertida Mente 2",
            genero: "Animação, Aventura, Comédia",
            ano: 2024
        },
    ]

    return (
        <div>
            <h1>Lista de Filmes</h1>
            {
                filmes.map((filme, index) => (
                    <FilmeDetalhado key={index} titulo={filme.titulo} genero={filme.genero} ano={filme.ano} />
                ))
            }
        </div>
    )

}
export default ListaDeFilmesDetalhados