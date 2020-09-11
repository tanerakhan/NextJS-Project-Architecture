import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import { useRouter } from 'next/router'

export default function DktPlatformApp({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChangeError = (err, url) => {
            if (err.cancelled) {
                console.log(`Route to ${url} was cancelled!`)
            }
        }

        router.events.on('routeChangeError', handleRouteChangeError)

        return () => {
            router.events.off('routeChangeError', handleRouteChangeError)
        }
    }, [])

    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
