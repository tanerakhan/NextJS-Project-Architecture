import React from 'react'

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        const { statusCode } = this.props
        return (
            <p>
                {statusCode
                    ? `${statusCode} | Server Hatası`
                    : '404 Hatası! Sayfa Bulunamadı'}
            </p>
        )
    }
}

export default Error
