import { Global } from "@mantine/core"

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    "@font-face": {
                        fontFamily: "Lato",
                        src: `url('./public/fonts/Lato-Bold.ttf') format('truetype')`,
                        fontWeight: 700,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Lato",
                        src: `url('./public/fonts/Lato-Regular.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Carter One",
                        src: `url('./public/fonts/CarterOne-Regular.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
            ]}
        />
    )
}
