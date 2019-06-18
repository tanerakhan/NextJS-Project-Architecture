import React, {Component} from 'react'
import Link from 'next/link'
import {HeaderContainer, HeaderTopContainer, HeaderBottomContainer} from './main.style'
export default class Index extends Component {
    render() {
        return (
            <HeaderContainer>
                <HeaderTopContainer>
                    <div className="TopLeftArea">
                        <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" className="Logo"/>
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
                        <li>
                            <Link href="/">
                                <a>ana sayfa</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tum-etkinlikler">
                                <a>tüm etkinlikler</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tum-kulupler">
                                <a>tüm kulüpler</a>
                            </Link>
                        </li>
                    </ul>
                </HeaderBottomContainer>
            </HeaderContainer>
        )
    }
}
