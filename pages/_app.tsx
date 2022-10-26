import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import { CustomFonts } from "../CustomFonts"

export default function App(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <>
            <Head>
                <title>Reactive Shots</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    fontFamily: "Lato, sans-serif",
                    headings: { fontFamily: "Greycliff CF, sans-serif" },
                }}
            >
                <CustomFonts />
                <Component {...pageProps} />
            </MantineProvider>
        </>
    )
}
