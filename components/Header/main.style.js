import styled from 'styled-components';
export const HeaderContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    span{
        color:#484848;
        text-transform:uppercase;
    }
`;
export const HeaderTopContainer = styled.div `
background-color:#fff;
width: 100%;
display: flex;
justify-content: center;
max-width:1200px;
.TopLeftArea,.TopRightArea{
    width:50%;
}
.TopLeftArea{
    display:flex;
    justify-content:flex-start;
        .Logo{
            width: 100%;
            max-width: 70px;
        }
}
.TopRightArea{
    display:flex;
    justify-content:flex-end;
    align-items: center;
        div{
            i{
                font-size:20px;
                color:#0082C3;
            }
        }
        .topHeaderIconCenter{
            margin:0 25px;
        }
}
`; 
export const HeaderBottomContainer = styled.div `
background-color:#f6f6f6;
width: 100%;
display: flex;
justify-content: center;
    ul{
        display:flex;
        justify-content:flex-start;
        width:100%;
        max-width:1200px;
        li{
            text-transform: uppercase;
            &:nth-child(even){
                margin:0 100px;
            }
            a{
                transition:.5s ease;
                color:#484848;
                padding: 15px 0;
                    &:hover{
                        color:#0082C3;
                    }
            }
        }
    }
`; 