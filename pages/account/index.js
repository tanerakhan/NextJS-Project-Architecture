import Link from 'next/link'
import { withRouter } from 'next/router'

import Head from '../../components/Head'
import Layout from '../../components/layout'
import Account from '../../components/Account'

import { accountTabs } from '../../constant.json'

const AccountPage = ({ router }) => {
    const { pathname } = router
    return (
        <React.Fragment>
            <Head title="Account Page" />
            <Layout checkHeader={false} checkFooter={false}>
                <Account>
                    {accountTabs.map(({ name, url = pathname, target }, i) => (
                        <li key={i}>
                            <Link
                                href="/account/[profile]"
                                as={`/account/${url}`}
                                target={target}
                            >
                                <a>{name}</a>
                            </Link>
                        </li>
                    ))}
                    <li></li>
                </Account>
            </Layout>
        </React.Fragment>
    )
}
export default withRouter(AccountPage)
