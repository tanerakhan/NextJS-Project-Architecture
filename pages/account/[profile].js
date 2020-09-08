import React from 'react'
import { useRouter, withRouter } from 'next/router'
import dynamic from 'next/dynamic'

function Profile() {
    const router = useRouter()
    const { profile } = router.query
    const Dyna = dynamic(() => import(`../../components/Account/${profile}`))
    return <Dyna />
}

Profile.getInitialProps = async () => {
    return {}
}

export default withRouter(Profile)
