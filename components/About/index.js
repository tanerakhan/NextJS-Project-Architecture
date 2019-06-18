import React, {Fragment, Component} from 'react'
import Link from 'next/link'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    About Page
                </div>
                <Link href="/">
                    <a>Home Page</a>
                </Link>
            </Fragment>
        )
    }
}
