import React from 'react'
import css from '../static/styles/reset.scss'
import Load from '../components/LoadContent'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), {
    loading: () => <Load />,
    ssr: true,
})
const Footer = dynamic(() => import('./Footer'), {
    loading: () => <Load />,
    ssr: true,
})

const Layout = ({ children, checkHeader = true, checkFooter = true }) => {
    return (
        <div className="app" className={css.appRoot}>
            {!checkHeader ? '' : <Header />}
            <section className={css.rootSection}>{children}</section>
            {!checkFooter ? '' : <Footer />}
        </div>
    )
}
export default Layout
