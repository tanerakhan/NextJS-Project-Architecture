import Link from 'next/link'
import { withRouter } from 'next/router'

import Head from 'components/Head'
import Layout from 'components/layout'
import Account from 'components/Account'

import { accountTabs } from 'constant.json'

const AccountPage = ({ router }) => {
    const { pathname } = router
    console.log('pathname => ', pathname)
    return (
        <React.Fragment>
            <Head title="Hesabım" />
            <Layout checkHeader={false} checkFooter={false}>
                <Account>
                    {accountTabs.map(({ name, url = pathname, target }, i) => (
                        <li key={i}>
                            <Link
                                href={`/hesabim/${url}`}
                                //href="/hesabim/[profile]"
                                //as={`/hesabim/${url}`}
                                target={target}
                            >
                                <a>{name}</a>
                            </Link>
                        </li>
                    ))}
                </Account>
            </Layout>
        </React.Fragment>
    )
}
export default withRouter(AccountPage)
