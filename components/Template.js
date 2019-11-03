import Head from 'next/head'
import Nav from './nav'
function Template({ children, seoTitle }) {
  return (
    <div>
      <Head>
        <title>Paul Laborderie - {seoTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />

      <div className="content">
        {children}
      </div>
      <style jsx>{`
        .content {
          padding: 0 50px;
        }  
      `}</style>
    </div>
  )
}

export default Template;