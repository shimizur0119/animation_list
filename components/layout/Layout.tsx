import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="header">
      <div className="header__inner">
        シミズ<span className="u-textSmall">の</span>アニメーション図鑑<span> with React.js(Next.js)</span>
      </div>
      <div className="header__menu">
        <div className="header__menu--bar"></div>
        <div className="header__menu--bar"></div>
        <div className="header__menu--bar"></div>
      </div>
    </header>
    <main>
      {children}
    </main>
    <footer>
      フッター
    </footer>
  </>
)

export default Layout
