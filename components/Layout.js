import React from 'react'
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
        <div className="app">
            {!checkHeader ? '' : <Header />}
            <section className="rootSection">{children}</section>
            {!checkFooter ? '' : <Footer />}
        </div>
    )
}
export default Layout
