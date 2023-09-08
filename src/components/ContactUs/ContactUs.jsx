import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ContactContainer, ContactForm } from "./contact-us.styles";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'

};

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // This sets the focused color to black
    },
  },
});

export default function ContactUs() {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [disabled, setDisabled] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true)
    emailjs
      .sendForm(
        "service_4x6no39",
        "template_9wd3crl",
        form.current,
        "m3CpW-khLCqhO8x_9"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleOpen()
        },
        (error) => {
          console.log(error.text);
        }
      ).then(
        ()=>{
          setDisabled(false)
        }
      );

  };

  return (
    <ContactContainer>
      <ContactForm onSubmit={sendEmail} ref={form} id="Contact Us">
        <h3>Contact Us</h3>
        <ThemeProvider theme={theme}>
          <div className="inputGroup">
            <TextField
              name="name"
              id="standard-basic"
              label="Your Name"
              variant="standard"
              fullWidth
              required
              style={{ margin: "10px 0" }}
            />
            <TextField
              name="email"
              type="email"
              id="standard-basic"
              label="Your Email"
              variant="standard"
              fullWidth
              style={{ margin: "20px 0" }}
              required
            />
            <TextField
              name="message"
              id="standard-basic"
              label="Your Message"
              multiline
              maxRows={4}
              variant="standard"
              style={{ margin: "20px 0" }}
              fullWidth
              required
            />
          </div>
        </ThemeProvider>
        <button disabled={disabled} id="btn" type="submit" value="Send" className="btn">
          SEND MESSAGE
        </button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your Message was sent successfully
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src="/src/assets/done.gif" width={200} alt="done" />
          </Typography>
        </Box>
      </Modal>
      </ContactForm>
    </ContactContainer>
  );
}
