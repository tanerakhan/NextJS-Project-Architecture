import styled from 'styled-components'

const AccountContainer = styled.ul`
    li {
        display: block;
        a {
            display: block;
            padding: 10px;
            font-size: 18px;
            &:hover {
                opacity: 0.7;
            }
        }
    }
`

export { AccountContainer }
