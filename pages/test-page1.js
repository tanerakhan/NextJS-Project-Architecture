import React, {Fragment} from 'react'
import Head from '../components/Head/index'
import Test1 from '../components/Test1'
import Layout from '../components/layout'
function TestPage1() {
    return (
        <Fragment>
            <Head title="Tüm Kulüpler"/>
            <Layout>
                <Test1/>
            </Layout>
        </Fragment>
    )
}
export default TestPage1