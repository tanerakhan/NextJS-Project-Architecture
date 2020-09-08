import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import Link from "next/link";
import { search } from "../store/actions/actions";
import Head from "../components/Head";
import Layout from "../components/layout";

const About = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())
  }, [dispatch])

  const state = useSelector((state) => state)
  const { searchParam } = state;
  return(
<React.Fragment>
<Head title="About page" />
<Layout>
      {searchParam && searchParam.length > 0 && searchParam.map(({ id, username }) => (
        <span key={id}>{username}</span>
      ))}
    </Layout>
</React.Fragment>
  )
}
export default About