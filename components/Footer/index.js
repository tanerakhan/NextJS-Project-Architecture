import React, {Component} from 'react'
import {FooterContainer, FooterCol} from './main.style'

class Footer extends Component {
/*     aboutFunction = () => {
        const footerData = this.props.GetFooterParam
        if(footerData !== undefined && footerData.Data !== undefined){
                return <p>{footerData.Data.About.Content}</p>
        }
    } */
    render() {
        debugger
            return (
                <FooterContainer>
                    <FooterCol>
footer
                    </FooterCol>
                </FooterContainer>
            ) 
       
    }
}
export default Footer
/* export default connect(state => { return state } )(Footer) */
/* function mapStateToProps (state) {
    const { GetFooterParam } = state
    return { GetFooterParam }
  }
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ GetFooter }, dispatch)
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Footer) */
  
