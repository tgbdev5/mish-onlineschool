"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import styles from "../styles/drawer.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type subject = {
  id: number;
  name: string;
};

const subjects: subject[] = [
  {
    id: 1,
    name: "mathematics",
  },
  {
    id: 2,
    name: "english",
  },
  {
    id: 3,
    name: "biology",
  },
  {
    id: 4,
    name: "chemistry",
  },
  {
    id: 5,
    name: "physics",
  },
  {
    id: 6,
    name: "histroy",
  },
  {
    id: 7,
    name: "geography",
  },
  {
    id: 8,
    name: "franch",
  },
  {
    id: 9,
    name: "agriculter",
  },
  {
    id: 10,
    name: "literature",
  },
];

export default function LeftDrawer() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Button>{"open drawer"}</Button>
      <List className={styles.subList}>
        {subjects.map((sub: subject) => (
          <ListItem disablePadding key={sub.id}>
            <ListItemButton>
              <ListItemText primary={sub.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
