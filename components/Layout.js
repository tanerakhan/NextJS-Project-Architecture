import React, {Component} from "react";
import css from "../static/styles/reset.scss"
import Load from '../components/LoadContent'
import dynamic from 'next/dynamic';
const Header = dynamic(
    () => import('./Header/index'),
    {
      loading: () => <Load/>,
      ssr: true,
    }
  )
const Footer = dynamic(
    () => import('./Footer/index'),
    {
      loading: () => <Load/>,
      ssr: true,
    }
  )
class Layout extends Component {
    render() {
        return (
            <div className="app" className={css.appRoot}>
                <Header />
                <section className={css.rootSection}>{this.props.children}</section>
                <Footer />
            </div>
        );
    }
}
export default Layout;