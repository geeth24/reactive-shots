import { Global } from "@mantine/core"

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    "@font-face": {
                        fontFamily: "Lato",
                        src: `url('/fonts/Lato-Bold.ttf') format('truetype')`,
                        fontWeight: 700,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Lato",
                        src: `url('/fonts/Lato-Regular.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Carter One",
                        src: `url('/fonts/CarterOne-Regular.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                //disable scrollbars
                {
                    "::-webkit-scrollbar": {
                        width: 0,
                        height: 0,
                    },
                },
            ]}
        />
    )
}
