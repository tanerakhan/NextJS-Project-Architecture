import React, {Fragment, Component} from 'react'
import Link from 'next/link'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <div>Hello NextJS</div>
                <Link prefetch href="/about">
                    <a>right redux Data</a>
                </Link>
            </Fragment>
        )
    }
}
