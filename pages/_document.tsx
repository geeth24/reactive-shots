import { createGetInitialProps } from "@mantine/next"
import Document, { Head, Html, Main, NextScript } from "next/document"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
    static getInitialProps = getInitialProps

    render() {
        return (
            <Html lang="en" itemScope itemType="https://schema.org/WebPage">
                <Head>
                    <link rel="icon" href="/CameraLight.png" />
                    <link rel="apple-touch-icon" href="/CameraLight.png" />
                    <meta name="author" content="Geeth Gunnampalli" />
                    <meta
                        name="description"
                        content="Professional photography services specializing in portraits and Indian events. Contact Reactive Shots today for your next photo shoot!"
                    />
                    <meta
                        property="og:title"
                        content="Reactive Shots | Professional Photography Services"
                    />
                    <meta
                        property="og:description"
                        content="Professional photography services specializing in portraits and Indian events. Contact Reactive Shots today for your next photo shoot!"
                    />
                    <meta property="og:image" content="/ReactiveshotsBC.jpg" />
                    <meta
                        property="og:url"
                        content="https://reactiveshots.com"
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        itemProp="name"
                        content="Reactive Shots | Professional Photography Services"
                    />
                    <meta
                        itemProp="description"
                        content="Professional photography services specializing in portraits and Indian events. Contact Reactive Shots today for your next photo shoot!"
                    />
                    <meta itemProp="image" content="/ReactiveshotsBC.jpg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
