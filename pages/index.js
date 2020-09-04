import React, {Component, Fragment} from 'react'
import Layout from '../components/layout'
import Head from '../components/Head'
import Load from '../components/LoadContent'
import dynamic from 'next/dynamic';
const Home = dynamic(
    () => import('../components/Home'),
    {
      loading: () => <Load/>,
      ssr: true,
    }
  )
class App extends Component {
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
export default App