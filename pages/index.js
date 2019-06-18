import React, {Component, Fragment} from 'react'
import Layout from '../components/layout'
import Head from '../components/Head/index'
import Load from '../components/LoadContent'
import dynamic from 'next/dynamic';
const Home = dynamic(
    () => import('../components/Home/index'),
    {
      loading: () => <Load/>,
      ssr: true,
    }
  )
class Index extends Component {
    render() {
        return (
            <Fragment>
                <Head title="Home Page"/>
                <Layout>
                    <Home/>
                </Layout>
            </Fragment>
        )
    }
}
export default Index