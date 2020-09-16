import React from 'react'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import Layout from 'components/Layout'
import MyProfile from 'components/Account/Profile'
import Button from 'components/FormElements/Button'

function MyProfilePage() {
    const router = useRouter()
    return (
        <React.Fragment>
            <Head title="Profilim" />
            <Layout checkHeader={false} checkFooter={false}>
                <Button
                    type="default"
                    text="geri dön"
                    click={() => router.back()}
                />
                <MyProfile />
            </Layout>
        </React.Fragment>
    )
}

export default MyProfilePage
