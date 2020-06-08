import React from 'react'
import Link from 'next/link'
export default function Home() {
        return (
            <React.Fragment>
                <div>Hello NextJS</div>
                <Link prefetch href="/about">
                    <a>right redux Data</a>
                </Link>
            </React.Fragment>
        )
}
