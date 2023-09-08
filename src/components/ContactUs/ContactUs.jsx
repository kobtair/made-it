import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ContactContainer, ContactForm } from "./contact-us.styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // This sets the focused color to black
    },
  },
});

export default function ContactUs() {
  return (
    <ContactContainer>
      <ContactForm id="Contact Us">
        <h3>Contact Us</h3>
        <ThemeProvider theme={theme}>
        <div className="inputGroup">
          <TextField
            id="standard-basic"
            label="Your Name"
            variant="standard"
            fullWidth
            required
            style={{margin: '10px 0'}}
          />
          <TextField
            id="standard-basic"
            label="Your Email"
            variant="standard"
            fullWidth
            style={{margin: '20px 0'}}
            required
          />
          <TextField
            id="standard-basic"
            label="Your Message"
            multiline
            maxRows={4}
            variant="standard"
            style={{margin: '20px 0'}}
            fullWidth
            required
          />
        </div>
        </ThemeProvider>
        <button type="submit" className="btn">SEND MESSAGE</button>
      </ContactForm>
    </ContactContainer>
  );
}
