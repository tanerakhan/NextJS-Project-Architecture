import React, {Fragment} from 'react'
import Head from '../components/Head'
import Test2 from '../components/Test2'
import Layout from '../components/layout'
function TestPage2() {
    return (
        <Fragment>
            <Head title="Tüm Etkinlikler"/>
            <Layout>
                <Test2/>
            </Layout>
        </Fragment>
    )
}
export default TestPage2