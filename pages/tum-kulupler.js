import React, {Fragment} from 'react'
import Head from '../components/Head/index'
import AllClub from '../components/AllClub/index'
import Layout from '../components/layout'
function AllClubs() {
    return (
        <Fragment>
            <Head title="Tüm Kulüpler"/>
            <Layout>
                <AllClub/>
            </Layout>
        </Fragment>
    )
}
export default AllClubs