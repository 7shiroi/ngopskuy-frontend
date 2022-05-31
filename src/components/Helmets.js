import React from 'react'
import { Helmet } from "react-helmet";

export const Helmets = ({ children }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{children} | NGOPSKUY</title>
            <link rel="canonical" to="/" />
        </Helmet>
    )
}
export default Helmets