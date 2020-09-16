import styled from 'styled-components'
import { globalColorBlue } from '../../../constant.json'

const ProfileContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: auto;
`
const ProfileInfo = styled.ul`
    li {
        display: flex;
        padding: 5px 0;
        span {
            display: block;
            width: 100%;
            max-width: 130px;
            position: relative;
            margin-right: 10px;
            &:after {
                content: ':';
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }
`
const RedirectLinks = styled.div`
    a {
        background-color: ${globalColorBlue};
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        font-size: 13px;
        margin-bottom: 10px;
        &:first-child {
            margin-top: 10px;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export { ProfileContainer, RedirectLinks, ProfileInfo }
