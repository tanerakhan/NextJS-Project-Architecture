import React, {Fragment} from 'react'
import Head from '../components/Head/index'
import AllEvent from '../components/AllEvent/index'
import Layout from '../components/layout'
function AllEvents() {
    return (
        <Fragment>
            <Head title="Tüm Etkinlikler"/>
            <Layout>
                <AllEvent/>
            </Layout>
        </Fragment>
    )
}
export default AllEvents