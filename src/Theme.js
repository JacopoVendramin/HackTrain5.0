import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import indigo from "@material-ui/core/colors/indigo";

const Theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: indigo
    },
    typography: {
        useNextVariants: true,
        fontFamily: "Open Sans",
        h1: {
            color: "#e3e3e3",
            fontFamily: "Montserrat",
            fontSize: "1.6rem",
            lineHeight: "2rem",
            fontWeight: "500"
        },
        h2: {
            color: "#e3e3e3",
            fontFamily: "Montserrat",
            fontSize: "1.4rem",
            lineHeight: "1.8rem",
            marginBottom: ".4rem",
            fontWeight: "500"
        },
        h5: {
            color: "#131313",
            fontFamily: "Montserrat",
            fontWeight: "500"
        },
        h6: {
            color: "#e3e3e3",
            fontFamily: "Montserrat",
            fontWeight: "700"
        },
        body1: {
            color: "#e3e3e3"
        },
        body2: {
            lineHeight: "1.8rem",
            color: "#131313"
        },
        button: {
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "1rem",
            color: "#131313",
            textTransform: "capitalize"
        }
    }
});

export default Theme;
