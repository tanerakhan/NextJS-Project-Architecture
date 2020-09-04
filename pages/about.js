import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import Link from "next/link";
//import { connect } from "react-redux";
import { search } from "../store/actions/actions";
import Head from "../components/Head";
import Layout from "../components/layout";
/* import AboutUs from '../components/About/index' */

/* const About = (props) => {
  const { footer } = props;
  return (
    <Fragment>
      <Head title="About page" />
      <Layout>
        Redux Data:
        <ul>
          {footer &&
            footer.map((user) => <span key={user.id}>{user.name}</span>)}
        </ul>
      </Layout>
    </Fragment>
  );
};
About.getInitialProps = async (ctx) => {
  const { footer } = await ctx.store.dispatch(GetFooter());
  return { footer };
};
const mapStateToProps = (state) => ({
  footer: state.reducers.footer,
});

export default connect(mapStateToProps)(About); */

const About = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())
  }, [dispatch])

  const state = useSelector((state) => state)
  const { searchParam } = state;
  console.log('state => ', searchParam);
  return(
    <div>
      {searchParam && searchParam.length > 0 && searchParam.map(({ id, username }) => (
        <span key={id}>{username}</span>
      ))}
    </div>
  )
}
export default About