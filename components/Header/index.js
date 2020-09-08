import React from 'react'
import Link from 'next/link'
import { headerMenu } from '../../constant.json'
import {
    HeaderContainer,
    HeaderTopContainer,
    HeaderBottomContainer,
} from './main.style'
export default function Header() {
    return (
        <HeaderContainer>
            <HeaderTopContainer>
                <div className="TopLeftArea">
                    <img
                        src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                        className="Logo"
                    />
                </div>
                <div className="TopRightArea">
                    <div>
                        <i className="fal fa-search"></i>
                    </div>
                    <div className="topHeaderIconCenter">
                        <i className="fal fa-shopping-cart"></i>
                    </div>
                    <div>
                        {/* <i className="fal fa-user"></i> */}
                        <i className="fal fa-sign-in"></i>
                    </div>
                </div>
            </HeaderTopContainer>
            <HeaderBottomContainer>
                <ul>
                    {headerMenu.map(({ name, url, target }, i) => (
                        <li key={i}>
                            <Link href={url} target={target} prefetch={false}>
                                <a>{name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </HeaderBottomContainer>
        </HeaderContainer>
    )
}
