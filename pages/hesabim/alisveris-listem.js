import React from 'react'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import Layout from 'components/Layout'
import MyShoppingList from 'components/Account/ShoppingList'
import Button from 'components/FormElements/Button'

function MyShoppingListPage() {
    const router = useRouter()
    return (
        <React.Fragment>
            <Head title="Alışveriş Listem" />
            <Layout checkHeader={false} checkFooter={false}>
                <Button
                    type="default"
                    text="geri dön"
                    click={() => router.back()}
                />
                <MyShoppingList />
            </Layout>
        </React.Fragment>
    )
}

export default MyShoppingListPage
