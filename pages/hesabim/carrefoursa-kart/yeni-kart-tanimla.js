import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import Layout from 'components/Layout'
import Button from 'components/FormElements/Button'
import Input from 'components/FormElements/Input'
import CountDown from 'components/CountDown'
import Modal from 'components/Modal'

export default function NewCSACard() {
    const countDownTime = 15
    const router = useRouter()
    const [number, setNumber] = useState(null)
    const [otpNumber, setOtpNumber] = useState(null)
    const [isNumberValid, setNumberValid] = useState(false)
    const [counter, setCounter] = useState(countDownTime)
    const [openModal, setOpenModal] = React.useState(false)

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        return () => clearInterval(timer)
    }, [counter])

    const handleOpen = () => {
        openModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleNumberOut = (e) => {
        if (number.length > 10) {
            setNumberValid(true)
            setNumber(null)
        }
    }

    const handleOTP = (e) => {
        setOtpNumber(e.target.value)
        if (counter === 0 && otpNumber === '') {
            setOpenModal(true)
        } else {
            setOpenModal(true)
        }
    }

    return (
        <React.Fragment>
            <Head title="Yeni CarrefourSA Kart Tanımla" />
            <Layout checkHeader={false} checkFooter={false}>
                <Button
                    type="default"
                    text="geri dön"
                    click={() => router.back()}
                />
                {!isNumberValid ? (
                    <form style={{ marginTop: '10px' }}>
                        <div className="formGroup">
                            <Input
                                id="number"
                                htmlFor="number"
                                label="yeni numara tanımla"
                                onChange={(e) => handleNumber(e)}
                                value={number || ''}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        <Button
                            text="Tanımla"
                            classButton="companyColorButton"
                            click={(e) => handleNumberOut(e)}
                        />
                    </form>
                ) : (
                    <form style={{ marginTop: '10px' }}>
                        <CountDown
                            counter={counter}
                            style={{
                                margin: '10px 0',
                                textAlign: 'center',
                            }}
                            entry="10"
                        />
                        <div className="formGroup">
                            <Input
                                id="sms"
                                htmlFor="sms"
                                label="SMS KODU"
                                onChange={(e) => handleNumber(e)}
                                value={number || ''}
                            />
                        </div>
                        <Button
                            text="sms'i onaylayın"
                            classButton="companyColorButton"
                            click={(e) => handleOTP(e)}
                        />
                    </form>
                )}
            </Layout>
        </React.Fragment>
    )
}
