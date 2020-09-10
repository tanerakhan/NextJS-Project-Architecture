import React from 'react'
import Head from '../../components/Head'
import MyOrder from '../../components/Account/siparislerim'

function OrdersPage() {
    return (
        <React.Fragment>
            <Head title="Siparişlerim" />
            <MyOrder />
        </React.Fragment>
    )
}

export default OrdersPage
