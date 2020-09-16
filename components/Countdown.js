import React, { useEffect, useState } from 'react'

export default function CountDown({ counter, ...props }) {
    return (
        <div {...props}>
            Kalan Süre: <strong>{counter}</strong>
        </div>
    )
}
