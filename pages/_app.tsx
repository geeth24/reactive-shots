import { AppProps } from "next/app"
import Head from "next/head"
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
} from "@mantine/core"
import { CustomFonts } from "../CustomFonts"
import { useState } from "react"

export default function App(props: AppProps) {
    const { Component, pageProps } = props
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark")
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

    return (
        <div
        //disable scrollbars
        >
            <Head>
                <title>Reactive Shots</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        fontFamily: "Lato, sans-serif",
                        headings: { fontFamily: "Greycliff CF, sans-serif" },
                        colorScheme: colorScheme,
                        primaryColor: "red",
                        //dsiable scrollbars
                    }}
                >
                    <CustomFonts />
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    )
}
