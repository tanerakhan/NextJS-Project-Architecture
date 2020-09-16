import React from 'react'
import Head from 'components/Head'
import Layout from 'components/Layout'
import MyOrder from 'components/Account/MyOrders'
import Modal from 'components/Modal'
import Button from 'components/FormElements/Button'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import { useRouter } from 'next/router'

function OrdersPage() {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const router = useRouter()

    return (
        <React.Fragment>
            <Head title="Siparişlerim" />
            <Layout checkHeader={false} checkFooter={false}>
                <Button
                    type="default"
                    text="geri dön"
                    click={() => router.back()}
                />
                <MyOrder />
                <AccessAlarmIcon />
                <Button type="primary" text="Buton" click={handleOpen} />
                <Modal
                    openModal={open}
                    title="Bilgilendirme!"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    closeModal={handleClose}
                />
            </Layout>
        </React.Fragment>
    )
}

export default OrdersPage
