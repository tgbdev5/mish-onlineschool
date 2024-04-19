"use client";
import Image from "next/image";
import styles from "../styles/NavBar.module.scss";
import { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from '@mui/material/Paper';

const NavBar = () => {
  const [openLinks, setOpenLinks] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper className={styles.container1}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image className={styles.imgLogo} src={"/eye.png"} width={50} height={50} alt="logo" />
        </div>
        <div className={styles.center}>
          <div
            className={styles.menuIcon}
            onClick={() => setOpenLinks(!openLinks)}
          >
            <MenuIcon />
          </div>
          <ul className={openLinks ? styles.openNavLinks : styles.navLinks}>
            <li>
              <Link className={styles.link} href="/">home</Link>
            </li>
            <li>
              <Link href="/primary" className={styles.link} style={{ whiteSpace: "nowrap"}}>
                primary L
              </Link>
            </li>
            <li>
              <Link href="/secondary" className={styles.link} style={{ whiteSpace: "nowrap" }}>
                {" "}
                secondary L
              </Link>
            </li>
            <li>
              <Link href="/university" className={styles.link} style={{ whiteSpace: "nowrap" }}>
                {" "}
                university L
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Menu>
        </div>
      </div>
    </Paper>
  );
};

export default NavBar;
