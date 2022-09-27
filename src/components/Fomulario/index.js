import "./Formulario.css";
import React, { useState } from 'react';
import TextArea from "../TextArea";
import ListaSuspensa from "../ListaSuspensa";
import Button from "../Button";

const Formulario = (props) => {
 /*  const times = ['Programação', 'Front-End', 'Data-Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'] */

  const[nome, setNome]= useState('')
  const[cargo, setcargo]= useState('')
  const[imagem, setImagem]= useState('')
  const[time, setTime]= useState('')

  const onSave = (event) =>{
    event.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    })
    setNome('')
    setcargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextArea 
        required={true} 
        label="Nome" 
        placeholder="Digite o seu nome" 
        value={nome}
        onNewValue={value => setNome(value)}
        />
        <TextArea 
        required={true} 
        label="Cargo" 
        placeholder="Digite o seu cargo" 
        value={cargo}
        onNewValue={value => setcargo(value)}
        />
        <TextArea  
        label="Imagem" 
        placeholder="Digite o endereço da imagem" 
        value={imagem}
        onNewValue={value => setImagem(value)}
        />
        <ListaSuspensa 
        required={true} 
        label="Times" 
        itens={props.times} 
        value={time}
        onNewValue={value => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
export default Formulario;
