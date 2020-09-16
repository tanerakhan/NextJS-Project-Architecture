import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import Input from 'components/FormElements/Input'
import Layout from 'components/Layout'
import UpdateToProfile from 'components/Account/UpdateProfile'
import Select from 'components/FormElements/SelectBox'
import Checkbox from 'components/FormElements/Checkbox'
import Button from 'components/FormElements/Button'

function MyProfileUpdatePage() {
    const [day, setDays] = useState('')
    const [month, setMonths] = useState('')
    const [year, setYears] = useState('')

    const [totalDay, setTotalDay] = useState([])
    const [totalMonth, setTotalMonth] = useState([])
    const [totalYear, setTotalYear] = useState([])

    const handleChangeDay = (event) => {
        setDays(event.target.value)
    }

    const handleChangeMonth = (event) => {
        setMonths(event.target.value)
    }

    const handleChangeYear = (event) => {
        setYears(event.target.value)
    }

    function DayItems() {
        let dayQuantity = []
        for (let i = 1; i <= 31; i++) {
            dayQuantity.push(i)
        }
        setTotalDay(dayQuantity)
    }

    function MonthItems() {
        let months = [
            'Ocak',
            'Şubat',
            'Mart',
            'Nisan',
            'Mayıs',
            'Haziran',
            'Temmuz',
            'Ağustos',
            'Eylül',
            'Ekim',
            'Kasım',
            'Aralık',
        ]
        setTotalMonth(months)
    }

    function YearItems() {
        let years = []
        for (let i = 1900; i <= 2010; i++) {
            years.push(i)
        }
        setTotalYear(years)
    }

    useEffect(() => {
        DayItems()
        MonthItems()
        YearItems()
    }, [])
    const router = useRouter()
    return (
        <React.Fragment>
            <Head title="Profilimi Güncelle" />
            <Layout checkHeader={false} checkFooter={false}>
                <UpdateToProfile>
                    <Button
                        type="default"
                        text="geri dön"
                        click={() => router.back()}
                    />
                    <div className="formGroup">
                        <Input id="name" htmlFor="name" label="isim" />
                    </div>
                    <div className="formGroup">
                        <Input id="surname" htmlFor="surname" label="Soyisim" />
                    </div>
                    <div className="formGroup">
                        <Input id="email" htmlFor="email" label="Email" />
                    </div>
                    <div className="formGroup">
                        <Input
                            id="phone"
                            htmlFor="phone"
                            label="Telefon Numarası"
                        />
                    </div>
                    <div className="formGroup">
                        <Input id="big" htmlFor="big" label="big numarası" />
                    </div>
                    <div className="formGroup">
                        <Input
                            id="cclub"
                            htmlFor="cclub"
                            label="c club numarası"
                        />
                    </div>
                    <div className="formGroup">
                        <Select
                            message="gün"
                            val={day}
                            onhandleChange={handleChangeDay}
                            items={totalDay}
                        />
                        <Select
                            message="Ay"
                            val={month}
                            onhandleChange={handleChangeMonth}
                            items={totalMonth}
                        />
                        <Select
                            message="Yıl"
                            val={year}
                            onhandleChange={handleChangeYear}
                            items={totalYear}
                        />
                    </div>
                    <div className="formGroup">
                        <Checkbox labelText="CarrefourSA'nın, kampanya ve promosyonlarını paylaşmak üzere tarafım ile SMS yolu ile iletişime geçmesine izin veriyorum  " />
                    </div>
                </UpdateToProfile>
            </Layout>
        </React.Fragment>
    )
}

export default MyProfileUpdatePage
