import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'components/Head'
import Layout from 'components/Layout'
import Button from 'components/FormElements/Button'
import MyCarrefoursaCard from 'components/Account/CarrefoursaCard'
import NewCard from 'components/Account/CarrefoursaCard/newCardDefine'

function CarrefoursaCard() {
    const router = useRouter()
    let isThereCard = false
    return (
        <React.Fragment>
            <Head title="CarrefourSA Kart" />
            <Layout checkHeader={false} checkFooter={false}>
                <Button
                    type="default"
                    text="geri dön"
                    click={() => router.back()}
                />
                <MyCarrefoursaCard>
                    {!isThereCard ? (
                        <NewCard>
                            <Link href="carrefoursa-kart/yeni-kart-tanimla">
                                Tanımla
                            </Link>
                        </NewCard>
                    ) : (
                        <div>kart tanımlama tasarımı</div>
                    )}
                </MyCarrefoursaCard>
            </Layout>
        </React.Fragment>
    )
}

export default CarrefoursaCard
