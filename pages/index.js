import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import ExpandingCard from '../components/ExpandingCard'
import TextyAnim from 'rc-texty'
import 'rc-texty/assets/index.css';


const Home = () => (
  <div>
    <Head>
      <title>Paul Laborderie - Accueil</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>
        <TextyAnim type="right" mode="sync">Développeur web freelance</TextyAnim>
      </h1>
      <p className='description'>
        <TextyAnim type="right" mode="sync" delay={450}>
          Développement front et back, intégration continue et plugins CMS
        </TextyAnim>
      </p>

      <div className='row'>
        <ExpandingCard title="Mes projets &rarr;" href="/projects">
          Découvrez mes projets afin de vous faire une idée de mes capacités.
        </ExpandingCard>
        <ExpandingCard title="Mes compétences &rarr;" href="/skills">
          Les technologies, concepts et langages maîtrisés, pouvant être mis
          à disposition de votre entreprise.
        </ExpandingCard>
        <ExpandingCard title="Me contacter &rarr;" href="/contact">
          Je serais ravi de travailler avec vous ou de discuter de développement
          et de nouvelles technologies.
        </ExpandingCard>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      @media screen(max-width: 536px) {
        .row {
          flex-direction: column;
          align-items: space-around;
        }
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
