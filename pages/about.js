import React, { Fragment } from 'react'
import Link from "next/link";
import { connect } from "react-redux";
import { GetFooter } from '../store/actions/actions'
import Head from '../components/Head'
import Layout from '../components/layout'
/* import AboutUs from '../components/About/index' */
const User = ({ user }) => (
  <li>
    <Link as={`/u/${user.id}`} href={`/user?id=${user.id}`}>
      <a>{user.name}</a>
    </Link>
  </li>
);
const About = props => {
  const { footer } = props;
  return (
    <Fragment>
      <Head title="About page" />
      <Layout>
        Redux Data:
        <ul>{footer && footer.map(user => <User key={user.id} user={user} />)}</ul>
      </Layout>
    </Fragment>
  )
}
About.getInitialProps = async ctx => {
  const { footer } = await ctx.store.dispatch(GetFooter());
  return { footer };
}
const mapStateToProps = state => ({
  footer: state.reducers.footer
});

export default connect(mapStateToProps)(About);
