import React from 'react'
import { profileRedirects } from '../../../constant.json'
import { ProfileContainer, RedirectLinks, ProfileInfo } from './style'
import Link from 'next/link'

const Redirects = () => {
    return profileRedirects.map(({ text, url }, i) => (
        <Link key={i} href={`${url}`}>
            <a>{text}</a>
        </Link>
    ))
}

function MyProfile() {
    return (
        <ProfileContainer>
            <ProfileInfo>
                <li>
                    <span>İsim</span>
                    <strong>Taner</strong>
                </li>
                <li>
                    <span>Soyisim</span>
                    <strong>Akhan</strong>
                </li>
                <li>
                    <span>E-posta</span>
                    <strong>tanerakhan80@gmail.com</strong>
                </li>
                <li>
                    <span>Cep numarası</span>
                    <strong>0532 483 10 93</strong>
                </li>
                <li>
                    <span>Tc kimlik numarası</span>
                    <strong>11111111111</strong>
                </li>
                <li>
                    <span>Big sicil numarası</span>
                    <strong>111111</strong>
                </li>
                <li>
                    <span>CClub numarası</span>
                    <strong>111111111</strong>
                </li>
            </ProfileInfo>
            <RedirectLinks>
                <Redirects />
            </RedirectLinks>
        </ProfileContainer>
    )
}

export default MyProfile
