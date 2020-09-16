import React from 'react'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import Layout from 'components/Layout'
import MyCreditCard from 'components/Account/MyCreditCard'
import Button from 'components/FormElements/Button'

function MyCreditCardPage() {
    const router = useRouter()
    return (
        <React.Fragment>
            <Head title="Kredi Kartlarım" />
            <Layout checkHeader={false} checkFooter={false}>
                <Button
                    type="default"
                    text="geri dön"
                    click={() => router.back()}
                />
                <MyCreditCard />
            </Layout>
        </React.Fragment>
    )
}

export default MyCreditCardPage
