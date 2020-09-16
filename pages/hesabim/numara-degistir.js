import React from 'react'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import Layout from 'components/Layout'
import MyNumberIsChange from 'components/Account/ChangeNumber'
import Input from 'components/FormElements/Input'
import Button from 'components/FormElements/Button'

function MyNumberIsChangePage() {
    const router = useRouter()
    return (
        <React.Fragment>
            <Head title="Numaramı Değiştir" />
            <Layout checkHeader={false} checkFooter={false}>
                <MyNumberIsChange>
                    <Button
                        type="default"
                        text="geri dön"
                        click={() => router.back()}
                    />
                    <p>
                        Lütfen yeni cep telefonu numaranızı girip Devam Et'e
                        basınız.
                    </p>
                    <form>
                        <div className="formGroup">
                            <Input
                                id="number"
                                htmlFor="number"
                                label="Yeni Numaranız"
                            />
                        </div>
                        <div className="formGroup">
                            <Button type="primary" text="devam et" />
                        </div>
                    </form>
                </MyNumberIsChange>
            </Layout>
        </React.Fragment>
    )
}

export default MyNumberIsChangePage
