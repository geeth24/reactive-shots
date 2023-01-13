import { Global } from "@mantine/core"

export function CustomFonts() {
    return (
        <Global
            styles={(theme) => [
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
                {
                    "@font-face": {
                        fontFamily: "Carter One",
                        src: `url('/fonts/Carter One-Regular.otf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Blackmud",
                        src: `url('/fonts/Blackmud-VGoOx.ttf') format('truetype')`,
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
                {
                    ".custom-wrapper-class": {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridGap: "1rem",

                        "@media (max-width: 768px)": {
                            gridTemplateColumns: "repeat(2, 1fr)",
                        },
                    },
                    ".custom-wrapper-class2": {
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridGap: "1rem",

                        "@media (max-width: 768px)": {
                            gridTemplateColumns: "repeat(3, 1fr)",
                        },
                    },
                },
                {
                    ".active": {
                        backgroundColor: theme.fn.variant({
                            variant: "light",
                            color: "blue",
                        }).background,
                        color: theme.fn.variant({
                            variant: "light",
                            color: "blue",
                        }).color,
                    },
                },
            ]}
        />
    )
}
