import React from 'react'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import Layout from 'components/Layout'
import MyAdress from 'components/Account/MyAdress'
import Button from 'components/FormElements/Button'
function MyAdressPage() {
    const router = useRouter()
    return (
        <React.Fragment>
            <Head title="Adreslerim" />
            <Layout checkHeader={false} checkFooter={false}>
                <Button
                    type="default"
                    text="geri dön"
                    click={() => router.back()}
                />
                <MyAdress />
            </Layout>
        </React.Fragment>
    )
}

export default MyAdressPage
