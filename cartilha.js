import React from 'react';
//importando os componentes View e Text
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

// função
export default function Cartilha() {
return (
  <ScrollView>
<Text>
<b>Olá alunos da Unibra!!!!</b><br/>{'\n'}
<b>Primeiramente, Bom Dia!</b><br/>{'\n'}
<b>Estamos aqui para te ajudar<br/>
</b><br/>
 
<Image source={require('../assets/aaa.jpg')}/>{'\n'}{'\n'}{'\n'}
 
 <b className>APRENDEMOS SEMPRE:<br/></b> 
“A vida não é para quem sabe viver, a vida é para aqueles que demonstram, sem vergonha, tudo o que se passa dentro de si, ou seja, é para quem tem coragem! Você é corajoso, expôs suas fraquezas, suas inseguranças, sua depressão, você pediu ajuda, você é humano! Mesmo achando que nada mais tem sentido, tudo tem um propósito e nós aprendemos tanto no amor, quanto na dor… não deixe de demonstrar pois pessoas para te darem as mãos não irão faltar!”
{'\n'}{'\n'}

<b>1. Transtornos mentais:<br/></b> 
Você sabia que praticamente todas as pessoas que cometeram suicidio apresentavam pelo menos um transtorno psiquiátrico? Pessoas com depressão, transtorno bipolar, transtornos relacionados ao uso de drogas lícitas ou ilícitas (álcool, maconha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma a identificação e o tratamento dos transtornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio.
{'\n'}{'\n'}

<b>2. Histórico pessoal:<br/></b>
Tentativa prévia é o principal fator de risco para o suicídio. Indivíduos que já tentaram o suicídio têm de cinco a seis vezes de tentar novamente.
{'\n'}{'\n'}

<b>3. Ideação suicida:<br/></b>
Comentários que demostrem desespero desesperança e desamparo podem ser manifestação de uma ideação suicida. Ateção a expressões como "Eu não desejaria ter nascido", "Caso não nos encontraremos de novo", "Eu preferia estar morto" - são sinais de alerta.

</Text>

</ScrollView>
)
}

