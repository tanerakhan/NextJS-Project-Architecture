import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import Layout from 'components/Layout'
import Button from 'components/FormElements/Button'
import Input from 'components/FormElements/Input'
import CountDown from 'components/CountDown'
import Modal from 'components/Modal'

export default function NewCSACard() {
    const countDownTime = 5
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [number, setNumber] = useState(null)
    const [otpNumber, setOtpNumber] = useState(null)
    const [isNumberValid, setNumberValid] = useState(false)
    const [counter, setCounter] = useState(countDownTime)
    const [openModal, setOpenModal] = useState(false)
    const [reSent, setResent] = useState(false)

    useEffect(() => {
        let timer = null
        console.log('isActive => ', isActive)
        if (isActive) {
            timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
            if (counter === 0) {
                setResent(true)
            }
        } else if (!isActive && counter !== 0) {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [isActive, counter])

    const handleOpen = () => {
        openModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleNumberOut = () => {
        if (number && number.length > 10) {
            console.log('tıklandı')
            setNumberValid(true)
            setNumber(null)
            setIsActive(!isActive)
        }
    }

    const handleOTP = (e) => {
        setOtpNumber(e.target.value)
        if (counter === 0) {
            setIsActive(!isActive)
        }
        if (e.target.value !== '') {
            setOpenModal(true)
        }
    }

    const reSentOTP = () => {
        setCounter(countDownTime)
        setResent(false)
        setIsActive(true)
    }

    return (
        <React.Fragment>
            <Head title="Yeni CarrefourSA Kart Tanımla" />
            <Layout checkHeader={false} checkFooter={false}>
                {
                    <Modal
                        openModal={openModal}
                        closeModal={handleClose}
                        title="test"
                        description="test"
                    />
                }
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

                        {reSent ? (
                            <Button
                                text="tekrar gönder"
                                classButton="companyColorButton"
                                click={(e) => reSentOTP()}
                            />
                        ) : (
                            <Button
                                text="sms'i onaylayın"
                                classButton="companyColorButton"
                                click={(e) => handleOTP(e)}
                            />
                        )}
                    </form>
                )}
            </Layout>
        </React.Fragment>
    )
}
