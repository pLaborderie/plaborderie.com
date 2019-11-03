import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/projects', label: 'Mes projets' },
  { href: '/skills', label: 'Mes compétences' },
  { href: '/contact', label: 'Me contacter' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <Link href='/'>
      <a>Accueil</a>
    </Link>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href} key={key}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 16px;
      }
      ul {
        display: flex;
        justify-content: space-around;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
