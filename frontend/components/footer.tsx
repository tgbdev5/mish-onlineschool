"use client";
import { useState } from "react";
import styles from "../styles/footer.module.scss";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PeopleIcon from "@mui/icons-material/People";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GavelIcon from "@mui/icons-material/Gavel";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.about}>
          <Typography gutterBottom variant="h6" component="div">
            contact us
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <WhatsAppIcon sx={{ color: "#25D366" }} />
                </ListItemIcon >
                <ListItemText primary="+79258534128 / +33752278870" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={handleClickOpen}>
              <ListItemButton>
                <ListItemIcon>
                  <EmailIcon sx={{ color: "#d44638" }} />
                </ListItemIcon>
                <ListItemText primary="email us availabe 24/7" />{" "}
                {/*clasesconjose@outlook.com*/}
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className={styles.statistics}>
          <Typography gutterBottom variant="h6" component="div">
            statistics
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon className={styles.icon}/>
                </ListItemIcon>
                <ListItemText primary=" 7 000 active leaners and tutors" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MenuBookIcon className={styles.icon}/>
                </ListItemIcon>
                <ListItemText primary=" 500 total courses available" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className={styles.more}>
          <Typography gutterBottom variant="h6" component="div">
            more
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GavelIcon  className={styles.icon}/>
                </ListItemIcon>
                <ListItemText primary="Terms" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PrivacyTipIcon className={styles.icon}/>
                </ListItemIcon>
                <ListItemText primary="Privacy" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccessibilityIcon className={styles.icon} />
                </ListItemIcon>
                <ListItemText primary=" Accessibility " />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </div>
      <Divider sx={{backgroundColor:"white"}}/>
      <div className={styles.bottom}>&copy; 2024 All Rights Reserved</div>
      {/* this is the modal for the email */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>email us</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              marginBottom: "20px",
            }}
          >
            You can email us at <span style={{fontStyle:"italic", color:"black"}}>clasesconjose@outlook.com</span> directly from this
            website
          </DialogContentText>
          <TextField
            focused
            required
            margin="dense"
            id="name"
            name="email"
            label="your email Address"
            type="email"
            fullWidth
            variant="outlined"
            size="small"
            sx={{
                marginBottom: "20px",
              }}
          />
          <TextField
            id="message"
            multiline
            label="your message"
            variant="outlined"
            focused
            fullWidth
            minRows={3}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{textTransform:"lowercase"}}>cancel</Button>
          <Button type="submit" sx={{textTransform:"lowercase"}}>send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Footer;
