import React from "react";
import { FooterContainer, FooterCol } from "./main.style";

function Footer() {
  /*     aboutFunction = () => {
          const footerData = this.props.GetFooterParam
          if(footerData !== undefined && footerData.Data !== undefined){
                  return <p>{footerData.Data.About.Content}</p>
          }
      } */
  return (
    <FooterContainer>
      <FooterCol>footer</FooterCol>
    </FooterContainer>
  );
}
export default Footer;
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
